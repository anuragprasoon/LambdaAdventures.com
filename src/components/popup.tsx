import React, {useState, useEffect} from "react";
import Link from "next/link";

const PopUp:React.FC=()=>{
    const [popview, setPopview] = useState(false);

    const close=()=>{
        setPopview(false);
    }

    useEffect(()=>{
        setTimeout(()=>{
            setPopview(true);
        },15000)
    },[])


    return(popview?<>
        <div className="max-sm:hidden  fixed z-[2] top-10  p-10 rounded w-[70%] left-0 right-0 mx-auto text-black">
        <button className="bg-white rounded-full p-2 m-2 absolute right-10" onClick={close}>X</button>
        <Link href={'/trek/79'}><img className="rounded w-full" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1751835393/sacred-pause-com/ad-story_lambda-2.png"/></Link>
        </div>

        <div className="sm:hidden fixed z-[2] top-10 p-10 rounded left-0 right-0 mx-auto  text-black">
        <button className="bg-white rounded-full p-2 m-2 absolute right-10" onClick={close}>X</button>
        <Link href={'/trek/79'}><img className="rounded w-full" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1751835393/sacred-pause-com/ad-story_lambda.png"/></Link>
        </div>
</>:<></>)
}

export default PopUp;