import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, preferredDate, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to clinic
    const clinicEmail = await resend.emails.send({
      from: 'DentalCare Booking <noreply@yourdomain.com>',
      to: process.env.CONTACT_EMAIL || 'info@dentalcare.com',
      subject: `New Appointment Request from ${name}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        ${preferredDate ? `<p><strong>Preferred Date:</strong> ${preferredDate}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Email confirmation to patient
    const patientEmail = await resend.emails.send({
      from: 'DentalCare <noreply@yourdomain.com>',
      to: email,
      subject: 'Appointment Request Received',
      html: `
        <h2>Thank You for Your Appointment Request</h2>
        <p>Dear ${name},</p>
        <p>We have received your appointment request for <strong>${service}</strong>.</p>
        ${preferredDate ? `<p>Your preferred date: ${preferredDate}</p>` : ''}
        <p>Our team will review your request and contact you shortly to confirm your appointment details.</p>
        <p>If you have any urgent questions, please call us at (123) 456-7890.</p>
        <br>
        <p>Best regards,<br>DentalCare Team</p>
      `,
    });

    return NextResponse.json({
      success: true,
      clinicEmailId: clinicEmail.data?.id,
      patientEmailId: patientEmail.data?.id,
    });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking request' },
      { status: 500 }
    );
  }
}
