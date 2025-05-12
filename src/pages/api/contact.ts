import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const dburl= process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(dburl, supabaseKey);

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    if (req.method === 'POST') {
        const{name, phone, email, message}=req.body;

        if(!name||!phone||!email||!message){
            return res.status(400).json({ error: "Missing fields" });
        }
        const { data, error } = await supabase.from('contactus').insert([{name,phone,email,message}]);
        if (error) {
            console.error("Supabase insert error:", error);
            return res.status(500).json({ error: "Failed to save message" });
          }
      
          return res.status(200).json({ message: "Message saved successfully", data });

      } else {
        console.log("Not a post request");
        return res.status(400);
      }
}