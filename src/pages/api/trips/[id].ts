import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";


const dburl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(dburl, supabaseKey);

export default async function handler(req:NextApiRequest,res:NextApiResponse,){
    if(req.method=='GET'){
        const {id}=req.query

        const {data, error} = await supabase.from('trips').select('*').eq('id',id);
        if(!data){
            res.status(400).send('error')
        }
        res.status(200).json(data);


    }
    
}