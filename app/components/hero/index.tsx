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
      className="relative my-8 flex min-h-screen w-full flex-col items-center justify-start gap-4 md:my-12 md:pt-40"
      id="hero"
    >
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: 1,
          stiffness: 100,
          type: "spring",
        }}
        className="inline-flex w-full justify-center text-5xl font-bold md:justify-start md:text-7xl"
      >
        HI! <span className="animate-bounce">👋🏻</span>
      </motion.h1>
      <div className="flex w-full grid-cols-12 flex-col justify-between gap-x-2 gap-y-2 md:grid">
        <div className="col-span-7 mb-2 flex h-full min-h-40 justify-center md:justify-start">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: "easeOut",
              duration: 1,
              stiffness: 100,
              type: "spring",
            }}
            className="flex flex-col items-center gap-2 text-wrap py-8 text-center sm:items-start md:py-12 md:text-left"
          >
            <h1 className="scroll-m-20 text-3xl font-bold md:text-4xl">
              <span>
                WELCOME TO{" "}
                <span className="inline-block">
                  BOWORNTHAT&apos;S PORTFOLIO.
                </span>
              </span>
            </h1>
            <p className="text-lg font-light text-foreground">
              Second Year Student at KMITL
            </p>
            <code className="inline-block max-w-fit rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              Software Engineering
            </code>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.1 }}
          className="3xl:max-w-xl relative col-span-4 col-start-9 flex justify-center overflow-clip rounded-lg sm:mx-auto sm:max-w-sm md:justify-end 2xl:max-w-lg"
        >
          <Image
            src={"/images/IMG_4675.jpg"}
            alt=""
            width={400}
            height={400}
            priority
            className="z-10 aspect-square h-auto w-72 rounded-md object-cover"
          />
        </motion.div>
      </div>
      <div className="mt-2 flex w-full flex-col items-stretch justify-center space-y-2 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 md:justify-start">
        <Button variant={"default"} size={"lg"}>
          <ArrowUpRightFromSquareIcon className="mr-2 h-[1.2rem] w-[1.2rem]" />
          <Link
            href="mailto:bowornthat.chth@gmail.com"
            className="font-semibold"
          >
            Let&apos;s Talk
          </Link>
        </Button>
        <Button variant={"secondary"} size={"lg"}>
          <Github className="mr-2 h-[1.2rem] w-[1.2rem]" />
          <Link href="https://github.com/Bthcorn" className="font-semibold">
            GitHub
          </Link>
        </Button>
        <Button variant={"secondary"} size={"lg"}>
          <DownloadIcon className="mr-2 h-[1.2rem] w-[1.2rem]" />
          <Link
            href="https://1drv.ms/b/c/b68d853b87857539/EUSxm_eYxXFMhxBlZ0-fXToBEERkkdND_ex86MP5pH-Tvw?e=daIZmg"
            className="font-sesmibold"
          >
            Resume
          </Link>
        </Button>
        <Button variant={"secondary"} size={"lg"}>
          <LinkedinIcon className="mr-2 h-[1.2rem] w-[1.2rem]" />
          <Link
            href="https://www.linkedin.com/in/bowornthat-chiangthong/"
            className="font-semibold"
          >
            LinkedIn
          </Link>
        </Button>
      </div>
    </motion.section>
  );
};
