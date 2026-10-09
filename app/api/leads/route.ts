import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, serviceType, monthlyBill, message, address } = body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid full name.' },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || phone.replace(/\D/g, '').length < 10) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid 10-digit mobile number.' },
        { status: 400 }
      );
    }

    // Build lead summary
    const cleanPhone = phone.trim();
    const service = serviceType || 'General Enquiry';
    const timestamp = new Date().toISOString();

    const formattedSummary = `🔋 *NEW LEAD - NS BATTERIES WEBSITE*
👤 *Customer:* ${name.trim()}
📞 *Phone:* ${cleanPhone}
✉️ *Email:* ${email || 'Not provided'}
⚡ *Service:* ${service}
📍 *Location:* ${address || 'Ramanathapuram region'}
💰 *Monthly Bill:* ${monthlyBill ? `₹${monthlyBill}` : 'N/A'}
📝 *Requirement:* ${message || 'No additional notes'}
⏱️ *Received:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
`;

    // Construct direct WhatsApp link to business owner
    const targetPhone = '918870120911';
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(formattedSummary)}`;

    // In production, you can forward to an email API (e.g. Resend / SendGrid / Postmark) or CRM webhook.
    // For Vercel Serverless without requiring external DB:
    console.log('New Lead Captured:', {
      name,
      phone: cleanPhone,
      service,
      timestamp,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your enquiry has been received. Our team will contact you shortly.',
      leadSummary: formattedSummary,
      whatsappRedirectUrl: whatsappUrl,
    });
  } catch (error) {
    console.error('Leads API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing lead.' },
      { status: 500 }
    );
  }
}
