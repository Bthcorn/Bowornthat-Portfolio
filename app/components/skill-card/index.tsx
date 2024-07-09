import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";

export interface SkillProps {
  title: string;
  icon: string;
}

export const SkillCard = (props: SkillProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a>
            <i className="devicon-nextjs-plain text-5xl md:text-8xl cursor-pointer"></i>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>Next.js</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
