import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';
import { render } from '@react-email/components';

import ContactForm from "@/emails/ContactForm";

export async function POST(request: NextRequest) {
    const { telegramUsername, twitterUsername, message } = await request.json();

    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
    const marketingEmail = process.env.MARKETING_EMAIL_ADDRESS!;
    const supportEmail = process.env.SUPPORT_EMAIL_ADDRESS!;

    if (!telegramUsername || !message) {
        return NextResponse.json({ error: "Telegram username and message are required" }, { status: 400 });
    }

    if (message.length < 10) {
        return NextResponse.json({ error: "Message must be at least 10 characters long" }, { status: 400 });
    }

    try {
        const emailHtml = await render(ContactForm({
            telegramUsername,
            twitterUsername,
            message
        }));

        const { data } = await resend.emails.send({
            from: marketingEmail,
            to: supportEmail,
            subject: "New Contact Form Submission - " + telegramUsername,
            html: emailHtml,
        });

        return NextResponse.json({ data });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}