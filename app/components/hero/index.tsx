import React from "react";
import { AutoTyping } from "../autotyping";
import Image from "next/image";
import { ModeToggle } from "../theme-mode";

export const Hero = () => {
  return (
    <section className="">
      {/* <ModeToggle /> */}
      <div className="w-full h-dvh border flex //flex-col-reverse //md:flex-row-reverse justify-center md:justify-between p-8">
        {/* <ModeToggle /> */}
        <div className="w-2/4 h-72 bg-opacity-70">
        <span className="text-7xl font-satoshi-bold inline-block">Hi!👋🏻</span>
        <div className="//w-full //sm:w-2/4 border bg-opacity-70 size-fit">
          <AutoTyping />
        </div>
        </div>
      </div>
    </section>
  );
};
