import { AutoTyping } from "@/components/autotyping";
import ProjectCard from "@/components/project-card";
import Image from "next/image";

interface data {
  id: "1";
  title: "Project Title";
  description: "Project Description";
  content: "Project Content";
  image: "Project Image";
  url: "Project URL";
  tags: ["Project Tags"];
} 

export default function Home(data: data) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AutoTyping />
      <ProjectCard {...data} />
    </main>
  );
}
