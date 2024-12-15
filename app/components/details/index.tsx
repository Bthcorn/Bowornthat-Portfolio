"use client";

import { motion } from "motion/react";

export const Details = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
      className="mb-8 flex w-full flex-col rounded-3xl bg-secondary"
      id="details"
    >
      <div className="flex h-fit flex-col items-start justify-start gap-y-2 rounded-md p-6">
        <div className="w-full p-3 sm:w-auto">
          <p className="text-muted-foreground">background information</p>
          <h1 className="font inline-flex text-3xl font-bold md:text-4xl">
            Education
          </h1>
          <div className="border-b-4 border-primary"></div>
        </div>
      </div>
      <div className="mx-auto flex w-full items-center justify-center p-8 pt-0">
        <div className="flex w-full flex-col space-y-2 rounded-md bg-background p-4">
          <div className="space-y-1">
            <label htmlFor="bechelor">Bechelor</label>
            <div className="flex justify-between rounded-md bg-secondary px-4 py-2">
              <span className="font-bold">
                King Mongkut&apos;s Institute of Technology Ladkrabang (KMITL)
              </span>
              <span className="text-muted-foreground">2023-Now</span>
            </div>
            <div className="flex rounded-md bg-secondary px-4 py-2">
              Bechelor&apos;s Degree in Software Engineering
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
