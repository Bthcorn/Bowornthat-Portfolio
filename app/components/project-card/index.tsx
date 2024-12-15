"use client";
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
import { Button } from "../ui/button";
import { ArrowUpRightSquareIcon, LucideLinkedin } from "lucide-react";
import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { motion } from "motion/react";

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
    <Card className="w-full justify-center overflow-hidden bg-background/95 drop-shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:mx-4 sm:w-80">
      <AspectRatio ratio={16 / 9}>
        <motion.div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent to-secondary" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          className="absolute left-0 top-0 flex h-full w-full items-center justify-center"
        >
          <Image
            src={
              props.image ||
              "https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0"
            }
            alt=""
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AspectRatio>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {props.tags.map((tag) => (
            <Badge key={tag} variant={"default"}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"} size={"default"}>
              Details
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{props.title}</DialogTitle>
              <DialogDescription>{props.description}</DialogDescription>
              <DialogDescription className="text-accent-foreground">
                {props.content}
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-wrap gap-2">
              {props.tags.map((tag) => (
                <Badge key={tag} variant={"default"}>
                  {tag}
                </Badge>
              ))}
            </div>
            <AspectRatio ratio={16 / 9}>
              <Image
                src={
                  props.image ||
                  "https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0"
                }
                alt=""
                fill
                priority
                className="rounded-md border object-cover"
              />
            </AspectRatio>
            <DialogFooter>
              <Button variant={"link"} size={"default"}>
                <Link href={props.url} className="inline-flex">
                  <ArrowUpRightSquareIcon className="mr-2 h-[1.2rem] w-[1.2rem]" />
                  GitHub
                </Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};
