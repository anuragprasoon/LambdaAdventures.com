import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import nodemailer from 'nodemailer';

const dburl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(dburl, supabaseKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, phone, email, message } = req.body;

    if (!name || !phone || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }


    const { data, error } = await supabase
      .from("contactus")
      .insert([{ name, phone, email, message }]);

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ error: "Failed to save message" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: `"${name}" <${process.env.GMAIL_USER}>`,
        to: 'anuragprasoon23@gmail.com',
        subject: `New message from ${name}`,
        text: message,
        html: `<h1>You Recieved A Message from Lambda Adventures Website</h1><p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
      });

       await transporter.sendMail({
        from: `"Shashi | Lambda Adventures" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `Thank You ${name}!`,
        text: message,
        html: `<p>Hi ${name},<br>I just wanted to take a moment to personally thank you for reaching out through our website. We truly appreciate your interest and the time you’ve taken to connect with us—it means a lot! We’ll make sure to get back to you as soon as possible. If there’s anything specific you’d like us to know or if you have additional details to share, feel free to <b>Whatsapp us at +91-8709217658</b>.</p><p>Warm regards,<br>Shashi<br>CEO, Lambda Adventures</p>`,
      });

      return res.status(200).json({ message: "Message saved and email sent!", data });  

    } catch (err) {
      console.error("Email error:", err);
      return res.status(500).json({ error: "Message saved but failed to send email" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
