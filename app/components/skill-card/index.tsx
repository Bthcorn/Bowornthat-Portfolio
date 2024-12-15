"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import { motion } from "motion/react";

export interface SkillProps {
  title: string;
  icon: string;
}

export const SkillCard = (props: SkillProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="m-4"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <i className={`${props.icon} text-5xl`}></i>
          </TooltipTrigger>
          <TooltipContent>
            <Tooltip>{props.title}</Tooltip>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
};
