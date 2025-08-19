import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

import ContactForm from "@/emails/ContactForm";

export async function POST(request: NextRequest) {
    const { telegramUsername, twitterUsername, message } = await request.json();

    if (!telegramUsername || !message) {
        return NextResponse.json({ error: "Telegram username and message are required" }, { status: 400 });
    }

    if (message.length < 10) {
        return NextResponse.json({ error: "Message must be at least 10 characters long" }, { status: 400 });
    }

    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

    try {
        const { data } = await resend.emails.send({
            from: "hello@socapital.trade",
            to: "support@socapital.trade",
            subject: "New Contact Form Submission - " + telegramUsername,
            react: ContactForm({
                telegramUsername,
                twitterUsername,
                message
            }),
        });

        return NextResponse.json({ data });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}