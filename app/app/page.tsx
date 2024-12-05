import { Projects } from "@/components/projects";
import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/aboutme";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { SKills } from "@/components/skills";
import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";
import { Details } from "@/components/details";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container flex flex-1 flex-col px-4 lg:px-8">
        {/* <div className="container relative px-4 sm:px-8"> */}
        <Hero />
        <AboutMe />
        <Details />
        <SKills />
        <Projects />
        {/* </div> */}
      </main>
      <Footer />
    </div>
  );
}
