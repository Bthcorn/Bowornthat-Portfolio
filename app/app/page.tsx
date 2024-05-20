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
import SlideInNav from "@/components/sidenav";
// import { Nav } from "@/components/hero";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <main className="flex-1 py-6 gap-6">
        <Hero />
        <AboutMe />
        <Education />
        <Experience />
        <SKills />
        <Projects />
      </main>
    </div>
  );
}
