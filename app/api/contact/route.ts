import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json()

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 })
        }

        // Setup transporter with Brevo SMTP
        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.BREVO_USER, // e.g. 9647f1001@smtp-brevo.com
                pass: process.env.BREVO_PASS, // your Brevo API key
            },
        })

        // Email details
        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.FROM_EMAIL}>`, // your verified Brevo sender
            to: process.env.TO_EMAIL, // your real inbox (e.g. magedmaher602@gmail.com)
            replyTo: email, // this lets you reply directly to the sender
            subject: `New message from ${name}`,
            text: `
You received a new message from your portfolio:

Name: ${name}
Email: ${email}
Message: ${message}
      `,
        }

        const info = await transporter.sendMail(mailOptions)

        console.log("Email sent:", info.messageId)

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error("Email sending error:", err)
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }
}
