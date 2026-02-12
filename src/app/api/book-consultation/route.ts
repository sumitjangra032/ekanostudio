import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";
import { format } from "date-fns";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            name,
            email,
            phone,
            country,
            category,
            service,
            callDate,
            callTime,
            contactMethod,
            requirements,
        } = body;

        // ✅ Basic Validation
        if (!name || !email || !service || !callDate || !callTime) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const parsedDate = new Date(callDate);
        if (isNaN(parsedDate.getTime())) {
            return NextResponse.json(
                { error: "Invalid date format" },
                { status: 400 }
            );
        }

        const formattedDate = format(parsedDate, "EEEE, MMMM do, yyyy");

        // ✅ Single Reference ID
        const referenceId = `STRATEGY-${Date.now().toString().slice(-6)}`;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        /* ------------------------------------------------------------------ */
        /* -------------------- INTERNAL EMAIL ------------------------------ */
        /* ------------------------------------------------------------------ */

        const internalMail = {
            from: `"Ekanostudio Strategy Desk" <info@ekanostudio.com>`,
            to: "info@ekanostudio.com",
            replyTo: email,
            subject: `New Strategy Session Request - ${name}`,
            html: `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#f4f6f9;padding:40px 0;">
        <table align="center" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;">
          
          <tr>
            <td style="background:#111827;color:#ffffff;padding:30px;text-align:center;">
              <h2 style="margin:0;font-weight:600;">New Strategy Session Request</h2>
              <p style="margin:8px 0 0 0;font-size:14px;opacity:0.8;">Awaiting Team Review</p>
            </td>
          </tr>

          <tr>
            <td style="padding:30px;">
              <h3 style="margin-top:0;color:#111827;">Client Information</h3>

              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "-"}</p>
              <p><strong>Country:</strong> ${country || "-"}</p>

              <hr style="border:none;border-top:1px solid #e5e7eb;margin:25px 0;" />

              <h3 style="color:#111827;">Session Details</h3>

              <p><strong>Category:</strong> ${category || "-"}</p>
              <p><strong>Service:</strong> <span style="color:#4f46e5;font-weight:600;">${service}</span></p>
              <p><strong>Date:</strong> ${formattedDate}</p>
              <p><strong>Time:</strong> ${callTime}</p>
              <p><strong>Contact Method:</strong> ${contactMethod}</p>

              <hr style="border:none;border-top:1px solid #e5e7eb;margin:25px 0;" />

              <h3 style="color:#111827;">Project Brief</h3>
              <div style="background:#f9fafb;padding:15px;border-radius:6px;font-size:14px;line-height:1.6;">
                ${requirements || "No additional requirements provided."}
              </div>

              <p style="margin-top:30px;font-size:12px;color:#6b7280;">
                Reference ID: ${referenceId}
              </p>
            </td>
          </tr>

        </table>
      </div>
      `,
        };

        /* ------------------------------------------------------------------ */
        /* -------------------- CLIENT EMAIL ------------------------------- */
        /* ------------------------------------------------------------------ */

        const clientMail = {
            from: `"Ekanostudio Strategy Team" <info@ekanostudio.com>`,
            to: email,
            replyTo: "info@ekanostudio.com",
            subject: `Strategy Session Request Received - ${service}`,
            html: `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#f4f6f9;padding:40px 0;">
        <table align="center" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">
          
          <tr>
            <td style="background:#111827;color:#ffffff;padding:40px;text-align:center;">
              <h1 style="margin:0;font-size:26px;font-weight:700;">Ekanostudio</h1>
              <p style="margin:10px 0 0 0;font-size:15px;opacity:0.85;">Strategic Digital Excellence</p>
            </td>
          </tr>

          <tr>
            <td style="padding:40px;">
              <h2 style="margin-top:0;color:#111827;">Dear ${name},</h2>

              <p style="color:#374151;font-size:15px;line-height:1.7;">
                Thank you for requesting a strategy session with us. We’ve received your request for 
                <strong>${service}</strong> and our team will review it shortly.
              </p>

              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:25px;margin:30px 0;">
                <h3 style="margin-top:0;color:#111827;">Session Details</h3>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Date:</strong> ${formattedDate}</p>
                <p><strong>Time:</strong> ${callTime}</p>
                <p><strong>Contact Method:</strong> ${contactMethod}</p>
              </div>

              <p style="color:#374151;font-size:15px;line-height:1.7;">
                Our strategy team will contact you within 24 business hours to confirm the schedule and share further details.
              </p>

              <div style="margin:35px 0;text-align:center;">
                <a href="https://www.ekanostudio.com/services"
                   style="background:#4f46e5;color:#ffffff;text-decoration:none;padding:14px 30px;border-radius:6px;font-weight:600;font-size:14px;display:inline-block;">
                   Explore Our Services
                </a>
              </div>

              <p style="font-size:14px;color:#374151;line-height:1.7;">
                If you need to update your request, simply reply to this email.
              </p>

              <p style="margin-top:30px;font-size:12px;color:#6b7280;">
                Session Reference: ${referenceId}
              </p>
            </td>
          </tr>

          <tr>
            <td style="background:#f9fafb;text-align:center;padding:25px;font-size:12px;color:#6b7280;">
              <strong>Ekanostudio Strategy Team</strong><br/>
              info@ekanostudio.com
            </td>
          </tr>

        </table>
      </div>
      `,
        };

        // ✅ Send Both Emails in Parallel
        await Promise.all([
            transporter.sendMail(internalMail),
            transporter.sendMail(clientMail),
        ]);

        return NextResponse.json(
            {
                success: true,
                message: "Strategy session request submitted successfully",
                referenceId,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Strategy session booking error:", error);

        return NextResponse.json(
            {
                error: "Unable to process your strategy session request",
            },
            { status: 500 }
        );
    }
}
