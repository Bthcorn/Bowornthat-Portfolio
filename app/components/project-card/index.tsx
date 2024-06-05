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
import { Button } from "../ui/button";
import { ArrowUpRightFromSquare, ArrowUpRightSquareIcon, Github, LinkedinIcon, LucideGithub, LucideLinkedin } from "lucide-react";
import Link from "next/link";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  url: string;
  tags: string[];
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Card className="w-80 sm:w-96 overflow-hidden drop-shadow-md justify-center">
      <Image
        src={
          props.image ||
          "https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0"
        }
        alt=""
        width={800}
        height={576}
        priority
        className="aspect-square //aspect-video object-cover"
      />
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>
          {props.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {props.tags.map((tag) => (
            <Badge key={tag} variant={'default'}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant={'ghost'}><Link href="https://ui.shadcn.com/docs/components/dialog" className="m-2">View</Link><LucideLinkedin /></Button>
      </CardFooter>
    </Card>
  );
}
