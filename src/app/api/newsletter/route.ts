import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

import NewsletterSubscribe from "@/emails/NewsletterSubscribe";

export async function POST(request: NextRequest) {
    const { email } = await request.json();

    const resend = new Resend(process.env.RESEND_API_KEY);
    const audience = process.env.RESEND_AUDIENCE_KEY!;

    try {
        // Check if email already exists in the audience
        const { data: contactList } = await resend.contacts.list({
            audienceId: audience,
        });
        
        const emailExists = contactList?.data.some(contact => contact.email === email);
        
        if (emailExists) {
            return NextResponse.json({ 
                error: "Email is already subscribed." 
            }, { status: 409 });
        }

        console.log("CREATING CONTACT");
        const contact = await resend.contacts.create({
            email,
            unsubscribed: false,
            audienceId: audience
        });
        console.log("CONTACT", contact);

        console.log("CREATING EMAIL");
        const { data: confirmData } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: email,
            subject: "Welcome to the Social Capital Newsletter!",
            react: NewsletterSubscribe(),
            headers: {
                'List-Unsubscribe': '<https://socapital.trade/unsubscribe>'
            },
        });
        console.log("CONFIRM DATA", confirmData);

        const data = { confirmData };
        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
};
