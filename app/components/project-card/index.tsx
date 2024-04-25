import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { GithubIcon } from "lucide-react";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  url: string;
  tags: string[];
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Card className="lg:max-w-md w-[384px] h-[150px]">
      <div>
        <Image
          src={
            "https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0"
          }
          alt=""
          width={384}
          height={272}
          className="aspect-square rounded-md object-cover overflow-hidden w-full md:w-auto max-h-fit"
        />
      </div>
      <CardHeader>
        <CardTitle>Discord Bot</CardTitle>
        <CardDescription>Python</CardDescription>
      </CardHeader>
      <CardContent>Programming Discord Bot for using in server to help doing simple tasks, improving thinking and coding skills.</CardContent>
      <CardFooter className="flex justify-end">
        <a href="Project URL">View Project</a>
      </CardFooter>
    </Card>
  );
}
