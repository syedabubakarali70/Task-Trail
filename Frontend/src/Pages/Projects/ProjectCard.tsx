import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { H4, P } from "@/components/ui/Typography";
import { Project } from "@/lib/types";

const getProgressColor = (progress: number) => {
  const colors = ["bg-chart-2", "bg-warning", "bg-destructive"];
  if (progress > 66) return colors[0];
  else if (progress > 33) return colors[1];
  else return colors[2];
};
const getProgressBackgroundColor = (progress: number) => {
  const colors = ["bg-chart-2/20", "bg-warning/20", "bg-destructive/20"];
  if (progress > 66) return colors[0];
  else if (progress > 33) return colors[1];
  else return colors[2];
};

const badgeVariants: { [key: string]: "warning" | "success" | "error" } = {
  "on-hold": "warning",
  completed: "success",
  active: "error",
};

const ProjectCard = ({
  project,
  hide = false,
}: {
  project: Project;
  hide?: boolean;
}) => {
  return (
    <>
      <div className="flex justify-between items-baseline">
        <H4 className="pb-2 flex-1">{project.title}</H4>
        <Badge variant={badgeVariants[project.status]}>{project.status}</Badge>
      </div>
      <Progress
        value={project.progress}
        color={getProgressColor(project.progress)}
        bgColor={getProgressBackgroundColor(project.progress)}
      />
      <div className="flex flex-col justify-between">
        <P className="font-bold">Description:</P>
        <div className="flex items-start flex-1">
          <P className="min-h-8 max-h-20 overflow-y-scroll size-full">
            {project.description ? project.description : ""}
          </P>
        </div>
        <P className="font-semibold">{`Due Date: ${project.dueDate}`}</P>
        <div className={`flex justify-between ${hide && "hidden"}`}>
          <P className="font-semibold">
            {`Members: ${project.members.length.toString()}`}
          </P>
          <P className="font-semibold">
            {`Tasks: ${project.tasksId.length.toString()}`}
          </P>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
