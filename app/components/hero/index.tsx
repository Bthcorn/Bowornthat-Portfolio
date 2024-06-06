import React from "react";
import { AutoTyping } from "../autotyping";
import Image from "next/image";
import { ModeToggle } from "../theme-mode";
import { Button } from "../ui/button";
import { ArrowUpRightIcon, DownloadIcon, Github, GithubIcon, LinkedinIcon, LucideGithub } from "lucide-react";


export const Hero = () => {
  return (
    <section className="relative w-full mx-auto flex flex-wrap items-center my-8 gap-4 justify-center">
      <span className="w-full justify-center md:justify-start mb-4 text-7xl font-bold inline-flex">Hi!👋🏻</span>
      <div className="w-full md:grid gap-x-2 grid-cols-12 flex flex-col justify-between gap-y-2 mb-2">
        <div className="border min-h-40 col-span-7 items-center flex justify-center md:justify-start mb-2">
          <AutoTyping />
        </div>
        <div className="relative col-span-4 col-start-9 flex justify-center md:justify-end sm:mx-auto sm:max-w-sm 2xl:max-w-lg 3xl:max-w-xl overflow-clip rounded-lg">
          <Image
            src={
              "https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0"
            }
            alt=""
            width={400}
            height={400}
            priority
            className="aspect-square object-cover grayscale w-80 md:w-full min-h-80 rounded"
          />
        </div>
      </div>
      <div className="space-y-2 sm:space-y-0 sm:space-x-2 w-full flex flex-col sm:flex-row justify-center md:justify-start items-strech sm:items-center">
        <Button variant={'default'} size={'lg'}><p className="font-bold">Let's Talk</p></Button>
        <Button variant={'secondary'} size={'lg'}><Github className="mr-2"/><p className="font-bold">GitHub</p></Button>
        <Button variant={'secondary'} size={'lg'}><DownloadIcon className="mr-2"/><p className="font-bold">Resume</p></Button>
        <Button variant={'secondary'} size={'lg'}><LinkedinIcon className="mr-2" /><p className="font-bold">Linkedin</p></Button>
      </div>
    </section>
  );
};
