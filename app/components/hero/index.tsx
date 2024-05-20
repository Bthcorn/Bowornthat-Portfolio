import React from "react";
import { AutoTyping } from "../autotyping";
import Image from "next/image";
import { ModeToggle } from "../theme-mode";

export const Hero = () => {
  return (
    <section className="">
      {/* <ModeToggle /> */}
      <div className="w-full h-dvh border flex flex-col-reverse md:flex-row-reverse justify-between p-8">
        {/* <ModeToggle /> */}
        <div className="w-full h-72 bg-opacity-70"></div>
        <div className="w-2/4 border bg-opacity-70">
          <AutoTyping />
        </div>
      </div>
    </section>
  );
};
