import React from "react";
import { AutoTyping } from "../autotyping";
import Image from "next/image";
import { ModeToggle } from "../theme-mode";


export const Hero = () => {
  return (
    <section className="">
      <div className="relative w-full h-dvh max-h-fit border flex justify-center md:justify-between p-8">
        {/* <div className="relative"> */} 
          <span className="absolute top-10 mb-4 text-7xl font-bold inline-block">Hi!👋🏻</span>
          <div className="absolute top-60 border bg-opacity-70 text-wrap w-1/2 max-h-fit">
            <AutoTyping />
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};
