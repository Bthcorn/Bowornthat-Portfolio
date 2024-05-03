import React from "react";
import { AutoTyping } from "../autotyping";

export const Hero = () => {
  return (
    <section className=" bg-red-300 flex justify-center items-center">
      <div className="w-9/12 h-9/12 border flex flex-col md:flex-row rounded-xl items-center justify-between p-10">
        <div className="w-auto h-auto border bg-[#FBE979] bg-opacity-70">
          <AutoTyping />
        </div>
        <div className="w-full h-72 flex flex-grow-0 items-center border bg-[#65BD7D] bg-opacity-70">
        </div>
      </div>
    </section>
  );
};
