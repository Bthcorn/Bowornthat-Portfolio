"use client";
import { ProjectCard, ProjectCardProps } from "../project-card";
import React from "react";
import { MotionConfig, motion } from "framer-motion";

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
    <motion.section className="w-full min-h-dvh bg-secondary">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div>Projects</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-y-10">
          {Data.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};
