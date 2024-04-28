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
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

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
    <Card className="w-96 h-auto overflow-hidden drop-shadow">
      <div>
        <Image
          src={
            props.image ||
            "https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0"
          }
          alt=""
          width={1600}
          height={1134}
          className="aspect-square object-cover w-96 md:w-auto max-h-fit hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <CardHeader>
        <CardTitle>{props.title}t</CardTitle>
        <CardDescription></CardDescription>
        <div className="flex flex-wrap gap-1">
          {props.tags.map((tag) => (
            <Badge key={tag} variant={"outline"}>
              {tag}
            </Badge>
          ))}
        </div>
        <Separator />
      </CardHeader>
      <CardContent>
        <p>{props.description}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <a href={props.url}>View Project</a>
      </CardFooter>
    </Card>
  );
}
