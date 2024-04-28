import { AutoTyping } from "@/components/autotyping";
import ProjectCard from "@/components/project-card";
import ProjectsPage from "@/components/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import MyNavigation from "@/components/navigation";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AutoTyping />
      {/* <ProjectCard {...data} /> */}
      <ProjectsPage />
      {/* <MyNavigation /> */}
    </main>
  );
}
