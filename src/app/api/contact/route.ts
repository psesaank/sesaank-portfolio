import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "sesaankpotharlanka2@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContactInput(value: unknown, field: "name" | "email" | "message") {
  const text = typeof value === "string" ? value.trim() : "";

  if (field === "name") {
    if (!text) return "Name is required.";
    if (text.length < 2) return "Name must be at least 2 characters.";
    if (text.length > 100) return "Name must be 100 characters or fewer.";
    return "";
  }

  if (field === "email") {
    if (!text) return "Email is required.";
    if (text.length > 254) return "Email must be 254 characters or fewer.";
    if (!emailPattern.test(text)) return "Please provide a valid email address.";
    return "";
  }

  if (!text) return "Message is required.";
  if (text.length < 5) return "Message must be at least 5 characters.";
  if (text.length > 5000) return "Message must be 5000 characters or fewer.";
  return "";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name : "";
    const email = typeof body?.email === "string" ? body.email : "";
    const message = typeof body?.message === "string" ? body.message : "";

    const nameError = validateContactInput(name, "name");
    const emailError = validateContactInput(email, "email");
    const messageError = validateContactInput(message, "message");

    if (nameError || emailError || messageError) {
      return NextResponse.json(
        { error: nameError || emailError || messageError },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT ?? 587) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: RECIPIENT_EMAIL,
      replyTo: email.trim(),
      subject: `Portfolio contact from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
      html: `
        <h2>New portfolio contact</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Message:</strong></p>
        <p>${message.trim().replace(/\n/g, "<br />")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email send failed:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
