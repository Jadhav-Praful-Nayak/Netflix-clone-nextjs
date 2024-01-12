"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface LinkProps {
    name: string,
    href: string
}

const links: LinkProps[] = [
    { name: "Home", href: "/home" },
    { name: "Tv Shows", href: "/home/shows" },
    { name: "Movies", href: "/home/movies" },
    { name: "Recently Added", href: "/home/recently" },
    { name: "My List", href: "/home/user/list" },
];

export default function UserNav() {
    const pathName = usePathname();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
                    <Avatar className="h-8 w-8 rounded-sm">
                        <AvatarImage src="https://xrrxtxmcwysxzaoxdjms.supabase.co/storage/v1/object/public/user%20image/avatar%20profile.png" />
                        <AvatarFallback className="rounded-sm"></AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>

                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-2">
                        <p className="text-sm font-medium leading-none">Praful</p>
                        <p className="text-xs leading-none text-muted-foreground">P@gmail.com</p>
                        <ul className="lg:hidden md:flex md:flex-col space-y-2">
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
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )

}