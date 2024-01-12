import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";

export default async function homelayout({children}:{children: ReactNode})
{
    const session =await getServerSession(authOptions)
    if(!session){
        return redirect('/login') 
    }
    return (
        <>
            <Navbar/>
            <main className="ml-10 mr-10">
                {children}
            </main>
        </>
    )

}
