import React from "react";
import { AutoTyping } from "../autotyping";
import Image from "next/image";
import { ModeToggle } from "../theme-mode";


export const Hero = () => {
  return (
    <section className="w-full mx-auto flex flex-wrap items-center my-8 gap-4 justify-center">
      <span className="w-full justify-center md:justify-start mb-4 text-7xl font-bold inline-flex">Hi!👋🏻</span>
      <div className="w-full md:grid gap-x-2 grid-cols-12 flex flex-col justify-center gap-y-2">
        <div className="border col-span-7 min-h-40 items-center flex justify-center md:justify-start">
          <AutoTyping />
        </div>
        <div className="col-span-4 col-start-9 flex justify-center m-4 md:m-0">
          <Image
            src={
              "https://th.bing.com/th/id/R.6dadd6a39af8ca284e56354ee099752e?rik=JXGf1AD1SgQOPg&pid=ImgRaw&r=0"
            }
            alt=""
            width={400}
            height={400}
            priority
            className="aspect-square object-cover"
          />
        </div>
      </div>
    </section>
  );
};
