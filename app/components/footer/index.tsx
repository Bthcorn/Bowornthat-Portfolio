import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container mt-8 min-h-60 max-w-screen-xl space-y-2 py-4 md:mt-12">
      <div className="w-full border-b-2 border-secondary text-center sm:w-auto">
        <h1 className="text-4xl font-bold leading-relaxed sm:text-5xl md:text-7xl">
          GET IN TOUCH
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start space-y-1">
          <div className="w-full border-b-2 border-primary text-center">
            <h3 className="text-start text-2xl font-bold text-foreground">
              Navigation
            </h3>
          </div>
          <Button
            variant={"link"}
            size={"sm"}
            className="text-start text-lg font-light text-foreground"
          >
            <Link href="#hero">Top</Link>
          </Button>
          <Button
            variant={"link"}
            size={"sm"}
            className="text-start text-lg font-light text-foreground"
          >
            <Link href="#aboutme">About Me</Link>
          </Button>
          <Button
            variant={"link"}
            size={"sm"}
            className="text-start text-lg font-light text-foreground"
          >
            <Link href="#details">Details</Link>
          </Button>
          <Button
            variant={"link"}
            size={"sm"}
            className="text-start text-lg font-light text-foreground"
          >
            <Link href="#skills">Skills</Link>
          </Button>
          <Button
            variant={"link"}
            size={"sm"}
            className="text-start text-lg font-light text-foreground"
          >
            <Link href="#projects">Projects</Link>
          </Button>
        </div>
        <div className="flex flex-col items-start space-y-1">
          <div className="w-full border-b-2 border-primary text-center">
            <h3 className="text-start text-2xl font-bold text-foreground">
              Social Media
            </h3>
          </div>
          <Button
            variant={"link"}
            size={"sm"}
            className="text-start text-lg font-light text-foreground"
          >
            <Link href="https://github.com/Bthcorn">GitHub</Link>
          </Button>
          <Button
            variant={"link"}
            size={"sm"}
            className="text-start text-lg font-light text-foreground"
          >
            <Link href="https://www.linkedin.com/in/bowornthat-chiangthong/">
              LinkedIn
            </Link>
          </Button>
          <Button
            variant={"link"}
            size={"sm"}
            className="text-start text-lg font-light text-foreground"
          >
            <Link href="https://www.facebook.com/bowornthat.chiangthong.2024/">
              Facebook
            </Link>
          </Button>

          <div className="w-full border-b-2 border-primary text-center">
            <h3 className="text-start text-2xl font-bold text-foreground">
              Contact
            </h3>
          </div>
          <Button
            variant={"link"}
            size={"sm"}
            className="text-start text-lg font-light text-foreground"
          >
            <Link href="mailto:bowornthat.chth@gmail.com">Gmail</Link>
          </Button>
        </div>
      </div>
      <div>
        <Image
          src="/apple-touch-icon.png"
          alt="Bowornthat Chiangthong"
          width={48}
          height={48}
        />
        <p>&copy; 2024 Bowornthat Chiangthong</p>
      </div>
    </footer>
  );
}
