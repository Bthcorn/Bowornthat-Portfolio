import React from "react";
import { SkillCards } from "../skill-cards";
import { skilltech } from "../data/data";

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
}

const skills2 = skilltech;

export const SKills = () => {
  return (
    <section className="w-full min-h-dvh flex flex-col //bg-secondary">
      <div className="h-fit flex flex-col justify-center items-center rounded-md p-6 gap-y-2">
        <p className="text-secondary-foreground">tech</p>
        <div className="text-primary-foreground bg-primary rounded-md font-bold text-3xl md:text-4xl p-3 inline-flex">
          Skills
        </div>
      </div>
      <div className="w-full h-fit flex flex-col gap-y-4 p-8 sm:p-12 md:p-20">
        {
          skills2.map((skill, index) => (
            <SkillCards key={index} {...skill} />
          ))
        }
      </div>
    </section>
  );
};
