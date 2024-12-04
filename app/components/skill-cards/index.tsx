import { SkillCard, SkillProps } from "../skill-card";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "motion/react";

interface SkillCardProps {
  title: string;
  skills: SkillProps[];
}

export const SkillCards = (props: SkillCardProps) => {
  return (
    <Card>
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
  );
};
