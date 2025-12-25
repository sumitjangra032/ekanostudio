import * as nodemailer from "nodemailer";


export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const position = formData.get("position") as string;
  const message = formData.get("message") as string;
  const resume = formData.get("resume") as File;

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

  // 📩 EMAIL TO YOU (WITH DETAILS)
  await transporter.sendMail({
    from: `"Careers – EkanoStudio" <${process.env.SMTP_USER}>`,
    to: "info@ekanostudio.com",
    subject: `New Career Application – ${position}`,
    html: `
      <h2>New Candidate Application</h2>
      <table cellpadding="6">
        <tr><td><b>Name:</b></td><td>${name}</td></tr>
        <tr><td><b>Email:</b></td><td>${email}</td></tr>
        <tr><td><b>Phone:</b></td><td>${phone}</td></tr>
        <tr><td><b>Position:</b></td><td>${position}</td></tr>
        <tr><td><b>Message:</b></td><td>${message}</td></tr>
      </table>
    `,
    attachments: [
      {
        filename: resume.name,
        content: buffer,
      },
    ],
  });

  // 📩 THANK YOU EMAIL TO CANDIDATE
  await transporter.sendMail({
    from: `"EkanoStudio HR" <info@ekanostudio.com>`,
    to: email,
    subject: "Thank you for applying to EkanoStudio",
    html: `
      <p>Hi ${name},</p>

      <p>Thank you for applying for the <b>${position}</b> role at EkanoStudio.</p>

      <p>We have received your application and our team will review it carefully.
      If your profile matches our requirements, we’ll get in touch.</p>

      <p>Best regards,<br/>
      EkanoStudio Team</p>
    `,
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
