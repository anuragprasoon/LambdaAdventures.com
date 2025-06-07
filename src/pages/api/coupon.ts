import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const dburl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_KEY!
const supabase = createClient(dburl,supabaseKey)

export default async function handler(req:NextApiRequest, res:NextApiResponse ) {
    if(req.method=='GET'){
        const code=req.query['code']
        const {data, error} = await supabase.from('coupons').select("discount_percent, status").eq("coupon",code)
        return res.status(200).json(data[0])
    }
    
}
