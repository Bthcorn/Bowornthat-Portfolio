"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
  NavigationMenuItem,
  NavigationMenuIndicator,
} from "../ui/navigation-menu";
// import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { LinkIcon, MenuIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative">
      <motion.div
        initial={{ opacity: 0, y: -50, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 1 }}
        className="fixed z-10 top-6 left-1/2 w-96 sm:w-11/12 h-14 rounded-lg border border-white border-opacity-40 bg-white bg bg-opacity-100 shadow-lg backdrop:blur-lg"
      >
        <div className="fixed z-20 left-1/2 -translate-x-1/2 w-96 h-full sm:w-11/12 flex items-center justfy-between p-4">
          <div className="border w-1/2">
            <h1 className="text-2xl font-bold">Bowornthat C.</h1>
          </div>
          <div className="border flex justify-end items-end w-1/2">
            <NavigationMenu>
              <NavigationMenuList className="gap-4">
                <NavigationMenuItem className="hidden md:flex ">
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden md:flex">
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden md:flex">
                  <Link href="/education" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()} 
                    >
                      Education
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="md:hidden">
                  <NavigationMenuTrigger>
                    <MenuIcon className="w-6 h-6" />
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div>
          </div>
          {/* <div className="border w-1/2 flex justify-end">
            <MenuIcon className="w-6 h-6" />
          </div> */}
        </div>
      </motion.div>
    </header>
  );
}
