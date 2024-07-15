"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  ArrowUpRightFromSquareIcon,
  DownloadIcon,
  Github,
  LinkedinIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative w-full flex flex-wrap items-center my-8 md:my-16 gap-4 justify-center">
      <h1 className="w-full justify-center md:justify-start text-5xl md:text-7xl font-bold inline-flex">
        Hi!👋🏻
      </h1>
      <div className="w-full md:grid gap-x-2 grid-cols-12 flex flex-col justify-between gap-y-2 mb-2">
        <div className="min-h-40 h-full col-span-7 flex justify-center md:justify-start mb-2">
          <div className="text-wrap text-center md:text-left py-8 md:py-12 flex flex-col items-center sm:items-start gap-2">
            <h1 className="text-3xl md:text-4xl font-bold scroll-m-20">
              <span>
                Welcome to{" "}
                <span className="underline underline-offset-auto inline-block">
                  Bowornthat's Portfolio.
                </span>
              </span>
            </h1>
            <p className="font-light text-foreground text-lg">
              I'm 2nd Year Student at KMITL.
            </p>
            <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] inline-block font-mono text-sm font-semibold max-w-fit">
              Software Engineering.
            </code>
          </div>
        </div>
        <div className="relative col-span-4 col-start-9 flex justify-center md:justify-end sm:mx-auto sm:max-w-sm 2xl:max-w-lg 3xl:max-w-xl overflow-clip rounded-lg">
          <Image
            src={
              "https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0"
            }
            alt=""
            width={400}
            height={400}
            priority
            className="aspect-square object-cover grayscale w-72 h-auto rounded-md"
          />
        </div>
      </div>
      <div className="space-y-2 sm:space-y-0 sm:space-x-2 w-full flex flex-col sm:flex-row justify-center md:justify-start items-strech sm:items-center">
        <Button variant={"default"} size={"lg"}>
          <ArrowUpRightFromSquareIcon className="mr-2 h-[1.2rem] w-[1.2rem]" />
          <p className="font-semibold">Let's Talk</p>
        </Button>
        <Button variant={"secondary"} size={"lg"}>
          <Github className="mr-2 h-[1.2rem] w-[1.2rem]" />
          <Link href="https://github.com/Bthcorn" className="font-semibold">
            GitHub
          </Link>
        </Button>
        <Button variant={"outline"} size={"lg"}>
          <DownloadIcon className="mr-2 h-[1.2rem] w-[1.2rem]" />
          <Link
            href="https://www.notion.so/Bowornthat-Chiangthong-67e20c4a36474adcbac4a08d18ab0ba4?pvs=4"
            className="font-sesmibold"
          >
            Resume
          </Link>
        </Button>
        <Button variant={"outline"} size={"lg"}>
          <LinkedinIcon className="mr-2 h-[1.2rem] w-[1.2rem]" />
          <Link
            href="https://www.linkedin.com/in/bowornthat-chiangthong/"
            className="font-semibold"
          >
            Linkedin
          </Link>
        </Button>
      </div>
    </section>
  );
};
