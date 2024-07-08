import { Projects } from "@/components/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/aboutme";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { SKills } from "@/components/skills";
import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container relative px-4 sm:px-8">
          <Hero />
          <Separator />
          <AboutMe />
          <Separator />
          <SKills />
          <Separator />
          <Education />
          <Experience />
          <Projects />
        </div>
      </main>
    </div>
  );
}
