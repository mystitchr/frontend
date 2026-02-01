"use client";

import { NavItem, NavItemProps } from "@/components/NavItem/NavItem";
import { FC, ReactNode, useState } from "react";
import { Home, ChevronsLeft, ChevronsRight, Grid3X3, SquareCheck, SquareUser, LogOut } from "lucide-react";


export interface ClientLayoutProps {
    children: ReactNode
}

export const ClientLayout: FC<ClientLayoutProps> = (props) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const navItems: NavItemProps[] = [
        {href:"", icon: menuOpen ? <ChevronsLeft/> : <ChevronsRight/>, title: "", onClick: () => setMenuOpen(!menuOpen)},
        {href: "/", icon: <Home/>, title: menuOpen ? "home" : ""},
        {href: "/pattern", icon: <Grid3X3/>, title: menuOpen ? "pattern" : ""},
        {href: "/helper", icon: <SquareCheck/>, title: menuOpen ? "helper" : ""},
        {href: "/account", icon: <SquareUser/>, title: menuOpen ? "account" : ""}
    ]

    return (
        <div className="grid grid-rows-[auto_1fr] h-screen">
            <h1 className="
                bg-brown shadow-md shadow-black z-10
                flex items-center justify-center py-2
                text-white font-bold text-3xl font-hand
            ">My Stitchr</h1>
            <div className={`
                grid ${menuOpen ? "grid-cols-[180px_1fr]" : "grid-cols-[70px_1fr]"}
            `}>
                <aside className={`
                bg-dark-blue shadow-md shadow-black z-2
                flex flex-col
                `}>
                {navItems.map((item: NavItemProps, index) => (
                    <NavItem 
                        href={item.href}
                        icon={item.icon}
                        title={item.title}
                        color={item.color}
                        onClick={item.onClick}
                        key={index}
                    />
                ))}
                <div className="mt-auto">
                    <NavItem href="/logout" title={`${menuOpen ? "logout": ""}`} icon={<LogOut/>} color="orange"></NavItem>
                </div>

                </aside>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}