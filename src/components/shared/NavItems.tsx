/* 'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { headerLinks } from '../../../constants';


const NavItems = () => {
  const pathname = usePathname();
  
  return (
    <ul className="lg:flex-between flex md:w-full flex-col items-start gap-10 lg:flex-row p">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        
        return (
          <li
            key={link.route}
            className={`${
              isActive && 'text-green-500'
            } flex-center p-medium-16 whitespace-nowrap hover:text-green-500 `}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems */

"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { headerLinks } from "../../../constants";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex lg:flex-row flex-col">
        {headerLinks.map((links) => {
          return (
            <React.Fragment key={links.label}>
              {links.subroutes ? (
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-green-400">
                    {links.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-2 p-4 md:grid-cols-2">
                      {links.subroutes?.map((link) => (
                        <ListItem
                          key={`${links.label}-${link.label}`}
                          href={link.route}
                        >
                          {link.label}
                        </ListItem>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={links.route}>
                  <Link href={links.route} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} hover:text-green-400`}
                    >
                      {links.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}
            </React.Fragment>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
