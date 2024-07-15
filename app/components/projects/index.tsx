"use client";
import { ProjectCard, ProjectCardProps } from "../project-card";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowUpRightSquare } from "lucide-react";
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
    <section className="w-full min-h-dvh rounded-t-3xl flex flex-col mb-8">
      <div className="h-fit flex flex-col justify-start sm:justify-center items-center rounded-md p-6 gap-y-2">
        <p className="text-muted-foreground">portfolio</p>
        <div className="border-b-4 border-primary w-full sm:w-auto">
          <h1 className="font-bold font text-3xl md:text-4xl inline-flex p-3">
            My Recent Work
          </h1>
        </div>
      </div>
      <div className="w-full p-8 md:p-12 flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 justify-items-center mb-8">
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
    </section>
  );
};
