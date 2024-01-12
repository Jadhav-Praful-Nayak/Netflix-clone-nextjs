import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link"
import { GithubIcon } from "lucide-react";
import google from "../../../public/google.svg"
import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/utils/auth";

export default async function signup(){
const session =await getServerSession(authOptions);
  if(session){
    return redirect("/home");
  }
    return(
        <div className="mt-24 rounded bg-black/80 py-10 px-10 md:mt-0 md:max-w-sm md:px-14">
            <form method="post" action="/api/auth/signin">
                <h1 className="text-xl font-semibold text-white text-center">Sign Up</h1>
                <div className="space-y-6 mt-5">
                <Input type="email" name="email" placeholder="Email" className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"/>
                <Button variant={"destructive"} className="w-full bg-[#e50914]">Sign up</Button>
                </div>    
            </form>
            <div className="text-gray-500 text-sm mt-2">
                Already Have a Account? <Link className="text-white hover:underline hover:underline-offset-4  " href={"/login"}>Log in Now!</Link>
            </div>
            <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                <Button variant={"outline"}><GithubIcon className="w-4 h-4" /></Button>
                <Button variant={"outline"} ><Image className="w-4 h-4" alt="googlelogo" src={google}/></Button>
            </div>
        </div>
    )
}