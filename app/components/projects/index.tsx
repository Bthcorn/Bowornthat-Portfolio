'use client'
import ProjectCard, { ProjectCardProps } from "../project-card";
import React from "react";
import { MotionConfig, motion } from "framer-motion";

export interface Projects {
	props: ProjectCardProps[];
}

// example Projects
export const Data = [
	{
		id: "1",
		title: "Discord Bot",
		description:
			"Programming Discord Bot for using in server to help doing simple tasks, improving thinking and coding skills.",
		content: "Discord Bot",
		image:
			"https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0",
		url: "",
		tags: ["JavaScript", "Python", "Discord"],
	},
	{
		id: "2",
		title: "Cpp Lab",
		description:
			"Programming Discord Bot for using in server to help doing simple tasks, improving thinking and coding skills.",
		content: "Cpp Lab",
		image:
			"https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0",
		url: "",
		tags: ["C++", "Python", "Discord"],
	},
	{
		id: "3",
		title: "React App",
		description:
			"Programming Discord Bot for using in server to help doing simple tasks, improving thinking and coding skills.",
		content: "React App",
		image:
			"https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0",
		url: "",
		tags: ["JavaScript", "Python", "Discord"],
	},
	{
		id: "4",
		title: "Python App",
		description:
			"Programming Discord Bot for using in server to help doing simple tasks, improving thinking and coding skills.",
		content: "Python App",
		image:
			"https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0",
		url: "",
		tags: ["JavaScript", "Python", "Discord"],
	},
	{
		id: "5",
		title: "Java App",
		description:
			"Programming Discord Bot for using in server to help doing simple tasks, improving thinking and coding skills.",
		content: "Java App",
		image:
			"https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0",
		url: "",
		tags: ["JavaScript", "Python", "Discord"],
	},
	{
		id: "6",
		title: "C# App",
		description:
			"Programming Discord Bot for using in server to help doing simple tasks, improving thinking and coding skills.",
		content: "C# App",
		image:
			"https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0",
		url: "",
		tags: ["JavaScript", "Python", "Discord"],
	},
];

export default function Projects() {
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center gap-y-10">
				{Data.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</motion.div>
	);
}
