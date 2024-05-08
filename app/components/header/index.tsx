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
import {
  BatteryFull,
  LinkIcon,
  MenuIcon,
  MenuSquare,
  SquareMenuIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Inter } from "next/font/google";
import { ModeToggle } from "../theme-mode";

const inter = Inter({ 
  subsets: ["latin"], });

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        initial={{ opacity: 0, y: -50, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 1 }}
        className="fixed top-4 left-1/2 w-96 sm:w-11/12 h-16 rounded-xl border border-black border-opacity-40 bg-background bg-opacity-85 shadow-none backdrop:blur-lg"
      >
        <div className="fixed left-1/2 -translate-x-1/2 w-96 h-full sm:w-11/12 flex items-center justfy-between px-4 md:px-1">
          <div className="border-none w-2/3 lg:w-1/2">
            <h1 className="text-2xl sm:text-4xl font-black font-satoshi">
              Bowornthat
            </h1>
          </div>
          <div className="border-none flex justify-end items-end w-1/3 lg:w-1/2">
            <NavigationMenu>
              <NavigationMenuList className="gap-0 flex">
                <NavigationMenuItem className="hidden lg:flex">
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden lg:flex">
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden lg:flex">
                  <Link href="/education" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Education
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden lg:flex">
                  <Link href="/experience" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Experience
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden lg:flex">
                  <Link href="/skill" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Skills
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden lg:flex">
                  <Link href="/project" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Projects
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden lg:flex">
                  <ModeToggle />
                </NavigationMenuItem>
                <NavigationMenuItem className="lg:hidden">
                  <NavigationMenuTrigger className="">
                    <MenuIcon className="w-6 h-6" />
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuIndicator />
              </NavigationMenuList>
              <NavigationMenuViewport />
            </NavigationMenu>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
