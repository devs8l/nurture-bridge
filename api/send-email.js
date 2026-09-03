import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body || {};

    // Honeypot bot protection check
    if (data.company_website_hp) {
      return res.status(200).json({ success: true, message: 'Submission received' });
    }

    const emailUser = process.env.EMAIL_USER;
    const rawPass = process.env.EMAIL_PASS || '';
    const emailPass = rawPass.replace(/\s+/g, '');
    const emailTo = process.env.EMAIL_TO || emailUser;

    if (!emailUser || !emailPass) {
      console.error('Missing EMAIL_USER or EMAIL_PASS environment variables.');
      return res.status(500).json({
        error: 'Email configuration missing. Please set EMAIL_USER and EMAIL_PASS environment variables.'
      });
    }

    // Determine form metadata
    const formTitle = data._form_title || data['form-title'] || 'Website Inquiry';
    const applicantName =
      data['ct-name'] || data['rd-name'] || data['jn-name'] || data['sub-name'] || data.name || 'Website Visitor';
    const applicantEmail =
      data['ct-email'] || data['rd-email'] || data['jn-email'] || data['sub-email'] || data.email || '';
    const applicantPhone =
      data['ct-phone'] || data['jn-phone'] || data.phone || '';

    // Separate main message / notes from structured table fields
    let mainMessage = '';
    const detailsList = [];

    // Fields to exclude from general details list
    const excludedKeys = new Set([
      '_form_title',
      'form-title',
      'company_website_hp',
      'rd-consent',
      'consent',
      'submit'
    ]);

    // Message fields
    const messageFieldKeys = new Set([
      'ct-msg',
      'rd-usecase',
      'jn-msg',
      'message',
      'usecase',
      'msg',
      'notes',
      'comment',
      'comments'
    ]);

    Object.entries(data).forEach(([key, val]) => {
      if (excludedKeys.has(key) || key.startsWith('_')) return;

      if (messageFieldKeys.has(key) && val) {
        mainMessage = String(val).trim();
        return;
      }

      // Format readable labels
      let label = key
        .replace(/^(ct|rd|jn|sub)-/, '')
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());

      // Special label overrides for common abbreviations
      if (label.toLowerCase() === 'org') label = 'Organization';
      if (label.toLowerCase() === 'msg') label = 'Message';

      const displayVal = Array.isArray(val) ? val.join(', ') : (val || '—');
      detailsList.push({ label, value: displayVal });
    });

    // Formatted date string in IST
    const submittedAt = new Date().toLocaleString('en-IN', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata',
    });

    // Table rows markup
    const tableRowsHtml = detailsList
      .map(
        ({ label, value }, idx) => `
        <tr style="border-bottom: 1px solid #EAEFF4; ${idx % 2 === 1 ? 'background-color: #FAFCFE;' : 'background-color: #FFFFFF;'}">
          <td style="padding: 13px 18px; width: 36%; font-size: 12px; font-weight: 700; color: #707E9E; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">
            ${label}
          </td>
          <td style="padding: 13px 18px; font-size: 14px; font-weight: 500; color: #26364B; line-height: 1.5; vertical-align: top;">
            ${value}
          </td>
        </tr>
      `
      )
      .join('');

    // Check if logo exists for inline CID attachment
    const logoPath = path.join(process.cwd(), 'public/assets/logo-white.png');
    const hasLogo = fs.existsSync(logoPath);

    // HTML Email Template authored precisely using Cohera Health design system
    const htmlEmail = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F1F9FC; font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #4E535E;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F1F9FC; padding: 36px 12px;">
    <tr>
      <td align="center">
        <!-- MAIN CONTAINER CARD -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 36px rgba(34, 40, 54, 0.08); border: 1px solid #E2EAF1;">
          
          <!-- TOP BRAND HEADER WITH COHERA LOGO -->
          <tr>
            <td style="background: linear-gradient(145deg, #1E2532 0%, #26364B 100%); padding: 26px 30px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="vertical-align: middle;">
                    <a href="https://cohera.health" target="_blank" style="text-decoration: none; display: inline-block;">
                      ${
                        hasLogo
                          ? `<img src="cid:coheralogo" alt="Cohera Health" width="138" style="display: block; width: 138px; height: auto; border: 0; outline: none;" />`
                          : `<div style="font-size: 22px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.4px; line-height: 1.2;">Cohera Health<span style="color: #63C489; font-size: 20px;">™</span></div>`
                      }
                    </a>
                    <div style="font-size: 12px; color: #BDEBFF; margin-top: 6px; font-weight: 400; letter-spacing: 0.2px;">
                      Connected child-development pathway
                    </div>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="display: inline-block; background: rgba(39, 131, 222, 0.22); border: 1px solid rgba(189, 235, 255, 0.45); color: #BDEBFF; font-size: 11px; font-weight: 700; padding: 6px 14px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.8px;">
                      ${formTitle}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ACCENT GRADIENT STRIP -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #2783DE 0%, #63C489 100%);"></td>
          </tr>

          <!-- BODY CONTENT -->
          <tr>
            <td style="padding: 28px 30px 24px 30px;">

              <!-- HERO SENDER INFO CARD -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 18px 22px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="vertical-align: middle;">
                          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #707E9E; letter-spacing: 0.8px; margin-bottom: 4px;">
                            Applicant / Contact
                          </div>
                          <div style="font-size: 19px; font-weight: 700; color: #26364B; margin-bottom: 4px;">
                            ${applicantName}
                          </div>
                          ${applicantEmail ? `
                            <div style="font-size: 14px; color: #2783DE; font-weight: 500;">
                              <a href="mailto:${applicantEmail}" style="color: #2783DE; text-decoration: none;">${applicantEmail}</a>
                            </div>
                          ` : ''}
                          ${applicantPhone ? `
                            <div style="font-size: 13px; color: #4E535E; margin-top: 4px; font-weight: 500;">
                              📞 ${applicantPhone}
                            </div>
                          ` : ''}
                        </td>
                        ${applicantEmail ? `
                          <td align="right" style="vertical-align: middle; padding-left: 12px;">
                            <a href="mailto:${applicantEmail}" style="display: inline-block; background-color: #2783DE; color: #FFFFFF; font-size: 13px; font-weight: 600; text-decoration: none; padding: 10px 18px; border-radius: 8px; white-space: nowrap; box-shadow: 0 2px 8px rgba(39, 131, 222, 0.28);">
                              Reply Directly ✉️
                            </a>
                          </td>
                        ` : ''}
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- MESSAGE / USECASE CALLOUT (if present) -->
              ${mainMessage ? `
                <div style="margin-bottom: 26px;">
                  <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #707E9E; letter-spacing: 0.8px; margin-bottom: 8px;">
                    Message / Focus Area
                  </div>
                  <div style="background-color: #F1F9FC; border-left: 4px solid #2783DE; border-radius: 0 10px 10px 0; padding: 16px 20px; font-size: 14px; line-height: 1.6; color: #26364B;">
                    ${mainMessage.replace(/\n/g, '<br/>')}
                  </div>
                </div>
              ` : ''}

              <!-- DETAILS TABLE -->
              <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #707E9E; letter-spacing: 0.8px; margin-bottom: 10px;">
                Submission Details
              </div>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse; border: 1px solid #EAEFF4; border-radius: 10px; overflow: hidden; margin-bottom: 8px;">
                <tbody>
                  ${tableRowsHtml}
                </tbody>
              </table>

            </td>
          </tr>

          <!-- FOOTER DETAILS -->
          <tr>
            <td style="background-color: #FAFBFD; border-top: 1px solid #EAEFF4; padding: 22px 30px; text-align: center;">
              <div style="font-size: 12px; color: #707E9E; margin-bottom: 6px;">
                Submitted on <strong>${submittedAt}</strong>
              </div>
              <div style="font-size: 11px; color: #A3A7AD; line-height: 1.5;">
                This notification was sent automatically from <a href="https://cohera.health" style="color: #2783DE; text-decoration: none; font-weight: 500;">Cohera Health</a> official website.<br/>
                &copy; ${new Date().getFullYear()} NurtureBridge Tech Pvt Ltd. All rights reserved.
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Configure Nodemailer transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"Cohera Health" <${emailUser}>`,
      to: emailTo,
      replyTo: applicantEmail || emailUser,
      subject: `[Cohera Health] ${formTitle}: ${applicantName}`,
      html: htmlEmail,
    };

    // Attach inline logo CID if available
    if (hasLogo) {
      mailOptions.attachments = [
        {
          filename: 'logo-white.png',
          path: logoPath,
          cid: 'coheralogo',
        },
      ];
    }

    // 1. Send Admin Notification Email
    await transporter.sendMail(mailOptions);

    // 2. Send Auto-Reply "Thank You" Email to Applicant if email is provided
    if (applicantEmail && applicantEmail.includes('@')) {
      const autoReplyHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Cohera Health</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F1F9FC; font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #4E535E;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F1F9FC; padding: 36px 12px;">
    <tr>
      <td align="center">
        <!-- MAIN CONTAINER -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 36px rgba(34, 40, 54, 0.08); border: 1px solid #E2EAF1;">
          
          <!-- TOP HEADER WITH LOGO -->
          <tr>
            <td style="background: linear-gradient(145deg, #1E2532 0%, #26364B 100%); padding: 26px 30px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="vertical-align: middle;">
                    <a href="https://cohera.health" target="_blank" style="text-decoration: none; display: inline-block;">
                      ${
                        hasLogo
                          ? `<img src="cid:coheralogo" alt="Cohera Health" width="138" style="display: block; width: 138px; height: auto; border: 0; outline: none;" />`
                          : `<div style="font-size: 22px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.4px; line-height: 1.2;">Cohera Health<span style="color: #63C489; font-size: 20px;">™</span></div>`
                      }
                    </a>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="display: inline-block; background: rgba(99, 196, 137, 0.2); border: 1px solid rgba(99, 196, 137, 0.4); color: #63C489; font-size: 11px; font-weight: 700; padding: 6px 14px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.8px;">
                      Received ✓
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ACCENT GRADIENT STRIP -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #2783DE 0%, #63C489 100%);"></td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding: 32px 32px 28px 32px;">
              
              <h2 style="font-size: 20px; font-weight: 700; color: #26364B; margin: 0 0 12px 0; letter-spacing: -0.3px;">
                Thank you for reaching out, ${applicantName}!
              </h2>

              <p style="font-size: 15px; line-height: 1.6; color: #4E535E; margin: 0 0 18px 0;">
                We have received your submission regarding <strong>${formTitle}</strong>. Our clinical and partnerships team is reviewing your details and will get in touch with you shortly.
              </p>

              <!-- HIGHLIGHT CARD -->
              <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #63C489; border-radius: 8px; padding: 18px 20px; margin: 24px 0;">
                <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #707E9E; letter-spacing: 0.5px; margin-bottom: 6px;">
                  What Happens Next?
                </div>
                <p style="font-size: 14px; line-height: 1.5; color: #26364B; margin: 0;">
                  A member of our team will review your message and get in touch with you via email or phone shortly.
                </p>
              </div>

              <!-- EXPLORE LINKS -->
              <div style="margin: 28px 0 16px 0;">
                <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #707E9E; letter-spacing: 0.5px; margin-bottom: 12px;">
                  Explore While You Wait:
                </div>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding-bottom: 8px;">
                      <a href="https://cohera.health/products/" style="color: #2783DE; font-size: 14px; text-decoration: none; font-weight: 600;">
                        → Browse Cohera Products Portfolio
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 8px;">
                      <a href="https://cohera.health/evidence/" style="color: #2783DE; font-size: 14px; text-decoration: none; font-weight: 600;">
                        → Clinical Evidence & Validation
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://cohera.health/company/" style="color: #2783DE; font-size: 14px; text-decoration: none; font-weight: 600;">
                        → About Cohera & NurtureBridge Tech
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #EAEFF4; font-size: 14px; color: #4E535E;">
                Warm regards,<br/>
                <strong style="color: #26364B;">The Cohera Health Team</strong><br/>
                <span style="font-size: 12px; color: #707E9E;">NurtureBridge Tech Pvt Ltd</span>
              </div>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color: #FAFBFD; border-top: 1px solid #EAEFF4; padding: 20px 30px; text-align: center;">
              <div style="font-size: 11px; color: #A3A7AD; line-height: 1.5;">
                This is an automated acknowledgment sent to ${applicantEmail}.<br/>
                For urgent medical inquiries, please contact your local healthcare emergency provider.<br/>
                &copy; ${new Date().getFullYear()} NurtureBridge Tech Pvt Ltd. Cohera Health™. All rights reserved.
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `;

      const autoReplyOptions = {
        from: `"Cohera Health" <${emailUser}>`,
        to: applicantEmail,
        subject: `Thank you for contacting Cohera Health — We've received your request`,
        html: autoReplyHtml,
      };

      if (hasLogo) {
        autoReplyOptions.attachments = [
          {
            filename: 'logo-white.png',
            path: logoPath,
            cid: 'coheralogo',
          },
        ];
      }

      // Send auto-reply safely in background (don't fail submission if applicant email has an issue)
      try {
        await transporter.sendMail(autoReplyOptions);
      } catch (autoReplyError) {
        console.warn('Auto-reply could not be sent:', autoReplyError.message);
      }
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error('Error in send-email API:', err);
    return res.status(500).json({ error: err.message || 'Failed to send email' });
  }
}
