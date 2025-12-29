import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";
import { format } from "date-fns";

// Helper function to escape HTML to prevent XSS
const escapeHtml = (text: string): string => {
    if (!text) return '';
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
};

// Validation function
const validateInput = (data: any) => {
    const errors: string[] = [];
    const requiredFields = ['name', 'email', 'service'];

    requiredFields.forEach(field => {
        if (!data[field]?.trim()) {
            errors.push(`${field} is required`);
        }
    });

    if (data.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email.trim())) {
            errors.push('Invalid email format');
        }
    }

    return errors;
};

// Generate unique reference ID
const generateReferenceId = (): string => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 4);
    return `INQ-${timestamp}-${random}`.toUpperCase();
};

// Email template functions
const createInternalEmailTemplate = (data: any, referenceId: string) => {
    const escapedData = {
        name: escapeHtml(data.name),
        email: escapeHtml(data.email),
        phone: escapeHtml(data.phone || 'Not provided'),
        country: escapeHtml(data.country || 'Not specified'),
        category: escapeHtml(data.category),
        service: escapeHtml(data.service),
        package: escapeHtml(data.package || 'Not selected'),
        contactMethod: escapeHtml(data.contactMethod || 'Email'),
        requirements: escapeHtml(data.requirements || 'No specific requirements provided.')
    };

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Service Inquiry - ${escapedData.name}</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1a202c; background: #f7fafc; }
            .container { max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); }
            .header { background: linear-gradient(135deg, #ff3c19 0%, #ff6b4a 100%); color: white; padding: 40px 30px; text-align: center; }
            .content { padding: 40px 30px; }
            .priority-tag { display: inline-flex; align-items: center; gap: 8px; background: #fed7d7; color: #c53030; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-bottom: 24px; }
            .section { margin-bottom: 32px; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; }
            .section-title { color: #4a5568; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
            .section-title svg { width: 18px; height: 18px; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            .info-item { margin-bottom: 16px; }
            .label { color: #718096; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
            .value { color: #2d3748; font-size: 15px; font-weight: 500; }
            .highlight { color: #ff3c19; font-weight: 600; }
            .requirements-box { background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-top: 8px; }
            .requirements-content { color: #4a5568; font-size: 14px; line-height: 1.7; white-space: pre-wrap; }
            .cta-buttons { display: flex; gap: 12px; margin-top: 32px; }
            .cta-button { flex: 1; text-align: center; padding: 14px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; transition: all 0.2s; }
            .cta-button-primary { background: #ff3c19; color: white; }
            .cta-button-primary:hover { background: #e03516; transform: translateY(-2px); }
            .cta-button-secondary { background: #e2e8f0; color: #4a5568; }
            .cta-button-secondary:hover { background: #cbd5e0; transform: translateY(-2px); }
            .footer { text-align: center; padding: 30px; background: #f7fafc; color: #718096; font-size: 12px; border-top: 1px solid #e2e8f0; }
            .reference-id { font-family: 'Courier New', monospace; background: #edf2f7; padding: 6px 12px; border-radius: 6px; font-size: 11px; color: #4a5568; }
            
            @media only screen and (max-width: 600px) {
                .container { border-radius: 0; box-shadow: none; }
                .content { padding: 24px 20px; }
                .info-grid { grid-template-columns: 1fr; }
                .cta-buttons { flex-direction: column; }
                .header { padding: 30px 20px; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1 style="margin: 0 0 8px 0; font-size: 28px; font-weight: 700;">New Service Inquiry</h1>
                <p style="margin: 0; opacity: 0.9; font-size: 16px;">Ready for immediate follow-up</p>
            </div>
            
            <div class="content">
                <div class="priority-tag">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <span>Response within 12 hours recommended</span>
                </div>
                
                <div class="section">
                    <div class="section-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        Client Information
                    </div>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="label">Full Name</div>
                            <div class="value">${escapedData.name}</div>
                        </div>
                        <div class="info-item">
                            <div class="label">Email Address</div>
                            <div class="value"><a href="mailto:${escapedData.email}" style="color: #ff3c19; text-decoration: none;">${escapedData.email}</a></div>
                        </div>
                        <div class="info-item">
                            <div class="label">Phone Number</div>
                            <div class="value">${escapedData.phone}</div>
                        </div>
                        <div class="info-item">
                            <div class="label">Location</div>
                            <div class="value">${escapedData.country}</div>
                        </div>
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                        Project Details
                    </div>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="label">Service Category</div>
                            <div class="value">${escapedData.category}</div>
                        </div>
                        <div class="info-item">
                            <div class="label">Specific Service</div>
                            <div class="value highlight">${escapedData.service}</div>
                        </div>
                        <div class="info-item">
                            <div class="label">Package Level</div>
                            <div class="value">${escapedData.package}</div>
                        </div>
                        <div class="info-item">
                            <div class="label">Preferred Contact</div>
                            <div class="value" style="text-transform: capitalize;">${escapedData.contactMethod}</div>
                        </div>
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                        </svg>
                        Project Requirements
                    </div>
                    <div class="requirements-box">
                        <div class="requirements-content">${escapedData.requirements}</div>
                    </div>
                </div>
                
                <div class="cta-buttons">
                    <a href="mailto:${escapedData.email}" class="cta-button cta-button-primary">Reply to Client</a>
                    <a href="tel:${escapedData.phone}" class="cta-button cta-button-secondary">Call Client</a>
                </div>
            </div>
            
            <div class="footer">
                <p style="margin: 0 0 8px 0;">Submitted: ${format(new Date(), "MMM do, yyyy 'at' h:mm a")}</p>
                <div class="reference-id" style="margin-bottom: 8px;">Reference: ${referenceId}</div>
                <p style="margin: 0; font-size: 11px;">This inquiry was submitted via EkanoStudio Service Portal</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

const createClientEmailTemplate = (data: any, referenceId: string) => {
    const escapedData = {
        name: escapeHtml(data.name),
        email: escapeHtml(data.email),
        service: escapeHtml(data.service),
        package: escapeHtml(data.package || 'Standard'),
        contactMethod: escapeHtml(data.contactMethod || 'Email')
    };

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Your Inquiry - EkanoStudio</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1a202c; background: #f7fafc; }
            .container { max-width: 640px; margin: 40px auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); }
            .header { background: linear-gradient(135deg, #ff3c19 0%, #ff6b4a 100%); color: white; padding: 50px 40px; text-align: center; }
            .content { padding: 50px 40px; }
            .greeting { font-size: 28px; font-weight: 700; margin: 0 0 16px 0; color: #2d3748; }
            .intro-text { color: #4a5568; font-size: 16px; line-height: 1.7; margin-bottom: 40px; }
            .confirmation-card { background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%); border: 2px solid #fc8181; border-radius: 16px; padding: 32px; margin: 32px 0; }
            .card-title { color: #c53030; font-size: 18px; font-weight: 700; margin-bottom: 24px; }
            .detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            .detail-item { margin-bottom: 20px; }
            .detail-label { color: #718096; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
            .detail-value { color: #2d3748; font-size: 16px; font-weight: 500; }
            .highlight { color: #ff3c19; font-weight: 600; }
            .timeline { margin: 40px 0; }
            .timeline-item { display: flex; align-items: flex-start; margin-bottom: 28px; }
            .timeline-number { width: 32px; height: 32px; background: #ff3c19; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; flex-shrink: 0; margin-right: 16px; }
            .timeline-content { flex: 1; }
            .timeline-content h3 { margin: 0 0 6px 0; font-size: 16px; color: #2d3748; }
            .timeline-content p { margin: 0; color: #718096; font-size: 14px; line-height: 1.5; }
            .whatsapp-section { background: #e6fffa; border: 1px solid #81e6d9; border-radius: 12px; padding: 24px; margin: 32px 0; text-align: center; }
            .whatsapp-button { display: inline-block; background: #25D366; color: white; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 14px; margin-top: 12px; }
            .whatsapp-button:hover { background: #128C7E; }
            .cta-section { text-align: center; margin: 40px 0; }
            .cta-button { display: inline-block; background: linear-gradient(135deg, #ff3c19 0%, #ff6b4a 100%); color: white; text-decoration: none; padding: 16px 40px; border-radius: 10px; font-weight: 600; font-size: 15px; transition: transform 0.2s, box-shadow 0.2s; }
            .cta-button:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(255, 60, 25, 0.3); }
            .contact-info { background: #f7fafc; border-top: 1px solid #e2e8f0; padding: 30px; text-align: center; color: #718096; font-size: 13px; }
            .reference-id { background: #edf2f7; display: inline-block; padding: 8px 16px; border-radius: 20px; font-family: 'Courier New', monospace; font-size: 12px; color: #4a5568; margin-top: 8px; }
            
            @media only screen and (max-width: 600px) {
                .container { margin: 0; border-radius: 0; box-shadow: none; }
                .content { padding: 30px 20px; }
                .detail-grid { grid-template-columns: 1fr; }
                .header { padding: 40px 20px; }
                .greeting { font-size: 24px; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1 style="margin: 0; font-size: 36px; font-weight: 800;">EkanoStudio</h1>
                <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 18px;">Digital Excellence. Delivered.</p>
            </div>
            
            <div class="content">
                <h2 class="greeting">Hello ${escapedData.name},</h2>
                <p class="intro-text">
                    Thank you for choosing <strong>EkanoStudio</strong> for your <strong>${escapedData.service}</strong> project. 
                    We're excited to help bring your vision to life with our professional digital solutions.
                </p>
                
                <div class="confirmation-card">
                    <h3 class="card-title">📋 Your Inquiry Confirmation</h3>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <div class="detail-label">Service Requested</div>
                            <div class="detail-value highlight">${escapedData.service}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Package Level</div>
                            <div class="detail-value">${escapedData.package}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Reference Number</div>
                            <div class="detail-value" style="font-family: 'Courier New', monospace;">${referenceId}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Response Method</div>
                            <div class="detail-value" style="text-transform: capitalize;">${escapedData.contactMethod}</div>
                        </div>
                    </div>
                </div>
                
                <div class="timeline">
                    <h3 style="color: #2d3748; font-size: 18px; margin-bottom: 24px;">🚀 What Happens Next</h3>
                    
                    <div class="timeline-item">
                        <div class="timeline-number">1</div>
                        <div class="timeline-content">
                            <h3>Initial Review (Within 12 Hours)</h3>
                            <p>Our team will review your requirements and assign a dedicated project manager.</p>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-number">2</div>
                        <div class="timeline-content">
                            <h3>Consultation Call</h3>
                            <p>We'll schedule a detailed discussion to understand your goals and expectations.</p>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-number">3</div>
                        <div class="timeline-content">
                            <h3>Custom Proposal</h3>
                            <p>Receive a tailored proposal with timeline, deliverables, and investment details.</p>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-number">4</div>
                        <div class="timeline-content">
                            <h3>Project Kickoff</h3>
                            <p>Once approved, we'll start bringing your project to life with regular updates.</p>
                        </div>
                    </div>
                </div>
                
                ${data.contactMethod === 'whatsapp' ? `
                <div class="whatsapp-section">
                    <h4 style="color: #2d3748; margin: 0 0 12px 0;">💬 Prefer Faster Communication?</h4>
                    <p style="color: #4a5568; margin: 0 0 16px 0; font-size: 14px;">Click below to chat with us directly on WhatsApp for instant responses:</p>
                    <a href="https://wa.me/1234567890?text=Hi%20EkanoStudio%2C%20I%20submitted%20an%20inquiry%20with%20reference%20${referenceId}" 
                       class="whatsapp-button" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        💬 Chat on WhatsApp
                    </a>
                </div>
                ` : ''}
                
                <div class="cta-section">
                    <p style="color: #4a5568; margin-bottom: 24px;">Explore our work while you wait:</p>
                    <a href="https://ekanostudio.com/portfolio" class="cta-button">View Our Portfolio</a>
                </div>
                
                <div style="color: #718096; font-size: 14px; line-height: 1.7; margin-top: 40px;">
                    <p><strong>Need to update your inquiry?</strong><br>
                    Simply reply to this email with any changes to your requirements or contact details.</p>
                    
                    <p style="margin-top: 30px;">
                        We're committed to delivering exceptional results and look forward to 
                        creating something remarkable together!
                    </p>
                </div>
            </div>
            
            <div class="contact-info">
                <p style="margin: 0 0 16px 0;">
                    <strong>EkanoStudio Project Team</strong><br>
                    Transforming Ideas into Digital Success
                </p>
                <div class="reference-id">Reference: ${referenceId}</div>
                <p style="margin: 20px 0 0 0; font-size: 11px; color: #a0aec0;">
                    This is an automated confirmation. For urgent inquiries, contact<br>
                    <a href="mailto:support@ekanostudio.com" style="color: #ff3c19;">support@ekanostudio.com</a> or call +1 (234) 567-8900
                </p>
            </div>
        </div>
    </body>
    </html>
  `;
};

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validate required fields
        const validationErrors = validateInput(body);
        if (validationErrors.length > 0) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Validation failed",
                    details: validationErrors
                },
                { status: 400 }
            );
        }

        const {
            name,
            email,
            phone,
            country,
            category,
            service,
            package: selectedPackage,
            contactMethod,
            requirements
        } = body;

        // Generate unique reference ID
        const referenceId = generateReferenceId();

        // Log the submission (in production, use proper logging)
        console.log(`[${new Date().toISOString()}] New inquiry submitted:`, {
            referenceId,
            email,
            service,
            category,
            timestamp: new Date().toISOString()
        });

        // Configure email transporter with better error handling
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_PORT === '465',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            // Add connection timeout
            connectionTimeout: 10000,
            // Add greeting timeout
            greetingTimeout: 5000,
        });

        // Verify transporter configuration
        try {
            await transporter.verify();
        } catch (error) {
            console.error("SMTP Configuration Error:", error);
            throw new Error("Email service configuration error");
        }

        // Send internal notification email
        const internalMailOptions = {
            from: `"EkanoStudio Service Desk" <${process.env.SMTP_USER || 'noreply@ekanostudio.com'}>`,
            to: process.env.NOTIFICATION_EMAIL || 'info@ekanostudio.com',
            cc: process.env.CC_EMAILS?.split(',') || [],
            replyTo: email,
            subject: `🚨 New Service Inquiry: ${service} - ${referenceId}`,
            html: createInternalEmailTemplate(body, referenceId),
            // Add text version for email clients that don't support HTML
            text: `
New Service Inquiry - ${referenceId}
======================

Client: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Location: ${country || 'Not specified'}

Service: ${service}
Category: ${category}
Package: ${selectedPackage || 'Not selected'}
Contact Method: ${contactMethod || 'Email'}

Requirements:
${requirements || 'No specific requirements provided.'}

Submitted: ${format(new Date(), "yyyy-MM-dd HH:mm:ss")}

Please respond within 12 hours.
            `
        };

        // Send client confirmation email
        const clientMailOptions = {
            from: `"EkanoStudio" <${process.env.SMTP_USER || 'info@ekanostudio.com'}>`,
            to: email,
            replyTo: process.env.REPLY_TO_EMAIL || 'info@ekanostudio.com',
            subject: `✅ Inquiry Confirmation - ${referenceId} - EkanoStudio`,
            html: createClientEmailTemplate(body, referenceId),
            text: `
Thank you for your inquiry - ${referenceId}
=======================================

Hello ${name},

Thank you for choosing EkanoStudio for your ${service} project.

We've received your inquiry and our team is reviewing your requirements.

Your Reference Number: ${referenceId}
Service Requested: ${service}
Package Level: ${selectedPackage || 'Standard'}
Preferred Contact: ${contactMethod || 'Email'}

What happens next:
1. Initial review (within 12 hours)
2. Consultation call scheduling
3. Custom proposal delivery
4. Project kickoff

While you wait, explore our portfolio at: https://ekanostudio.com/portfolio

Need to update your inquiry? Simply reply to this email.

Best regards,
The EkanoStudio Team
            `
        };

        // Send both emails with error handling
        const [internalResult, clientResult] = await Promise.allSettled([
            transporter.sendMail(internalMailOptions),
            transporter.sendMail(clientMailOptions)
        ]);

        // Check if both emails were sent successfully
        if (internalResult.status === 'rejected' || clientResult.status === 'rejected') {
            const errors = [];
            if (internalResult.status === 'rejected') errors.push('Internal notification failed');
            if (clientResult.status === 'rejected') errors.push('Client confirmation failed');

            console.error("Email sending errors:", {
                internal: internalResult.status === 'rejected' ? internalResult.reason : null,
                client: clientResult.status === 'rejected' ? clientResult.reason : null
            });

            // Still return success if at least one email went through
            if (internalResult.status === 'fulfilled' || clientResult.status === 'fulfilled') {
                return NextResponse.json({
                    success: true,
                    message: "Inquiry submitted with partial email delivery",
                    warning: errors.join(', '),
                    referenceId: referenceId
                }, { status: 200 });
            }

            throw new Error(`Email delivery failed: ${errors.join(', ')}`);
        }

        return NextResponse.json({
            success: true,
            message: "Service inquiry submitted successfully",
            referenceId: referenceId,
            nextSteps: "Our team will contact you within 12 business hours"
        }, { status: 200 });

    } catch (error: any) {
        console.error("Submission error:", {
            error: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString()
        });

        // Provide user-friendly error messages
        const errorMessage = error.message.includes('SMTP') || error.message.includes('Email')
            ? "Unable to send confirmation emails. Your inquiry has been received, but please contact us directly."
            : "Unable to process your inquiry at this time. Please try again or contact us directly.";

        return NextResponse.json({
            success: false,
            error: errorMessage,
            referenceId: `ERR-${Date.now().toString(36)}`
        }, { status: 500 });
    }
}

// Add OPTIONS method for CORS
export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}