"use client";
import React, { useRef } from "react";
import { Separator } from "../ui/separator";
import { motion } from "motion/react";

export const AboutMe = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 20, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
      className="mb-8 flex min-h-screen w-full flex-col items-center rounded-3xl bg-secondary"
    >
      <div className="flex h-fit flex-col items-center justify-start gap-y-2 rounded-md p-6 sm:justify-center">
        <p className="text-muted-foreground">a little bit</p>
        <div className="w-full sm:w-auto">
          <h1 className="font inline-flex p-3 text-3xl font-bold md:text-4xl">
            About Me
          </h1>
          <div className="border-b-4 border-primary"></div>
        </div>
      </div>
      <article className="text-seconday-foreground text-md h-fit w-full max-w-3xl whitespace-normal text-wrap p-8 font-light leading-loose tracking-wide sm:p-12 sm:text-lg">
        <p className="flex leading-relaxed md:hidden">
          “Hello! I&apos;m a Second-Year Software Engineering student at KMITL,
          eager to advance my coding skills and stay updated with new
          technologies. I&apos;m looking for internships to apply my knowledge
          and gain practical experience. My strengths include a strong passion
          for learning and consistent effort. I&apos;m excited to contribute to
          your team. Please contact me if my portfolio interests you.”
        </p>
        <div className="hidden flex-col gap-y-4 whitespace-normal leading-relaxed md:flex">
          <p className="">
            Hello! I&apos;m currently Second-Year Software Engineering student
            at KMITL. I am experienced with programming logic, skills, and
            background. I am committed to continually improving my coding skills
            and knowledge in order to develop good software solutions that
            improve customer experiences. My strengths includes a deep passion
            for learning, consistency in my efforts, and determination to stay
            updated with the latest technologies and programming techniques.
          </p>
          <p className="text-muted-foreground">WhyAmISeekingIntership ?</p>{" "}
          <p className="">
            Internship is crucial for applying theoretical knowledge in
            real-world environment, allowing for hands-on practice and the
            opportunity to receive valuable feedback. I am eager to improve my
            programming skills and gain practical experience from internship
            that will be essential for my professional growth. Furthermore, it
            enhances collaborative and communication skills which are vital for
            a successful career in software developments.
          </p>
          <p className="">
            I hope you find my portfolio compelling. If so, please don&apos;t
            hesitate to contact me. I am looking forward to the possibility of
            contributing to your company and growing as part of your team.
          </p>
        </div>
        <p className="mt-8 flex justify-end text-muted-foreground">
          Bowornthat Chiangthong
        </p>
      </article>
    </motion.section>
  );
};
