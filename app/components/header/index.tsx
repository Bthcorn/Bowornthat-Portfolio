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
import { LinkIcon, MenuIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        initial={{ opacity: 0, y: -50, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 1 }}
        className="fixed top-6 left-1/2 w-96 h-14 rounded-lg border border-white border-opacity-40 bg-white bg bg-opacity-100 shadow-lg backdrop:blur-lg sm:w-10/12">
      </motion.div>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 w-96 h-14 rounded-lg border border-white border-opacity-40 bg-white bg bg-opacity-100 shadow-lg backdrop:blur-lg sm:w-10/12 flex flex-1 items-center justify-between">
        <h1 className="text-xl font-bold px-2">Bthchth</h1>
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
        {/* <LinkIcon className="w-6 h-6" /> */}
        <MenuIcon className="w-6 h-6" />
      </div>
    </header>
  );
}
