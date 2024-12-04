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
import { motion } from "motion/react";
import Link from "next/link";

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="relative my-8 flex w-full flex-col items-center gap-4 md:my-12"
    >
      <h1 className="inline-flex w-full justify-center text-5xl font-bold md:justify-start md:text-7xl">
        Hi!👋🏻
      </h1>
      <div className="flex w-full grid-cols-12 flex-col justify-between gap-x-2 gap-y-2 md:grid">
        <div className="col-span-7 mb-2 flex h-full min-h-40 justify-center md:justify-start">
          <div className="flex flex-col items-center gap-2 text-wrap py-8 text-center sm:items-start md:py-12 md:text-left">
            <h1 className="scroll-m-20 text-3xl font-bold md:text-4xl">
              <span>
                Welcome to{" "}
                <span className="inline-block">Bowornthat's Portfolio.</span>
              </span>
            </h1>
            <p className="text-lg font-light text-foreground">
              I'm 2nd Year Student at KMITL.
            </p>
            <code className="inline-block max-w-fit rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              Software Engineering.
            </code>
          </div>
        </div>
        <div className="3xl:max-w-xl relative col-span-4 col-start-9 flex justify-center overflow-clip rounded-lg sm:mx-auto sm:max-w-sm md:justify-end 2xl:max-w-lg">
          <Image
            src={"/images/IMG_4675.jpg"}
            alt=""
            width={400}
            height={400}
            priority
            className="aspect-square h-auto w-72 rounded-md object-cover"
          />
        </div>
      </div>
      <div className="mt-2 flex w-full flex-col items-stretch justify-center space-y-2 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 md:justify-start">
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
    </motion.section>
  );
};
