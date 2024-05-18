import React from "react";
import { AutoTyping } from "../autotyping";
import Image from "next/image";
import { ModeToggle } from "../theme-mode";

export const Hero = () => {
  return (
    <section className="">
      {/* <ModeToggle /> */}
      <div className="w-full h-full border flex flex-grow-0 flex-col-reverse md:flex-row-reverse rounded-xl items-center justify-between p-8 bg-card shadow-md">
        {/* <ModeToggle /> */}
        <div className="w-full h-72 bg-[#65BD7D] bg-opacity-70"></div>
        <div className="w-full bg-[#FBE979] bg-opacity-70">
          <AutoTyping />
        </div>
      </div>
    </section>
  );
};
