import { Paper } from "@/components/ui/paper";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { selectAllProjects } from "@/features/Projects/projectsSlice";
import { H3 } from "@/components/ui/Typography";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { Project } from "@/lib/types";
import { selectName, selectRole } from "@/features/Profile/profileSlice";
import NewProjectForm from "./NewProjectForm";

const Projects = () => {
  const allProjects = useAppSelector(selectAllProjects);
  const role = useAppSelector(selectRole);
  const name = useAppSelector(selectName);
  let projects: Project[] = [];
  if (role === "admin") projects = allProjects;
  else {
    allProjects.forEach(project => {
      if (project.members.find(memberName => memberName === name)) {
        projects.push(project);
      }
    });
  }
  return (
    <>
      <Paper className="size-full px-4 py-2">
        <H3 className="px-4 py-2">Projects</H3>
        <ul className="grid sm:grid-cols-2 gap-4 ">
          {projects.map(project => (
            <li key={project.id} className="size-full">
              <Link to={`/projects/${project.id}`}>
                <div className="px-4 py-2 border rounded-2xl size-full">
                  <ProjectCard project={project} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Paper>
      <NewProjectForm />
    </>
  );
};

export default Projects;
