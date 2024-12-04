"use client";
import React from "react";
import { SkillCards } from "../skill-cards";
import { skilltech } from "../data/data";
import { motion } from "motion/react";

const Skill = {
  title: "Frontend",
  skills: [
    {
      title: "React",
      icon: "devicon-react-original-wordmark",
    },
    {
      title: "Next.js",
      icon: "devicon-nextjs-original-wordmark",
    },
    {
      title: "Tailwind CSS",
      icon: "devicon-tailwindcss-plain",
    },
    {
      title: "SASS",
      icon: "devicon-sass-original",
    },
    {
      title: "HTML5",
      icon: "devicon-html5-plain",
    },
    {
      title: "CSS3",
      icon: "devicon-css3-plain",
    },
  ],
};

export const SKills = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 20, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
      className="mb-8 flex min-h-dvh w-full flex-col items-center rounded-3xl bg-secondary"
    >
      <div className="flex h-fit flex-col items-center justify-start gap-y-2 rounded-md p-6 sm:justify-center">
        <p className="text-muted-foreground">tech</p>
        <div className="w-full border-b-4 border-primary sm:w-auto">
          <h1 className="font inline-flex p-3 text-3xl font-bold md:text-4xl">
            Skills
          </h1>
        </div>
      </div>
      <div className="flex h-fit w-full max-w-3xl flex-col gap-y-4 p-8 sm:p-12">
        {skilltech.map((skill, index) => (
          // <motion.div whileHover={{ scale: 1.1 }} key={index}>
          <SkillCards key={index} {...skill} />
          // </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
