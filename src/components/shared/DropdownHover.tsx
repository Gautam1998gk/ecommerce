"use client"

import * as React from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function DropdownHoverLanguage() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="p-small-10">English</NavigationMenuTrigger>
          <NavigationMenuContent className="grid gap-3 p-2 md:w-[200px] md:grid-cols-1">
            <NavigationMenuLink className="block select-none p-small-10 rounded-md p-1 no-underline outline-none transition-colors hover:bg-accent">
              English
            </NavigationMenuLink>
            <NavigationMenuLink className="block select-none p-small-10 rounded-md p-1 no-underline outline-none transition-colors hover:bg-accent">
              German
            </NavigationMenuLink>
            <NavigationMenuLink className="block select-none p-small-10 rounded-md p-1 no-underline outline-none transition-colors hover:bg-accent">
              French
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export  function DropdownHoverCurrency() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="p-small-10">USD</NavigationMenuTrigger>
          <NavigationMenuContent className="grid gap-3 p-2 md:w-[200px] md:grid-cols-1">
            <NavigationMenuLink className="block select-none p-small-10 rounded-md p-1 no-underline outline-none transition-colors hover:bg-accent">
              EURO
            </NavigationMenuLink>
            <NavigationMenuLink className="block select-none p-small-10 rounded-md p-1 no-underline outline-none transition-colors hover:bg-accent">
              JPN
            </NavigationMenuLink>
            <NavigationMenuLink className="block select-none p-small-10 rounded-md p-1 no-underline outline-none transition-colors hover:bg-accent">
              RUPE
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}