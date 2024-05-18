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
import { Inter, Lexend } from "next/font/google";
import { ModeToggle } from "../theme-mode";
import SlideInNav from "../sidenav";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend"
});

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur backdrop">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <h1 className="font-lexend font-bold text-lg">Header</h1>
        </div>
        <ModeToggle />
        <SlideInNav />
      </div>
    </header>

  );
}
