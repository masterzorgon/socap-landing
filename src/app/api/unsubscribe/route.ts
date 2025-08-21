import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';
import { render } from '@react-email/components';
import { validateEmail } from "@/utils";

import NewsletterUnsubscribe from "@/emails/NewsletterUnsubscribe";

export async function POST(request: NextRequest) {
   const { email } = await request.json();

   const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
   const audience = process.env.NEXT_PUBLIC_RESEND_AUDIENCE_KEY!;
   const marketingEmail = process.env.MARKETING_EMAIL_ADDRESS!;

   if (!validateEmail(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
   }

   try {
      const { data: contactList } = await resend.contacts.list({
         audienceId: audience,
      });
      
      const emailExists = contactList?.data.some(contact => contact.email === email);
      if (!emailExists) {
         return NextResponse.json({ error: "Email not found" }, { status: 404 });
      }

      const { data } = await resend.contacts.remove({
         email: email as string,
         audienceId: audience
      });

      const emailHtml = await render(NewsletterUnsubscribe());
      await resend.emails.send({
         from: marketingEmail,
         to: email,
         subject: "You have been unsubscribed from the Social Capital Newsletter",
         html: emailHtml,
      });
      
      return NextResponse.json({ data });
   } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
   }
}