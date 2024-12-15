"use client";
import { SkillCard, SkillProps } from "../skill-card";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "motion/react";

interface SkillCardProps {
  title: string;
  skills: SkillProps[];
}

export const SkillCards = (props: SkillCardProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            <p>{props.title}</p>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap">
          {props.skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};
