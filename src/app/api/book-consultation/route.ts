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

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const formattedDate = format(new Date(callDate), "EEEE, MMMM do, yyyy");

        // 📩 INTERNAL NOTIFICATION TO TEAM
        await transporter.sendMail({
            from: `"EkanoStudio Strategy Desk" <info@ekanostudio.com>`,
            to: "info@ekanostudio.com",
            cc: ["info@ekanostudio.com", "info@ekanostudio.com"],
            replyTo: email,
            subject: `🔔 New Strategy Session: ${name} - ${service}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1a202c; margin: 0; padding: 0; }
                        .container { max-width: 640px; margin: 0 auto; background: #ffffff; }
                        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
                        .content { padding: 40px 30px; }
                        .section { margin-bottom: 32px; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; }
                        .section-title { color: #4a5568; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
                        .section-title svg { width: 18px; height: 18px; }
                        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                        .info-item { margin-bottom: 14px; }
                        .label { color: #718096; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
                        .value { color: #2d3748; font-size: 15px; font-weight: 500; }
                        .project-brief { background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-top: 24px; }
                        .project-brief-content { color: #4a5568; font-size: 14px; line-height: 1.7; white-space: pre-wrap; }
                        .empty-brief { color: #a0aec0; font-style: italic; }
                        .priority-tag { display: inline-flex; align-items: center; gap: 6px; background: #c6f6d5; color: #22543d; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
                        .cta-buttons { display: flex; gap: 12px; margin-top: 24px; }
                        .cta-button { flex: 1; text-align: center; padding: 14px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; transition: all 0.2s; }
                        .cta-button-primary { background: #4299e1; color: white; }
                        .cta-button-secondary { background: #e2e8f0; color: #4a5568; }
                        .footer { text-align: center; padding: 30px; background: #f7fafc; color: #718096; font-size: 12px; border-top: 1px solid #e2e8f0; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1 style="margin: 0 0 8px 0; font-size: 28px; font-weight: 700;">New Strategy Session Request</h1>
                            <p style="margin: 0; opacity: 0.9; font-size: 16px;">Ready for discussion</p>
                        </div>

                        <div class="content">
                            <div class="priority-tag">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <span>Response within 24 hours required</span>
                            </div>

                            <div class="section">
                                <div class="section-title">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    Client Information
                                </div>
                                <div class="info-grid">
                                    <div class="info-item">
                                        <div class="label">Full Name</div>
                                        <div class="value">${name}</div>
                                    </div>
                                    <div class="info-item">
                                        <div class="label">Email Address</div>
                                        <div class="value"><a href="mailto:${email}" style="color: #4299e1; text-decoration: none;">${email}</a></div>
                                    </div>
                                    <div class="info-item">
                                        <div class="label">Phone Number</div>
                                        <div class="value"><a href="tel:${phone}" style="color: #4299e1; text-decoration: none;">${phone}</a></div>
                                    </div>
                                    <div class="info-item">
                                        <div class="label">Location</div>
                                        <div class="value">${country}</div>
                                    </div>
                                </div>
                            </div>

                            <div class="section">
                                <div class="section-title">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                    </svg>
                                    Session Details
                                </div>
                                <div class="info-grid">
                                    <div class="info-item">
                                        <div class="label">Service Category</div>
                                        <div class="value">${category}</div>
                                    </div>
                                    <div class="info-item">
                                        <div class="label">Specific Service</div>
                                        <div class="value" style="color: #805ad5; font-weight: 600;">${service}</div>
                                    </div>
                                    <div class="info-item">
                                        <div class="label">Proposed Date</div>
                                        <div class="value">${formattedDate}</div>
                                    </div>
                                    <div class="info-item">
                                        <div class="label">Proposed Time</div>
                                        <div class="value">${callTime}</div>
                                    </div>
                                    <div class="info-item">
                                        <div class="label">Preferred Contact</div>
                                        <div class="value" style="text-transform: capitalize;">${contactMethod}</div>
                                    </div>
                                    <div class="info-item">
                                        <div class="label">Submission Time</div>
                                        <div class="value">${format(new Date(), "h:mm a 'on' MMMM do, yyyy")}</div>
                                    </div>
                                </div>
                            </div>

                            ${requirements ? `
                            <div class="project-brief">
                                <div class="section-title">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                    Project Brief & Requirements
                                </div>
                                <div class="project-brief-content">${requirements}</div>
                            </div>
                            ` : `
                            <div class="project-brief">
                                <div class="section-title">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                    </svg>
                                    Project Brief & Requirements
                                </div>
                                <div class="project-brief-content empty-brief">No additional requirements provided.</div>
                            </div>
                            `}

                            <div class="cta-buttons">
                                <a href="mailto:${email}" class="cta-button cta-button-primary">Reply to Client</a>
                                <a href="https://calendar.google.com" class="cta-button cta-button-secondary">Add to Calendar</a>
                            </div>
                        </div>

                        <div class="footer">
                            <p style="margin: 0 0 8px 0;">Reference ID: CONSULT-${Date.now().toString().slice(-6)}</p>
                            <p style="margin: 0; font-size: 11px;">This notification was generated from the EkanoStudio Strategy Portal</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        // 📩 PROFESSIONAL CONFIRMATION TO CLIENT
        await transporter.sendMail({
            from: `"EkanoStudio Strategy Team" <info@ekanostudio.com>`,
            to: email,
            replyTo: "info@ekanostudio.com",
            subject: `Your Strategy Session Request Confirmation - ${service}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1a202c; margin: 0; padding: 0; background: #f7fafc; }
                        .container { max-width: 640px; margin: 40px auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); }
                        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 50px 40px; text-align: center; }
                        .content { padding: 50px 40px; }
                        .greeting { font-size: 28px; font-weight: 700; margin: 0 0 16px 0; color: #2d3748; }
                        .intro-text { color: #4a5568; font-size: 16px; line-height: 1.7; margin-bottom: 40px; }
                        .session-card { background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; margin: 32px 0; }
                        .session-title { color: #4a5568; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 24px; }
                        .session-details { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                        .detail-item { margin-bottom: 16px; }
                        .detail-label { color: #718096; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
                        .detail-value { color: #2d3748; font-size: 16px; font-weight: 500; }
                        .highlight-value { color: #805ad5; font-weight: 600; }
                        .timeline { margin: 40px 0; }
                        .timeline-item { display: flex; align-items: flex-start; margin-bottom: 24px; }
                        .timeline-number { width: 32px; height: 32px; background: #4299e1; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; flex-shrink: 0; margin-right: 16px; }
                        .timeline-content { flex: 1; }
                        .timeline-content h3 { margin: 0 0 6px 0; font-size: 16px; color: #2d3748; }
                        .timeline-content p { margin: 0; color: #718096; font-size: 14px; line-height: 1.5; }
                        .prep-tips { background: #ebf8ff; border: 1px solid #bee3f8; border-radius: 12px; padding: 24px; margin: 40px 0; }
                        .prep-title { color: #2c5282; font-size: 15px; font-weight: 600; margin: 0 0 12px 0; }
                        .prep-list { margin: 0; padding-left: 20px; color: #4a5568; }
                        .prep-list li { margin-bottom: 8px; font-size: 14px; }
                        .cta-section { text-align: center; margin: 40px 0; }
                        .cta-button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; padding: 16px 40px; border-radius: 10px; font-weight: 600; font-size: 15px; transition: transform 0.2s, box-shadow 0.2s; }
                        .cta-button:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3); }
                        .contact-info { background: #f7fafc; border-top: 1px solid #e2e8f0; padding: 30px; text-align: center; color: #718096; font-size: 13px; }
                        .reference-id { background: #edf2f7; display: inline-block; padding: 8px 16px; border-radius: 20px; font-family: 'Courier New', monospace; font-size: 12px; color: #4a5568; margin-top: 8px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1 style="margin: 0; font-size: 36px; font-weight: 800;">EkanoStudio</h1>
                            <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 18px;">Strategic Digital Excellence</p>
                        </div>

                        <div class="content">
                            <h2 class="greeting">Dear ${name},</h2>
                            <p class="intro-text">
                                Thank you for requesting a strategy session with EkanoStudio. We're excited about the 
                                opportunity to explore <strong>${service}</strong> and discuss how we can help transform your vision 
                                into digital success.
                            </p>

                            <div class="session-card">
                                <h3 class="session-title">Your Session Request Details</h3>
                                <div class="session-details">
                                    <div class="detail-item">
                                        <div class="detail-label">Service Focus</div>
                                        <div class="detail-value highlight-value">${service}</div>
                                    </div>
                                    <div class="detail-item">
                                        <div class="detail-label">Proposed Date</div>
                                        <div class="detail-value">${formattedDate}</div>
                                    </div>
                                    <div class="detail-item">
                                        <div class="detail-label">Proposed Time</div>
                                        <div class="detail-value">${callTime}</div>
                                    </div>
                                    <div class="detail-item">
                                        <div class="detail-label">Contact Method</div>
                                        <div class="detail-value" style="text-transform: capitalize;">${contactMethod}</div>
                                    </div>
                                </div>
                            </div>

                            <div class="timeline">
                                <h3 style="color: #2d3748; font-size: 18px; margin-bottom: 24px;">What Happens Next</h3>
                                
                                <div class="timeline-item">
                                    <div class="timeline-number">1</div>
                                    <div class="timeline-content">
                                        <h3>Confirmation & Scheduling</h3>
                                        <p>Our Strategy Team will review your request and reach out within 24 business hours to confirm the schedule and share the meeting link.</p>
                                    </div>
                                </div>

                                <div class="timeline-item">
                                    <div class="timeline-number">2</div>
                                    <div class="timeline-content">
                                        <h3>Pre-Session Preparation</h3>
                                        <p>We'll send a brief questionnaire to better understand your goals and prepare for a productive discussion.</p>
                                    </div>
                                </div>

                                <div class="timeline-item">
                                    <div class="timeline-number">3</div>
                                    <div class="timeline-content">
                                        <h3>Strategy Session</h3>
                                        <p>45-minute deep dive with our experts to analyze your needs and outline a clear strategic approach.</p>
                                    </div>
                                </div>

                                <div class="timeline-item">
                                    <div class="timeline-number">4</div>
                                    <div class="timeline-content">
                                        <h3>Follow-up & Proposal</h3>
                                        <p>Within 48 hours, you'll receive a tailored strategy brief and implementation roadmap.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="prep-tips">
                                <h4 class="prep-title">To Make the Most of Our Session:</h4>
                                <ul class="prep-list">
                                    <li>Have your key objectives and challenges ready</li>
                                    <li>Think about your target audience and key metrics</li>
                                    <li>Consider your timeline and budget expectations</li>
                                    <li>Note any competitors or inspirations you'd like to share</li>
                                </ul>
                            </div>

                            <div class="cta-section">
                                <p style="color: #4a5568; margin-bottom: 24px;">While you wait, explore our recent strategic work:</p>
                                <a href="https://ekanostudio.com/case-studies" class="cta-button">View Strategic Case Studies</a>
                            </div>

                            <div style="color: #718096; font-size: 14px; line-height: 1.7; margin-top: 40px;">
                                <p><strong>Need to make changes to your request?</strong><br>
                                Simply reply to this email with any updates to your schedule or requirements.</p>
                                
                                <p style="margin-top: 30px;">
                                    We look forward to discussing your project and exploring how we can create 
                                    meaningful digital impact together.
                                </p>
                            </div>
                        </div>

                        <div class="contact-info">
                            <p style="margin: 0 0 16px 0;">
                                <strong>EkanoStudio Strategy Team</strong><br>
                                Building Digital Experiences That Drive Growth
                            </p>
                            <div class="reference-id">
                                Session Reference: STRATEGY-${Date.now().toString().slice(-6)}
                            </div>
                            <p style="margin: 16px 0 0 0; font-size: 11px; color: #a0aec0;">
                                This is an automated message. Please do not reply to this email address directly.<br>
                                For immediate assistance, contact <a href="mailto:support@ekanostudio.com" style="color: #4299e1;">support@ekanostudio.com</a>
                            </p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        return NextResponse.json({
            success: true,
            message: "Strategy session request submitted successfully",
            referenceId: `STRATEGY-${Date.now().toString().slice(-6)}`
        }, { status: 200 });

    } catch (error: any) {
        console.error("Strategy session booking error:", error);
        return NextResponse.json(
            {
                error: "Unable to process your strategy session request",
                details: "Please try again or contact us directly"
            },
            { status: 500 }
        );
    }
}