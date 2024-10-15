import { useAppSelector } from "@/Hooks/ReduxHooks";
import { H3, H4, P } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/badge";
import { Paper } from "@/components/ui/paper";
import { selectTasks } from "@/features/Task/taskSlice";
import { Task } from "@/lib/types";
import { Link } from "react-router-dom";
import { selectName, selectRole } from "@/features/Profile/profileSlice";
import NewTaskForm from "./NewTaskForm";

const priorityBadgeVariants: {
  [key: string]: "warning" | "success" | "error";
} = {
  Medium: "warning",
  Low: "success",
  High: "error",
};
const statusBadgeVariants: {
  [key: string]: "warning" | "success" | "error" | "default";
} = {
  "In Progress": "warning",
  Completed: "success",
  Stuck: "error",
  "To-do": "default",
};

export const TaskCard = ({ task }: { task: Task }) => {
  return (
    <Link to={`/tasks/${task.id}`} className="border rounded-xl p-4">
      <div className="flex items-start">
        <H4 className="mb-2 flex-1">{task.title}</H4>
        <Badge variant={priorityBadgeVariants[task.priority]}>
          {task.priority}
        </Badge>
      </div>
      <hr />
      <div>
        <P className="font-bold">Description:</P>
        <P>{task.description ? task.description : ""}</P>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          <strong>Assigned To:</strong> {task.assignedTo.map(person => person)}
        </p>
        <p>
          <strong>Due Date:</strong> {`${task.dueDate.toISOString}`}
        </p>
        <div>
          <strong>Status: </strong>
          <Badge variant={statusBadgeVariants[task.status]}>
            {task.status}
          </Badge>
        </div>
      </div>
    </Link>
  );
};

const Tasks = () => {
  const name = useAppSelector(selectName);
  const role = useAppSelector(selectRole);
  let tasks: Task[] = [];
  const allTasks = useAppSelector(selectTasks);
  if (role === "admin") tasks = allTasks;
  else {
    if (role == "manager") {
      allTasks.forEach(task => {
        if (task.assignedBy === name) {
          tasks.push(task);
        }
      });
    }
    allTasks.forEach(task => {
      if (task.assignedTo.find(assignedName => assignedName === name)) {
        tasks.push(task);
      }
    });
  }

  return (
    <>
      <Paper className="px-4 py-2 flex flex-col gap-3 pb-4">
        <H3 className="px-4">Tasks</H3>
        <div className="grid sm:grid-cols-2  gap-4">
          {tasks.map(task => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      </Paper>
      {role !== "employee" && <NewTaskForm />}
    </>
  );
};

export default Tasks;
