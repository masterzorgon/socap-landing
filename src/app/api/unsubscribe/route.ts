import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

import NewsletterUnsubscribe from "@/emails/NewsletterUnsubscribe";

export async function POST(request: NextRequest) {
   const { email } = await request.json();

   const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
   const audience = process.env.NEXT_PUBLIC_RESEND_AUDIENCE_KEY!;

   // Email validation using a simple regex pattern
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email as string)) {
      console.error("Error: Invalid email format.");
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
   }

   try {
      // Check if email exists in the audience
      const { data: contactList } = await resend.contacts.list({
         audienceId: audience,
      });
      
      const emailExists = contactList?.data.some(contact => contact.email === email);
      
      if (!emailExists) {
         return NextResponse.json({ error: "Email not found" }, { status: 404 });
      }

      // Remove user from audience
      const { data } = await resend.contacts.remove({
         email: email as string,
         audienceId: audience
      });

      // Send confirmation email to user
      await resend.emails.send({
         from: "hello@socapital.trade",
         to: [email as string],
         subject: "You have been unsubscribed from the Social Capital Newsletter",
         react: NewsletterUnsubscribe(),
      });
      
      return NextResponse.json({ data });
   } catch (error) {
      console.error(error);
      return NextResponse.json({ error: error }, { status: 500 });
   }
}