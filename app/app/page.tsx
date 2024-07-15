import { Projects } from "@/components/projects";
import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/aboutme";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { SKills } from "@/components/skills";
import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";
import { Details } from "@/components/details";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container relative px-4 sm:px-8">
          <Hero />
          <Separator />
          <AboutMe />
          <Separator />
          <Details />
          <Separator />
          <SKills />
          <Separator />
          {/* <Education /> */}
          {/* <Experience /> */}
          <Projects />
        </div>
      </main>
    </div>
  );
}
