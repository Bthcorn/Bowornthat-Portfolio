import React from "react";
import { Separator } from "../ui/separator";

export const AboutMe = () => {
  return (
    <section className="w-full min-h-dvh rounded-t-3xl flex flex-col justify-start bg-secondary">
      <div className="h-fit flex flex-col justify-center items-center rounded-md p-6 gap-y-2">
        <p className="text-secondary-foreground">a little bit</p>
        <div className="text-primary-foreground bg-primary rounded-md font-semibold text-3xl sm:text-4xl md:text-5xl p-3 inline-flex">
          About Me
        </div>
      </div>
      <article className="w-full h-fit text-wrap whitespace-normal p-8 sm:p-12 md:p-20 text-seconday-foreground font-light text-md sm:text-lg leading-loose tracking-wide">
        <p className="flex md:hidden leading-relaxed">
          “Hello! I'm a Second-Year Software Engineering student at KMITL, eager
          to advance my coding skills and stay updated with new technologies.
          I'm looking for internships to apply my knowledge and gain practical
          experience. My strengths include a strong passion for learning and
          consistent effort. I'm excited to contribute to your team. Please
          contact me if my portfolio interests you.”
        </p>
        <div className="hidden md:flex flex-col gap-y-4 leading-relaxed whitespace-normal">
          <p className="">
            Hello! I’m currently Second-Year Software Engineering student at
            KMITL. I am experienced with programming logic, skills, and
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
            I hope you find my portfolio compelling. If so, please don't
            hesitate to contact me. I am looking forward to the possibility of
            contributing to your company and growing as part of your team.
          </p>
        </div>
        <p className="flex justify-end mt-8 text-muted-foreground">
          Bowornthat Chiangthong
        </p>
      </article>
      <Separator />
    </section>
  );
};
