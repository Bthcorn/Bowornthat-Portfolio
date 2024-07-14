import { SkillCard, SkillProps } from "../skill-card";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface SkillCardProps {
  title: string;
  skills: SkillProps[];
}

export const SkillCards = (props: SkillCardProps) => {
  return (
    <Card className="drop-shadow-md bg-secondary">
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
