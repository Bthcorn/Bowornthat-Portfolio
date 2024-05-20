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
    <Card className="w-80 sm:w-96 overflow-hidden drop-shadow-md justify-center bg-card">
      <div  className=" flex justify-center pt-7 sm:pt-8 px-7 sm:px-8">
        <Image
          src={
            props.image ||
            "https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0"
          }
          alt=""
          width={800}
          height={576}
          priority
          className="aspect-square object-cover w-72 sm:w-80 h-72 sm:h-80 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>
        </CardDescription>
          <div className="flex flex-wrap gap-1">
            {props.tags.map((tag) => (
              <Badge key={tag} variant={"secondary"}>
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
        <Button variant={'link'}><a href="https://ui.shadcn.com/docs/components/dialog">View</a></Button>
      </CardFooter>
    </Card>
  );
}
