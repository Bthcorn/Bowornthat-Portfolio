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
import { BatteryFull, LinkIcon, MenuIcon, MenuSquare, SquareMenuIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        initial={{ opacity: 0, y: -50, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 1 }}
        className="fixed top-6 left-1/2 w-96 sm:w-11/12 h-14 rounded-xl border border-white border-opacity-40 bg-white bg bg-opacity-100 shadow-lg backdrop:blur-lg"
      >
        <div className="fixed left-1/2 -translate-x-1/2 w-96 h-full sm:w-11/12 flex items-center justfy-between px-4 md:px-1">
          <div className="border w-1/3 lg:w-1/2">
            <h1 className="text-base text-pretty lg:text-2xl font-bold">Bowornthat C.</h1>
          </div>
          <div className="border flex justify-end items-end w-2/3 lg:w-2/3">
            <NavigationMenu>
              <NavigationMenuList className="gap-0 flex">
                <NavigationMenuItem className="hidden md:flex">
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
                <NavigationMenuItem className="hidden md:flex">
                  <Link href="/skill" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()} 
                    >
                      Skills
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden md:flex">
                  <Link href="/experience" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()} 
                    >
                      Experience
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden md:flex">
                  <Link href="/project" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()} 
                    >
                      Projects
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
        </div>
      </motion.div>
    </header>
  );
}
