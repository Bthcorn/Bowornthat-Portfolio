"use client";
import { ProjectCard, ProjectCardProps } from "../project-card";
import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRightSquare } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export interface Projects {
  props: ProjectCardProps[];
}

// example Projects
export const Data = [
  {
    id: "1",
    title: "Discord Bot",
    description:
      "Programming Discord Bot for using in server to help doing simple tasks, improving thinking and coding skills.",
    content: "Discord Bot",
    image:
      "https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0",
    url: "",
    tags: ["JavaScript", "Python", "Discord"],
  },
  {
    id: "2",
    title: "Cpp Lab",
    description:
      "Programming Discord Bot for using in server to help doing simple tasks, improving thinking and coding skills.",
    content: "Cpp Lab",
    image:
      "https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0",
    url: "",
    tags: ["C++", "Python", "Discord"],
  },
];

export const Projects = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 20, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
      className="mb-8 flex min-h-screen w-full flex-col rounded-3xl bg-secondary"
    >
      <div className="flex h-fit flex-col items-center justify-start gap-y-2 rounded-md p-6 sm:justify-center">
        <p className="text-muted-foreground">portfolio</p>
        <div className="w-full border-b-4 border-primary sm:w-auto">
          <h1 className="font inline-flex p-3 text-3xl font-bold md:text-4xl">
            My Recent Work
          </h1>
        </div>
      </div>
      <div className="flex w-full flex-col items-center p-8 md:p-12">
        <div className="mb-8 grid grid-cols-1 justify-items-center gap-y-10 lg:grid-cols-2">
          {Data.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <Button variant={"default"} size={"lg"}>
          <ArrowUpRightSquare className="mr-2 h-[1.2rem] w-[1.2rem]" />
          <Link href="/projects" className="font-sesmibold">
            View More
          </Link>
        </Button>
      </div>
    </motion.section>
  );
};
