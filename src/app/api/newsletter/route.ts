import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';
import { render } from '@react-email/components';

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

        // Add a small delay to ensure contact is fully created
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log("CREATING EMAIL");
        const emailHtml = await render(NewsletterSubscribe());
        const { data: confirmData, error } = await resend.emails.send({
            from: "hello@socapital.trade",
            to: email,
            subject: "Welcome to the Social Capital Newsletter!",
            html: emailHtml,
            headers: {
                'List-Unsubscribe': '<https://socapital.trade/unsubscribe>'
            },
        });
        
        if (error) {
            console.error("Email sending error:", error);
            return NextResponse.json({ 
                error: "Failed to send confirmation email",
                details: error 
            }, { status: 500 });
        }
        
        console.log("CONFIRM DATA", confirmData);

        const data = { confirmData };
        return NextResponse.json({ data });
    } catch (error) {
        console.error("Full error object:", JSON.stringify(error, null, 2));
        return NextResponse.json({ 
            error: error instanceof Error ? error.message : 'Unknown error',
            details: error 
        }, { status: 500 });
    }
};
