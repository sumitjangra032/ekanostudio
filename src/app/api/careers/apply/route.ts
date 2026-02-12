import * as nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const message =
      (formData.get("message") as string) ||
      "No additional message provided";
    const resume = formData.get("resume") as File;
    const countryCode =
      (formData.get("countryCode") as string) || "+91";

    // ✅ Required Validation
    if (!name || !email || !phone || !position || !resume) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // ✅ Generate Single Application Reference
    const applicationId = `APP-${Date.now().toString().slice(-6)}`;

    // ✅ Convert Resume to Buffer
    const buffer = Buffer.from(await resume.arrayBuffer());

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const formattedDate = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    /* ------------------------------------------------------------------ */
    /* ---------------- COMPANY NOTIFICATION EMAIL ---------------------- */
    /* ------------------------------------------------------------------ */

    const companyMail = {
      from: `"Ekanostudio Careers" <careers@ekanostudio.com>`,
      to: "careers@ekanostudio.com",
      replyTo: email,
      subject: `New Career Application – ${position}`,
      html: `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#f4f6f9;padding:40px 0;">
        <table align="center" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;">
          
          <tr>
            <td style="background:#111827;color:#ffffff;padding:30px;text-align:center;">
              <h2 style="margin:0;font-weight:600;">New Career Application</h2>
              <p style="margin:8px 0 0 0;font-size:14px;opacity:0.85;">
                Position: ${position}
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:30px;">
              <h3 style="margin-top:0;color:#111827;">Candidate Information</h3>

              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
              <p><strong>Position Applied:</strong> 
                <span style="color:#4f46e5;font-weight:600;">
                  ${position}
                </span>
              </p>
              <p><strong>Application Date:</strong> ${formattedDate}</p>

              <hr style="border:none;border-top:1px solid #e5e7eb;margin:25px 0;" />

              <h3 style="color:#111827;">Candidate Message</h3>
              <div style="background:#f9fafb;padding:15px;border-radius:6px;font-size:14px;line-height:1.6;">
                ${message}
              </div>

              <div style="background:#ecfdf5;border:1px solid #a7f3d0;padding:15px;border-radius:6px;margin-top:25px;">
                <strong>Resume Attached:</strong> ${resume.name} 
                (${(resume.size / 1024 / 1024).toFixed(2)} MB)
              </div>

              <p style="margin-top:30px;font-size:12px;color:#6b7280;">
                Application ID: ${applicationId}
              </p>
            </td>
          </tr>

        </table>
      </div>
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
          contentType: resume.type || "application/pdf",
        },
      ],
    };

    /* ------------------------------------------------------------------ */
    /* -------------------- CANDIDATE CONFIRMATION ---------------------- */
    /* ------------------------------------------------------------------ */

    const candidateMail = {
      from: `"Ekanostudio Careers" <careers@ekanostudio.com>`,
      to: email,
      replyTo: "careers@ekanostudio.com",
      subject: `Application Received – ${position} at Ekanostudio`,
      html: `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#f4f6f9;padding:40px 0;">
        <table align="center" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">
          
          <tr>
            <td style="background:#111827;color:#ffffff;padding:40px;text-align:center;">
              <h1 style="margin:0;font-size:26px;font-weight:700;">Ekanostudio</h1>
              <p style="margin:10px 0 0 0;font-size:15px;opacity:0.85;">
                Careers Team
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:40px;">
              <h2 style="margin-top:0;color:#111827;">Dear ${name},</h2>

              <p style="color:#374151;font-size:15px;line-height:1.7;">
                Thank you for applying for the <strong>${position}</strong> role.
                We have successfully received your application.
              </p>

              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:25px;margin:30px 0;">
                <h3 style="margin-top:0;color:#111827;">What Happens Next</h3>
                <p style="margin:8px 0;">• Application review within 2–3 business days</p>
                <p style="margin:8px 0;">• Shortlisted candidates will be contacted</p>
                <p style="margin:8px 0;">• Structured interview process</p>
                <p style="margin:8px 0;">• Final decision within 2–3 weeks</p>
              </div>

              <p style="color:#374151;font-size:15px;">
                If you need to update any information, simply reply to this email.
              </p>

              <p style="margin-top:30px;font-size:12px;color:#6b7280;">
                Application Reference: ${applicationId}
              </p>

              <p style="margin-top:30px;color:#374151;">
                Best regards,<br/>
                <strong>Ekanostudio Talent Team</strong>
              </p>
            </td>
          </tr>

          <tr>
            <td style="background:#f9fafb;text-align:center;padding:25px;font-size:12px;color:#6b7280;">
              careers@ekanostudio.com
            </td>
          </tr>

        </table>
      </div>
      `,
    };

    // ✅ Send Both Emails in Parallel
    await Promise.all([
      transporter.sendMail(companyMail),
      transporter.sendMail(candidateMail),
    ]);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Application submitted successfully",
        applicationId,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing application:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to process application. Please try again.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
