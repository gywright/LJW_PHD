import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}

---
Sent from Dr. Lisa Wright's website contact form
    `.trim()

    const subject = encodeURIComponent(`New Contact Form Submission from ${name}`)
    const body = encodeURIComponent(emailContent)
    const mailtoLink = `mailto:wright.gene@gmail.com?subject=${subject}&body=${body}`

    // For now, we'll return the mailto link for client-side handling
    // In a production environment, you'd use a service like SendGrid, Resend, or Nodemailer
    return NextResponse.json({
      success: true,
      mailtoLink,
      message: "Contact form submitted successfully",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to process contact form" }, { status: 500 })
  }
}
