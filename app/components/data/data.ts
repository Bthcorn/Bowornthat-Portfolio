import { title } from "process";
import { ProjectCardProps } from "../project-card";

export const skilltech = [
  {
    title: "Programming Languages",
    skills: [
      {
        title: "Python",
        icon: "devicon-python-plain",
      },
      {
        title: "Rust",
        icon: "devicon-rust-original",
      },
      {
        title: "C++",
        icon: "devicon-cplusplus-plain",
      },
      {
        title: "JavaScript",
        icon: "devicon-javascript-plain",
      },
      {
        title: "TypeScript",
        icon: "devicon-typescript-plain",
      },
    ],
  },
  {
    title: "Frontend Web Development",
    skills: [
      {
        title: "React",
        icon: "devicon-react-original",
      },
      {
        title: "Next.js",
        icon: "devicon-nextjs-plain",
      },
      {
        title: "Tailwind CSS",
        icon: "devicon-tailwindcss-plain",
      },
      {
        title: "Booststrap",
        icon: "devicon-bootstrap-plain",
      },
    ],
  },
  {
    title: "Backend Web Development",
    skills: [
      {
        title: "Node.js",
        icon: "devicon-nodejs-plain-wordmark",
      },
      {
        title: "Express",
        icon: "devicon-express-original",
      },
      {
        title: "FastAPI",
        icon: "devicon-fastapi-plain",
      },
      {
        title: "Axios",
        icon: "devicon-axios-plain-wordmark",
      },
      {
        title: "Prisma",
        icon: "devicon-prisma-plain",
      },
      {
        title: "Postman",
        icon: "devicon-postman-plain",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        title: "MongoDB",
        icon: "devicon-mongodb-plain",
      },
      {
        title: "PostgreSQL",
        icon: "devicon-postgresql-plain",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        title: "Docker",
        icon: "devicon-docker-plain",
      },
      {
        title: "Unreal Engine",
        icon: "devicon-unrealengine-original",
      },
      {
        title: "Thunder Client",
        icon: "devicon-thunderclient-plain",
      }
    ],
  }
];


export const projects: ProjectCardProps[] = [
  {
    id: "1",
    title: "SE Academy",
    description:
      "Online Learning Platform for Software Engineering Students to learn and review courses. This project is a part of Web Programming course at KMITL.",
    content: "Web Programming, Team Project, Fullstack Development",
    image:
      "/images/se_academy_project.png",
    url: "https://github.com/Bthcorn/se_academy_app_v2",
    tags: ["React.js", "Javascript", "Tailwind CSS", "FastAPI", "PostgreSQL"],
  },
  {
    id: "2",
    title: "Portfolio Website",
    description:
      "Developing a personal portfolio website to showcase my projects and skills.",
    content: "Web Development, Personal Project, Frontend Development",
    image:
      "/images/portfolio_website.png",
    url: "",
    tags: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui"],
  },
  {
    id: "3",
    title: "Boardgame Booking Website",
    description:
      "Developing a website for booking boardgames, including user page, admin page, and backend. This used for applying for SAIG lab",
    content: "Web Development, MERN stack, Fullstack Development",
    image:
      "/images/boardgame_booking_project.png",
    url: "https://github.com/Bthcorn/saig-web-project",
    tags: ["Next.js", "Express.js", "MongoDB", "Prisma", "Tailwind CSS", "shadcn/ui"],
  },
  {
    id: "4",
    title: "Data Scraping",
    description:
      "Simple web scraping project using Rust, CLI to scrape data from a website. This project is a part of Programming course at KMITL.",
    content: "Programming, Simple Web Scraping, CLI",
    image:
      "/images/rust_project.png",
    url: "https://github.com/Bthcorn/simple-webscraping",
    tags: ["Rust", "Reqwest", "Scraper"],
  },
];