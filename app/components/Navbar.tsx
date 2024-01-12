"use client";

import  Image  from 'next/image'
import Link from 'next/link'
import React from 'react'
import netfixlogo from "../../public/netflix_logo.svg"
import { usePathname } from 'next/navigation'
import { Bell, Search } from 'lucide-react'
import UserNav from './UserNav';

interface LinkProps{
    name: string,
    href:string
}

const links: LinkProps[] = [
    { name: "Home", href: "/home" },
    { name: "Tv Shows", href: "/home/shows" },
    { name: "Movies", href: "/home/movies" },
    { name: "Recently Added", href: "/home/recently" },
    { name: "My List", href: "/home/user/list" },
  ];


function Navbar() {

    const pathName = usePathname();

  return (
    <>
      <div className='flex items-center justify-between mt-3 px-8 py-8'>
        <div className='flex items-center'>
            <Link href="/home" className="w-32">
                <Image src={netfixlogo} alt='netflix_logo'/>
            </Link>
            <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white font-semibold underline underline-offset-8 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className="text-gray-300 font-normal text-sm"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div> 
      <div className="flex justify-end items-center mr-5 gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </div>
    

    </>

  )
}

export default Navbar