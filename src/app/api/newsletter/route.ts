import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

import NewsletterSubscribe from "@/emails/NewsletterSubscribe";


export async function POST(request: NextRequest) {
    const { email } = await request.json();

    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
    const audience = process.env.NEXT_PUBLIC_RESEND_AUDIENCE_KEY!;

    try {
        await resend.contacts.create({
            email,
            unsubscribed: false,
            audienceId: audience
        });

        const { data: confirmData } = await resend.emails.send({
            from: "hello@socapital.trade",
            to: email,
            subject: "Welcome to the Social Capital Newsletter!",
            react: NewsletterSubscribe(),
            headers: {
                'List-Unsubscribe': '<https://socapital.trade/unsubscribe>'
            },
        });

        const data = { confirmData };
        return NextResponse.json({ data });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
};
