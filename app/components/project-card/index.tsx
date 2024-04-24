import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';

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
    <Card>
      <div>
      <Image src={"https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0"} alt='' width={200} height={200} className='aspect-square rounded-md object-cover overflow-hidden' />
      </div>
      <CardHeader>
        <CardTitle>
          Project Title
        </CardTitle>
        <CardDescription>
          Project Description
        </CardDescription>
      </CardHeader>
      <CardContent>
        Project Content
      </CardContent>
      <CardFooter>
        <a href="Project URL">View Project</a>
      </CardFooter>
    </Card>
  )
}
