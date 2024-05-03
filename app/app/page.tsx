import { AutoTyping } from "@/components/autotyping";
import { ProjectCard } from "@/components/project-card";
import { Projects } from "@/components/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import MyNavigation from "@/components/navigation";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/aboutme";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { SKills } from "@/components/skill";
// import { Nav } from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <Header /> */}
      {/* <AutoTyping /> */}
      {/* <ProjectCard {...data} /> */}
      {/* <div className="flex flex-col h-screen items-center justify-between p-24 border bg-slate-600"> */}
      <Hero />
      <AboutMe />
      <Education />
      <Experience />
      <SKills />
      <Projects />
      {/* <Projects /> */}
      {/* </div> */}
      {/* <MyNavigation /> */}
    </main>
  );
}
