"use client";
import { ProjectCard, ProjectCardProps } from "../project-card";
import React from "react";
import { MotionConfig, motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowUpRightSquare, DownloadIcon } from "lucide-react";
import Link from "next/link";

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
    <section className="w-full min-h-dvh rounded-t-3xl flex flex-col justify-start //bg-secondary">
      <div className="h-fit flex flex-col justify-center items-center rounded-md p-6 gap-y-2">
        <p className="text-secondary-foreground">portfolio</p>
        <div className="text-primary-foreground bg-primary rounded-md font-bold text-3xl md:text-4xl p-3 inline-flex">
          My Recent Work
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-y-10 p-8 sm:p-12 md:p-20">
        {Data.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <Button variant={"outline"} size={"lg"}>
          <ArrowUpRightSquare className="mr-2 h-[1.2rem] w-[1.2rem]" />
          <Link
            href="/projects"
            className="font-sesmibold"
          >
            View More
          </Link>
        </Button>
    </section>
  );
};
