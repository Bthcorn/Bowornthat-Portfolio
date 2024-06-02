import { Projects } from "@/components/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/aboutme";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { SKills } from "@/components/skill";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <main className="flex-1 py-6 gap-6">
        <div className="container relative">
          <Hero />
          <AboutMe />
          <Education />
          <Experience />
          <SKills />
          <Projects />
        </div>
      </main>
    </div>
  );
}
