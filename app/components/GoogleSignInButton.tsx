"use client";

import { Button } from "@/components/ui/button";
import google from "../../public/google.svg"
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function GoogleSignInButton(){
    return <Button onClick={()=>signIn('google')} variant={"outline"} ><Image className="w-4 h-4" alt="googlelogo" src={google}/></Button>
}