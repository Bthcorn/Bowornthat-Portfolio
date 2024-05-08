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
    <main className="min-h-screen pl-10 pr-10 md:pl-20 md:pr-20">
      {/* <Header /> */}
      {/* <AutoTyping /> */}
      {/* <ProjectCard {...data} /> */}
      {/* <Image
        src="/blob-scene-haikei.svg"
        alt=""
        fill
        className="flex h-screen object-cover"
      /> */}
      {/* <div className="flex flex-col h-full items-center justify-between pl-24 pr-24"> */}
      <Hero />
      {/* </div> */}
      <AboutMe />
      <Education />
      <Experience />
      <SKills />
      <Projects />
      {/* <Projects /> */}
      {/* <MyNavigation /> */}
    </main>
  );
}
