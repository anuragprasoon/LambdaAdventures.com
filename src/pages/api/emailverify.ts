import { NextApiRequest,NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import nodemailer from 'nodemailer';

const dburl= process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_KEY!
const supabase=createClient(dburl,supabaseKey)

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    }
})


export default async function handler(req:NextApiRequest,res:NextApiResponse) {
    const email=req.query['email']
    if(req.method=='GET' && email){
        const {data,error}= await supabase.from('customer').select('*').eq('email',email)

        const jsondata= JSON.parse(JSON.stringify(data))
        let name=jsondata[0].name

        if(jsondata.email_verify!='done'){
            console.log('need to verify')
            let otp= Math.floor(Math.random()*10000)
            if(otp<1000){
                otp+=1000 * (Math.floor(Math.random()*10)+1)
            }
            console.log(otp)
            const {data,error}= await supabase.from('customer').update({'verify_otp': otp}).eq('email',email).select('verify_otp')

            try{
                await transporter.sendMail({
                    from: `"Lambda Adventures" <${process.env.GMAIL_USER}>`,
                    to: email,
                    subject: `OTP for your email verification`,
                    text: `OTP for your email id : ${email} verification is ${otp}`,
                    html: `<p>Dear ${name},<br> Your one-time password (OTP) for verification is: <b>${otp}<b>.<br> This OTP is valid for the next 10 minutes. Please use it to complete your authentication process. If you did not request this verification, please ignore this email or contact our support team.<br><br> Thank you, Team Lambda Adventure </p>`,
      });

            }catch(err){
                console.error("Email error:", err);
                return res.status(500).json({ error: "Message saved but failed to send email" });

            }
            return res.status(200).send(data)
        }
        
        return res.status(200).send('verified')

    }
    if(req.method=='POST'){
        const {email, otp} = req.body
        if(!email || !otp){
         res.status(400).send('something is missing')
        }
        const { data, error }= await supabase.from('customer').select("verify_otp").eq('email',email)
        let jsdata=JSON.parse(JSON.stringify(data))
        if(jsdata[0].verify_otp==otp){
            const {data,error}= await supabase.from('customer').update({'email_verify':'done'}).eq('email',email).select('*')
            res.status(200).send('email verified')
        }

    }
    
}