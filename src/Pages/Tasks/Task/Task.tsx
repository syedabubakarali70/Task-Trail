import { Paper } from "@/components/ui/paper";
import { H4, P } from "@/components/ui/Typography";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { Badge } from "@/components/ui/badge";
import { Pen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { changeStatus, selectTask } from "@/features/Task/taskSlice";
import { useAppDispatch } from "@/Hooks/ReduxHooks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLoaderData } from "react-router-dom";
import { LoaderFunctionArgs } from "react-router-dom";

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

export function taskLoader({ params }: LoaderFunctionArgs) {
  return { taskId: params.taskId };
}

const Task = () => {
  const { taskId } = useLoaderData() as { taskId: string };
  const task = useAppSelector(state =>
    selectTask({ task: state.task }, taskId)
  );
  const dispatch = useAppDispatch();
  if (task)
    return (
      <Paper className="border rounded-xl p-4">
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
            <strong>Assigned To:</strong>{" "}
            {task.assignedTo.map(person => person)}
          </p>
          <p>
            <strong>Due Date:</strong> {task.dueDate.toISOString()}
          </p>
          <div className="flex items-center gap-1 py-1">
            <strong>Status: </strong>
            <Badge variant={statusBadgeVariants[task.status]}>
              {task.status}
            </Badge>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Pen className="w-4 h-4 text-black dark:text-white" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() =>
                    dispatch(changeStatus({ id: task.id, status: "Completed" }))
                  }
                >
                  Completed
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    dispatch(
                      changeStatus({ id: task.id, status: "In Progress" })
                    )
                  }
                >
                  In Progress
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    dispatch(changeStatus({ id: task.id, status: "Stuck" }))
                  }
                >
                  Stuck
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    dispatch(changeStatus({ id: task.id, status: "To-do" }))
                  }
                >
                  To-do
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Paper>
    );
};

export default Task;
