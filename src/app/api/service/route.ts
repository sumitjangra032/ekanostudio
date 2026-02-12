import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";
import { format } from "date-fns";

/* ========================= */
/* ====== UTILITIES ======== */
/* ========================= */

const escapeHtml = (text: string = ""): string =>
    text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

const validateInput = (data: any) => {
    const errors: string[] = [];
    if (!data.name?.trim()) errors.push("Name is required");
    if (!data.email?.trim()) errors.push("Email is required");
    if (!data.service?.trim()) errors.push("Service is required");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email && !emailRegex.test(data.email.trim())) {
        errors.push("Invalid email format");
    }

    return errors;
};

const generateReferenceId = (): string => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).slice(2, 6);
    return `INQ-${timestamp}-${random}`.toUpperCase();
};

/* ========================= */
/* ====== EMAIL TEMPLATES == */
/* ========================= */

const createInternalEmailTemplate = (data: any, referenceId: string) => {
    const safe = {
        name: escapeHtml(data.name),
        email: escapeHtml(data.email),
        phone: escapeHtml(data.phone || "Not provided"),
        country: escapeHtml(data.country || "Not specified"),
        category: escapeHtml(data.category || "Not specified"),
        service: escapeHtml(data.service),
        package: escapeHtml(data.package || "Not selected"),
        contactMethod: escapeHtml(data.contactMethod || "Email"),
        requirements: escapeHtml(
            data.requirements || "No specific requirements provided."
        ),
    };

    return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f4f6f9;padding:40px 0;">
    <table align="center" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">
      
      <tr>
        <td style="background:#111827;color:#ffffff;padding:30px;text-align:center;">
          <h2 style="margin:0;font-weight:600;">New Service Inquiry</h2>
          <p style="margin:8px 0 0;font-size:14px;opacity:0.85;">
            Reference: ${referenceId}
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding:30px;">
          <h3 style="margin-top:0;color:#111827;">Client Details</h3>

          <p><strong>Name:</strong> ${safe.name}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <p><strong>Phone:</strong> ${safe.phone}</p>
          <p><strong>Country:</strong> ${safe.country}</p>

          <hr style="border:none;border-top:1px solid #e5e7eb;margin:25px 0;" />

          <h3 style="color:#111827;">Project Details</h3>

          <p><strong>Service:</strong> <span style="color:#ff3c19;font-weight:600;">${safe.service}</span></p>
          <p><strong>Category:</strong> ${safe.category}</p>
          <p><strong>Package:</strong> ${safe.package}</p>
          <p><strong>Preferred Contact:</strong> ${safe.contactMethod}</p>

          <hr style="border:none;border-top:1px solid #e5e7eb;margin:25px 0;" />

          <h3 style="color:#111827;">Requirements</h3>
          <div style="background:#f9fafb;padding:15px;border-radius:6px;font-size:14px;line-height:1.6;">
            ${safe.requirements}
          </div>

          <p style="margin-top:30px;font-size:12px;color:#6b7280;">
            Submitted: ${format(new Date(), "MMM do, yyyy 'at' h:mm a")}
          </p>
        </td>
      </tr>
    </table>
  </div>
  `;
};

const createClientEmailTemplate = (data: any, referenceId: string) => {
    const safe = {
        name: escapeHtml(data.name),
        service: escapeHtml(data.service),
        package: escapeHtml(data.package || "Standard"),
        contactMethod: escapeHtml(data.contactMethod || "Email"),
    };

    return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f4f6f9;padding:40px 0;">
    <table align="center" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">
      
      <tr>
        <td style="background:#111827;color:#ffffff;padding:40px;text-align:center;">
          <h1 style="margin:0;font-size:26px;font-weight:700;">Ekanostudio</h1>
          <p style="margin:10px 0 0;font-size:15px;opacity:0.85;">
            Digital Excellence. Delivered.
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding:40px;">
          <h2 style="margin-top:0;color:#111827;">Hello ${safe.name},</h2>

          <p style="color:#374151;font-size:15px;line-height:1.7;">
            Thank you for your inquiry regarding <strong>${safe.service}</strong>.
            Our team has received your request and will respond within 12 business hours.
          </p>

          <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:25px;margin:30px 0;">
            <p><strong>Reference ID:</strong> ${referenceId}</p>
            <p><strong>Service:</strong> ${safe.service}</p>
            <p><strong>Package:</strong> ${safe.package}</p>
            <p><strong>Preferred Contact:</strong> ${safe.contactMethod}</p>
          </div>

          <p style="color:#374151;font-size:15px;">
            If you need to update any details, simply reply to this email.
          </p>

          <p style="margin-top:30px;color:#374151;">
            Best regards,<br/>
            <strong>Ekanostudio Team</strong>
          </p>
        </td>
      </tr>

      <tr>
        <td style="background:#f9fafb;text-align:center;padding:25px;font-size:12px;color:#6b7280;">
          info@ekanostudio.com
        </td>
      </tr>

    </table>
  </div>
  `;
};

/* ========================= */
/* ========= API =========== */
/* ========================= */

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const errors = validateInput(body);
        if (errors.length > 0) {
            return NextResponse.json(
                { success: false, error: "Validation failed", details: errors },
                { status: 400 }
            );
        }

        const referenceId = generateReferenceId();

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            connectionTimeout: 10000,
            greetingTimeout: 5000,
        });

        await transporter.verify();

        const internalMail = {
            from: `"Ekanostudio" <info@ekanostudio.com>`,
            to: "info@ekanostudio.com",
            replyTo: body.email,
            subject: `New Service Inquiry - ${referenceId}`,
            html: createInternalEmailTemplate(body, referenceId),
        };

        const clientMail = {
            from: `"Ekanostudio" <info@ekanostudio.com>`,
            to: body.email,
            replyTo: "info@ekanostudio.com",
            subject: `Inquiry Confirmation - ${referenceId}`,
            html: createClientEmailTemplate(body, referenceId),
        };

        await Promise.all([
            transporter.sendMail(internalMail),
            transporter.sendMail(clientMail)
        ]);

        return NextResponse.json(
            {
                success: true,
                message: "Service inquiry submitted successfully",
                referenceId,
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Submission error:", error);

        return NextResponse.json(
            {
                success: false,
                error:
                    "Unable to process your inquiry at this time. Please try again later.",
            },
            { status: 500 }
        );
    }
}
