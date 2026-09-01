import { NextResponse, after } from "next/server";
import dns from "dns";
import { google } from "googleapis";
import nodemailer from "nodemailer";

try {
  dns.setDefaultResultOrder?.("ipv4first");
} catch (e) {
  // Ignore if not supported in runtime
}

/**
 * Escapes HTML characters to prevent XSS / HTML injection in email templates
 */
function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Validates email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return typeof email === "string" && emailRegex.test(email.trim());
}

/**
 * Appends a new submission row to Google Sheets
 */
async function appendToGoogleSheet(data) {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !rawPrivateKey || !spreadsheetId) {
    const missing = [];
    if (!clientEmail) missing.push("GOOGLE_CLIENT_EMAIL");
    if (!rawPrivateKey) missing.push("GOOGLE_PRIVATE_KEY");
    if (!spreadsheetId) missing.push("GOOGLE_SHEET_ID");
    throw new Error(`Google Sheets credentials missing in environment: ${missing.join(", ")}`);
  }

  // Handle escaped \n newlines in private key
  const privateKey = rawPrivateKey.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const dateStr = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "A:G",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          dateStr,
          data.firstName,
          data.lastName,
          data.email,
          data.phone,
          data.subject,
          data.message,
        ],
      ],
    },
  });
}

let cachedTransporter = null;

function getTransporter(user, pass) {
  if (
    !cachedTransporter ||
    cachedTransporter._user !== user ||
    cachedTransporter._pass !== pass
  ) {
    cachedTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });
    cachedTransporter._user = user;
    cachedTransporter._pass = pass;
  }
  return cachedTransporter;
}

/**
 * Sends notification email via Gmail SMTP
 */
async function sendEmailNotification(data) {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_APP_PASSWORD;
  const to = process.env.EMAIL_TO || "femidoofficial@gmail.com";

  if (!user || !pass) {
    const missing = [];
    if (!user) missing.push("EMAIL_USER");
    if (!pass) missing.push("EMAIL_APP_PASSWORD");
    throw new Error(`Gmail SMTP credentials missing in environment: ${missing.join(", ")}`);
  }

  const transporter = getTransporter(user, pass);

  const safeFirstName = escapeHtml(data.firstName);
  const safeLastName = escapeHtml(data.lastName);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone);
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br/>");

  const submissionDate = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #f00091; color: #ffffff; padding: 22px 24px; text-align: center;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 700;">Femido Contact Submission</h1>
        <p style="margin: 6px 0 0; font-size: 13px; opacity: 0.95;">New inquiry received from website contact form</p>
      </div>
      
      <div style="padding: 24px; background-color: #ffffff;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tbody>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 12px 8px 12px 0; font-weight: bold; width: 130px; color: #555555;">Date & Time:</td>
              <td style="padding: 12px 0; color: #111111;">${submissionDate}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 12px 8px 12px 0; font-weight: bold; color: #555555;">Name:</td>
              <td style="padding: 12px 0; color: #111111; font-weight: 600;">${safeFirstName} ${safeLastName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 12px 8px 12px 0; font-weight: bold; color: #555555;">Email:</td>
              <td style="padding: 12px 0; color: #111111;">
                <a href="mailto:${safeEmail}" style="color: #f00091; text-decoration: none; font-weight: 500;">${safeEmail}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 12px 8px 12px 0; font-weight: bold; color: #555555;">Phone:</td>
              <td style="padding: 12px 0; color: #111111;">${safePhone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 12px 8px 12px 0; font-weight: bold; color: #555555;">Subject:</td>
              <td style="padding: 12px 0; color: #111111; font-weight: 600;">${safeSubject}</td>
            </tr>
            <tr>
              <td style="padding: 14px 8px 12px 0; font-weight: bold; vertical-align: top; color: #555555;">Message:</td>
              <td style="padding: 14px 0 12px; color: #222222; line-height: 1.6;">${safeMessage}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="background-color: #f8f9fa; padding: 14px 20px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb;">
        Reply directly to this email to respond to <strong>${safeFirstName} ${safeLastName}</strong> (${safeEmail}).
      </div>
    </div>
  `;

  const textContent = `
New Femido Contact Submission
=============================
Date: ${submissionDate}
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Subject: ${data.subject}

Message:
${data.message}
  `.trim();

  await transporter.sendMail({
    from: `"Femido Website" <${user}>`,
    to,
    replyTo: data.email,
    subject: `Femido Contact Form: ${data.subject}`,
    text: textContent,
    html: htmlContent,
  });
}

export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { success: false, message: "Invalid JSON request payload." },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, phone, subject, message } = body || {};

    // Validate presence and non-emptiness of all 6 required fields
    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        { success: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    // Server-side email format validation
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Basic length sanity limits
    if (firstName.length > 100 || lastName.length > 100 || subject.length > 200 || phone.length > 30 || message.length > 5000) {
      return NextResponse.json(
        { success: false, message: "Input exceeds permissible length limits." },
        { status: 400 }
      );
    }

    const sanitizedData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    const tasks = [];
    const hasGoogleSheetsConfig =
      Boolean(process.env.GOOGLE_CLIENT_EMAIL?.trim()) &&
      Boolean(process.env.GOOGLE_PRIVATE_KEY?.trim()) &&
      Boolean(process.env.GOOGLE_SHEET_ID?.trim());

    const hasEmailConfig =
      Boolean(process.env.EMAIL_USER?.trim()) &&
      Boolean(process.env.EMAIL_APP_PASSWORD?.trim());

    if (hasGoogleSheetsConfig) {
      tasks.push(appendToGoogleSheet(sanitizedData));
    } else {
      console.warn("[Contact API] Google Sheets credentials not configured. Skipping Sheets append.");
    }

    if (hasEmailConfig) {
      tasks.push(sendEmailNotification(sanitizedData));
    } else {
      console.warn("[Contact API] Gmail SMTP credentials not configured. Skipping email send.");
    }

    if (tasks.length === 0) {
      throw new Error(
        "Neither Google Sheets nor Gmail SMTP credentials have been configured in .env.local."
      );
    }

    // Dispatch active integrations in background without blocking the user response
    if (typeof after === "function") {
      after(async () => {
        try {
          await Promise.all(tasks);
        } catch (bgError) {
          console.error("[Contact API Background Error]:", bgError);
        }
      });
    } else {
      Promise.all(tasks).catch((bgError) => {
        console.error("[Contact API Background Error]:", bgError);
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message submitted successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    // Log detailed diagnostics strictly on the server
    console.error("[Contact Form API Error]:", error);

    // Return a safe, user-friendly error response without exposing sensitive details
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
