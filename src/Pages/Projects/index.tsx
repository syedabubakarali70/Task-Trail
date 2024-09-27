import { Paper } from "@/components/ui/paper";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { selectAllProjects } from "@/features/Projects/projectsSlice";
const Projects = () => {
  const projects = useAppSelector(selectAllProjects);
  return (
    <Paper className="size-full">
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </Paper>
  );
};

export default Projects;
