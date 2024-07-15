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
    <div className="m-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <i className={`${props.icon} text-5xl sm:text-7xl`}></i>
          </TooltipTrigger>
          <TooltipContent>
            <Tooltip>{props.title}</Tooltip>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
