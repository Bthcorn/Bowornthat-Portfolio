"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { LinkIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <div className="fixed top-6 left-1/2 -translate-x-1/2 w-96 h-14 rounded-lg border border-white border-opacity-40 bg-white bg bg-opacity-100 shadow-lg backdrop:blur-lg sm:w-[36rem] flex justify-center">
        <div className="items-center flex">
          <h1 className="text-2xl font-bold flex justify-start">Bthchth</h1>
          <NavigationMenu className="">
            <NavigationMenuList className="flex flex-1 gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <LinkIcon className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
}
