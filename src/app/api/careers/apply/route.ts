import * as nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const message = formData.get("message") as string || "No additional message provided";
    const resume = formData.get("resume") as File;
    const countryCode = formData.get("countryCode") as string || "+91";

    if (!resume) {
      return new Response(
        JSON.stringify({ error: "Resume is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const buffer = Buffer.from(await resume.arrayBuffer());

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 📩 EMAIL TO COMPANY (WITH DETAILS)
    await transporter.sendMail({
      from: `"EkanoStudio Careers" <${process.env.SMTP_USER}>`,
      to: "careers@ekanostudio.com", // Specific careers email
      replyTo: email,
      subject: `📋 New Career Application – ${position}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            .info-table td { padding: 12px; border-bottom: 1px solid #e5e7eb; }
            .info-table td:first-child { font-weight: 600; color: #4b5563; width: 35%; }
            .message-box { background: white; border: 1px solid #e5e7eb; border-radius: 6px; padding: 20px; margin: 20px 0; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">New Career Application</h1>
              <p style="margin: 10px 0 0; opacity: 0.9;">Role: ${position}</p>
            </div>
            
            <div class="content">
              <h2 style="color: #374151; margin-top: 0;">Candidate Details</h2>
              
              <table class="info-table">
                <tr>
                  <td>Full Name:</td>
                  <td><strong>${name}</strong></td>
                </tr>
                <tr>
                  <td>Email Address:</td>
                  <td><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
                </tr>
                <tr>
                  <td>Phone Number:</td>
                  <td>${countryCode} ${phone}</td>
                </tr>
                <tr>
                  <td>Position Applied:</td>
                  <td><strong style="color: #6366f1;">${position}</strong></td>
                </tr>
                <tr>
                  <td>Application Date:</td>
                  <td>${new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}</td>
                </tr>
              </table>

              <div class="message-box">
                <h3 style="margin-top: 0; color: #374151;">Candidate Message:</h3>
                <p style="white-space: pre-wrap; margin: 0;">${message}</p>
              </div>

              <div style="background: #dcfce7; border: 1px solid #86efac; border-radius: 6px; padding: 15px; margin-top: 25px;">
                <p style="margin: 0; color: #065f46;">
                  <strong>📎 Resume Attached:</strong> ${resume.name} (${(resume.size / 1024 / 1024).toFixed(2)} MB)
                </p>
              </div>

              <div class="footer">
                <p>This application was submitted via the EkanoStudio Careers Portal.</p>
                <p style="margin: 5px 0;">Click <a href="mailto:${email}" style="color: #6366f1;">here</a> to reply directly to the candidate.</p>
                <p style="font-size: 11px; color: #9ca3af; margin-top: 15px;">
                  Application ID: APP-${Date.now().toString().slice(-6)}
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
          contentType: resume.type || "application/pdf",
        },
      ],
    });

    // 📩 PROFESSIONAL THANK YOU EMAIL TO CANDIDATE
    await transporter.sendMail({
      from: `"EkanoStudio Careers" <careers@ekanostudio.com>`,
      to: email,
      subject: `Application Received – ${position} Role at EkanoStudio`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center; }
            .content { padding: 40px; background: #ffffff; }
            .thank-you { font-size: 24px; font-weight: 600; color: #1f2937; margin-bottom: 10px; }
            .position { color: #6366f1; font-weight: 600; font-size: 18px; margin-bottom: 30px; }
            .timeline { margin: 30px 0; }
            .timeline-item { display: flex; align-items: flex-start; margin-bottom: 20px; }
            .timeline-number { background: #6366f1; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 600; margin-right: 15px; flex-shrink: 0; }
            .timeline-content h3 { margin: 0 0 5px 0; color: #1f2937; font-size: 16px; }
            .timeline-content p { margin: 0; color: #6b7280; font-size: 14px; }
            .next-steps { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 25px; margin: 30px 0; }
            .contact-info { background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 20px; margin-top: 30px; }
            .footer { background: #f9fafb; padding: 25px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
            .btn { display: inline-block; background: #6366f1; color: white; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: 600; margin: 10px 5px; }
            .social-links { margin: 20px 0; }
            .social-links a { margin: 0 10px; text-decoration: none; color: #6366f1; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 32px; font-weight: 700;">EkanoStudio</h1>
              <p style="margin: 10px 0 0; opacity: 0.9; font-size: 18px;">Building Digital Excellence</p>
            </div>
            
            <div class="content">
              <div class="thank-you">Dear ${name},</div>
              <div class="position">Thank you for your interest in the ${position} position.</div>
              
              <p style="color: #4b5563; margin-bottom: 25px;">
                We have successfully received your application and appreciate the time you've taken to apply. 
                Our recruitment team will carefully review your qualifications and experience.
              </p>
              
              <div class="next-steps">
                <h2 style="color: #1f2937; margin-top: 0; margin-bottom: 20px;">What Happens Next</h2>
                <div class="timeline">
                  <div class="timeline-item">
                    <div class="timeline-number">1</div>
                    <div class="timeline-content">
                      <h3>Application Review</h3>
                      <p>Our team will review your application within 2-3 business days.</p>
                    </div>
                  </div>
                  <div class="timeline-item">
                    <div class="timeline-number">2</div>
                    <div class="timeline-content">
                      <h3>Initial Screening</h3>
                      <p>If your profile matches our requirements, we'll contact you for an initial discussion.</p>
                    </div>
                  </div>
                  <div class="timeline-item">
                    <div class="timeline-number">3</div>
                    <div class="timeline-content">
                      <h3>Interview Process</h3>
                      <p>Selected candidates will proceed to our comprehensive interview process.</p>
                    </div>
                  </div>
                  <div class="timeline-item">
                    <div class="timeline-number">4</div>
                    <div class="timeline-content">
                      <h3>Final Decision</h3>
                      <p>We aim to complete the hiring process within 2-3 weeks of application.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="contact-info">
                <h3 style="color: #0369a1; margin-top: 0;">Need to Update Your Application?</h3>
                <p style="color: #475569; margin-bottom: 10px;">
                  If you need to update any information or have questions, please reply to this email.
                </p>
                <p style="color: #475569; margin: 0;">
                  <strong>Application Reference:</strong> APP-${Date.now().toString().slice(-6)}
                </p>
              </div>
              
              <p style="color: #4b5563; margin-top: 30px;">
                We appreciate your interest in joining our team and look forward to learning more about your 
                qualifications and how you could contribute to EkanoStudio's success.
              </p>
              
              <p style="color: #4b5563;">
                Best regards,<br/>
                <strong>The EkanoStudio Talent Team</strong>
              </p>
              
              <div class="social-links">
                <a href="https://ekanostudio.com">Website</a> • 
                <a href="https://linkedin.com/company/ekanostudio">LinkedIn</a> • 
                <a href="https://twitter.com/ekanostudio">Twitter</a>
              </div>
            </div>
            
            <div class="footer">
              <p style="margin: 0 0 10px;">
                EkanoStudio • Building Digital Experiences That Matter<br/>
                Remote-First • Global Team
              </p>
              <p style="margin: 0; font-size: 11px; color: #9ca3af;">
                This is an automated message. Please do not reply directly to this email.<br/>
                For inquiries, contact <a href="mailto:careers@ekanostudio.com" style="color: #6366f1;">careers@ekanostudio.com</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Application submitted successfully"
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );

  } catch (error) {
    console.error("Error processing application:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to process application. Please try again."
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}