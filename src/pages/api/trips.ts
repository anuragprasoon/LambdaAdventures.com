import { NextApiRequest, NextApiResponse} from "next";
import { createClient } from "@supabase/supabase-js";

const dburl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(dburl, supabaseKey);

export default async function handler(req: NextApiRequest, res:NextApiResponse){
    const type=req.query['type']
    if(req.method=='GET'){
        if(!type || type==''){
            const { data, error } = await supabase.from('trips').select('*')
            res.status(200).json(data)
        }
        const { data, error } = await supabase.from('trips').select('*').eq('type',type)
        res.status(200).json(data)

    }else if(req.method=="POST"){
        const {title,type,status,imageSrc,location,difficulty,price} = req.body

        if(!title || !type || !status || !imageSrc || !location || !difficulty || !price){
            res.status(400).send(req.body);
        }
        res.status(200).send("works")
    }


}

