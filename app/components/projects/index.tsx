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
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
      className="mb-8 flex w-full flex-col rounded-3xl bg-secondary"
      id="projects"
    >
      <div className="flex h-fit flex-col items-start justify-start gap-y-2 rounded-md p-6">
        <div className="w-full p-3 sm:w-auto">
          <p className="text-muted-foreground">portfolio</p>
          <h1 className="font inline-flex text-3xl font-bold md:text-4xl">
            Project
          </h1>
          <div className="border-b-4 border-primary"></div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center p-8 pt-0">
        <div className="mb-8 flex w-full flex-wrap justify-center gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
