import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import  Razorpay  from "razorpay";


const dburl=process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_KEY!
const supabase = createClient(dburl,supabaseKey)

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEYID,
  key_secret: process.env.RAZORPAY_SECRETKEY
});

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if(req.method=='POST'){
    const order= req.body
    console.log(order)
    const data= await instance.orders.create(order)
    let jdata = JSON.parse(JSON.stringify(data))
    console.log(jdata.id)
    return res.status(200).send(jdata)    
  }

    
}
