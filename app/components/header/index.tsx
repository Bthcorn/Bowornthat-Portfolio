"use client";
import React, { useEffect } from "react";
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
import { motion } from "framer-motion";
import Link from "next/link";
import { Lexend } from "next/font/google";
import { ModeToggle } from "../theme-mode";
import SlideInNav from "../sidenav";
import { useTheme } from "next-themes";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [currentColor, setCurrentColor] = React.useState("");

  useEffect(() => {
    if (theme === "dark") {
      setCurrentColor("white");
    }
    if (theme === "light") {
      setCurrentColor("black");
    }
    if (theme === "system") {
      setCurrentColor("currentColor");
    }
  }, [theme]);


  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur backdrop">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="mr-4 //hidden flex">
          <Link href={'/'} className="flex items-center space-x-2">
            <svg width="3em" height="3em" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M128.8 140.72C109.771 142.427 93.984 143.28 81.44 143.28C73.0773 143.28 66.9333 141.317 63.008 137.392C59.0827 133.467 57.12 127.323 57.12 118.96V78C57.12 69.04 59.1253 62.5547 63.136 58.544C67.232 54.448 73.76 52.4 82.72 52.4H128.8V70.32H87.84C82.72 70.32 80.16 72.88 80.16 78V118.96C80.16 120.923 80.7147 122.501 81.824 123.696C83.0187 124.805 84.512 125.36 86.304 125.36C88.096 125.36 90.0587 125.36 92.192 125.36C94.3253 125.275 96.544 125.189 98.848 125.104C101.152 125.019 103.456 124.933 105.76 124.848C108.149 124.763 111.179 124.592 114.848 124.336C118.603 124.08 123.253 123.781 128.8 123.44V140.72Z" fill={currentColor} />
              <path d="M59.68 161.4H113.44C122.4 161.4 128.885 163.448 132.896 167.544C136.992 171.555 139.04 178.04 139.04 187V198.52C139.04 205.603 137.845 211.107 135.456 215.032C133.152 218.957 129.44 221.56 124.32 222.84L140.32 251H115.36L100.64 224.12H82.72V251H59.68V161.4ZM116 187C116 181.88 113.44 179.32 108.32 179.32H82.72V206.2H108.32C113.44 206.2 116 203.64 116 198.52V187Z" fill={currentColor} />
              <path d="M238.76 251H214.44L183.72 197.24V251H160.68V161.4H185L215.72 215.16V161.4H238.76V251Z" fill={currentColor} />
              <path fillRule="evenodd" clipRule="evenodd" d="M150 53H194.5C169.923 53 150 72.9233 150 97.5V53ZM194.5 142H150V97.5C150 122.076 169.923 142 194.5 142ZM239 97.5V142H194.5C219.076 142 239 122.076 239 97.5ZM239 97.5V53H194.5C219.076 53 239 72.9233 239 97.5ZM194.5 102.395C197.203 102.395 199.395 100.203 199.395 97.5C199.395 94.7966 197.203 92.605 194.5 92.605C191.797 92.605 189.605 94.7966 189.605 97.5C189.605 100.203 191.797 102.395 194.5 102.395Z" fill={currentColor} />
            </svg>
            <span className="font-bold text-2xl hidden sm:inline-block">Bowornthat C.</span>
          </Link>
        </div>
        <div className="flex">
          <SlideInNav />
          <ModeToggle />
        </div>
      </div>
    </header>

  );
}
