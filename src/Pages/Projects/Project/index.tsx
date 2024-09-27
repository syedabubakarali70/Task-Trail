import { Paper } from "@/components/ui/paper";
import { selectProjectById } from "@/features/Projects/projectsSlice";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import ProjectCard from "../ProjectCard";
import { TaskCard } from "@/Pages/Tasks";
import { selectTasks } from "@/features/Task/taskSlice";
import { H3, P } from "@/components/ui/Typography";
export function projectLoader({ params }: LoaderFunctionArgs) {
  return { projectId: params.projectId };
}

const Project = () => {
  const { projectId } = useLoaderData() as { projectId: string };
  const project = useAppSelector(state => selectProjectById(state, projectId));
  let tasks = useAppSelector(selectTasks);
  tasks = tasks.filter(task =>
    project?.tasksId.find(taskId => task.id === taskId)
  );
  if (project)
    return (
      <Paper className="p-4 flex flex-col gap-4">
        <ProjectCard project={project} hide={true} />
        <div className="flex items-baseline flex-wrap">
          <P className="font-semibold text-lg">Members: </P>
          {project.members.map(member => (
            <span key={member} className="text-base px-1">
              {member}
            </span>
          ))}
        </div>
        <H3>Tasks</H3>
        <div className="grid sm:grid-cols-2  gap-4">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </Paper>
    );
  else {
    return <H3 className="flex justify-center mt-40">Invalid Project ID</H3>;
  }
};

export default Project;
