"use client";

import React from "react";
import Typed from "typed.js";

export const AutoTyping = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Welcome to My Portfolio.",
        "I'm Bowornthat Chiangthong.",
        "I'm 2nd Year Student.",
        "I'm a Software Engineering.",
        "I'm studying at KMITL.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: "_",
      backDelay: 2000,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="text-wrap text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
        <span ref={el} />
      </h1>
    </div>
  );
};
