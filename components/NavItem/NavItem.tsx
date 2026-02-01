"use client";

import Link from "next/link";
import { FC, MouseEventHandler } from "react";

export interface NavItemProps {
    title: string,
    icon: any,
    color?: string,
    href: string,
    onClick?: MouseEventHandler<HTMLAnchorElement>
}

export const NavItem: FC<NavItemProps> = (props) => {
    return (
        <Link className ={`
            grid grid-cols-[48px_1fr] p-5 cursor-pointer
            ${props.color? `text-${props.color}` : "text-white"}
            text-left font-semibold 
            hover:text-light-blue
        `} href={props.href} onClick={props.onClick}>
            <div>
                {props.icon}
            </div>
            {props.title}
        </Link>
    )
}