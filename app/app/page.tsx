import { AutoTyping } from "@/components/autotyping";
import ProjectCard from "@/components/project-card";
import ProjectsPage from "@/components/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import MyNavigation from "@/components/navigation";
import HeaderNav from "@/components/header";


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeaderNav />
      {/* <AutoTyping /> */}
      {/* <ProjectCard {...data} /> */}
      <div className="flex flex-col items-center justify-between p-24">
        <ProjectsPage />
      </div>
      {/* <MyNavigation /> */}
    </main>
  );
}
