"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import { ContactFormEmail } from "@/email/contact-form-email";

  const resend = new Resend(process.env.RESEND_API_KEY!);

  export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    console.log('sendEmail called with:', { senderEmail, message });

    if( !validateString(senderEmail, 500) ){
      console.error('Email validation failed');
      return {
        error: 'Invalid sender email'
      }
    }
    if(!validateString(message, 5000) ){
      console.error('Message validation failed');
      return {
        error: 'Invalid message'
      }
    }
    try{
      const { data, error } = await resend.emails.send({
          from: "Contact Form <onboarding@resend.dev>",
          to: "martinfort13@gmail.com",
          subject: 'New contact form submission from your portfolio',
          replyTo: senderEmail as string,
          react: ContactFormEmail({ message: message as string, senderEmail: senderEmail as string })
      });
      console.log('Email sent successfully:', data);
      return {
        data,
        error: null
      };
    } catch (error: unknown) {
      const errorMessage = getErrorMessage(error);
      console.error('Email sending error:', errorMessage);
      return {
        error: errorMessage,
        data: null
      }
    }
}

