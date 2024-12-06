"use client";
import { ProjectCard, ProjectCardProps } from "../project-card";
import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRightSquare } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "../data/data";

export interface Projects {
  props: ProjectCardProps[];
}

export const Projects = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 20, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
      className="mb-8 flex min-h-screen w-full flex-col rounded-3xl bg-secondary"
      id="projects"
    >
      <div className="flex h-fit flex-col items-center justify-start gap-y-2 rounded-md p-6 sm:justify-center">
        <p className="text-muted-foreground">portfolio</p>
        <div className="w-full border-b-4 border-primary sm:w-auto">
          <h1 className="font inline-flex p-3 text-3xl font-bold md:text-4xl">
            MY RECENT WORK
          </h1>
        </div>
      </div>
      <div className="flex w-full flex-col items-center p-8 md:p-12">
        <div className="mb-8 grid grid-cols-1 justify-items-center gap-y-10 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
