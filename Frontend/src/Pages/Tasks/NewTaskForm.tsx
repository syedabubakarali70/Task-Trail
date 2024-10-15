import { Button } from "@/components/ui/button";
// import Combobox from "@/components/ui/ComboBox";
import DatePicker from "@/components/ui/DatePicker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { Plus } from "lucide-react";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskSchema } from "@/lib/schemas";
import { Label } from "@/components/ui/label";
import { Task } from "@/lib/types";
import DropDownMenuRadioGroup, {
  DropDownMenuItem,
} from "@/components/ui/DropDownMenuRadioGroup";

const TaskPriorities: DropDownMenuItem[] = [
  { name: "High", value: "High" },
  { name: "Medium", value: "Medium" },
  { name: "Low", value: "Low" },
];
const TaskStatuses: DropDownMenuItem[] = [
  { name: "In Progress", value: "In Progress" },
  { name: "Completed", value: "Completed" },
  { name: "To-do", value: "To-do" },
  { name: "Stuck", value: "Stuck" },
];

const NewTaskForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Task>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      id: "66fe5c2cf3f1b6a570d1679a",
      status: "To-do",
      assignedBy: "66fe5c2cf3f1b6a570d1679a",
      assignedTo: ["66fe5c2cf3f1b6a570d1679a"],
    },
  });
  // onSubmit will be passed as a prop
  const submitForm = (data: Task) => {
    console.log("Submitted Data");
    console.log(data);
  };
  const formValues = watch();
  console.log(formValues);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="filledTonal"
          size="icon"
          className="bottom-4 right-5 w-12 h-12 fixed"
        >
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Task</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <form onSubmit={handleSubmit(submitForm)}>
          <InputWithLabel
            label="Title"
            register={register("title")}
            type="text"
            error={errors.title}
          />
          <InputWithLabel
            label="Description"
            register={register("description")}
            type="textarea"
            error={errors.description}
          />
          <InputWithLabel
            label="Assigned To (User IDs)"
            register={register("assignedTo")}
            type="text"
            error={errors.assignedTo}
          />
          <InputWithLabel
            label="Assigned By (User IDs)"
            register={register("assignedBy")}
            type="text"
            error={errors.assignedBy}
          />
          <div className="flex w-full gap-2">
            <Controller
              name="startDate"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <div className="flex-1">
                  <Label>Start Date:</Label>
                  <DatePicker
                    placeholder="Select start date"
                    date={value} // Pass the form value
                    setDate={onChange} // Pass the onChange method from Controller to setDate
                  />
                  {error && (
                    <span className="text-red-500">{error.message}</span>
                  )}
                </div>
              )}
            />
            <Controller
              name="dueDate"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <div className="flex-1">
                  <Label>Due Date</Label>
                  <DatePicker
                    placeholder="Select Due date"
                    date={value} // Pass the form value
                    setDate={onChange} // Pass the onChange method from Controller to setDate
                  />
                  {error && (
                    <span className="text-red-500">{error.message}</span>
                  )}
                </div>
              )}
            />
          </div>
          <div className="flex w-full gap-2">
            <Controller
              name="priority"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <div className="flex-1">
                  <Label>Priority</Label>
                  <DropDownMenuRadioGroup
                    buttonText="Priority"
                    items={TaskPriorities}
                    value={value}
                    setValue={onChange}
                    label="Priority"
                  />
                  {error && (
                    <span className="text-red-500">{error.message}</span>
                  )}
                </div>
              )}
            />
            <Controller
              name="status"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <div className="flex-1">
                  <Label>Status</Label>
                  <DropDownMenuRadioGroup
                    buttonText="Status"
                    items={TaskStatuses}
                    value={value}
                    setValue={onChange}
                    label="Status"
                  />
                  {error && (
                    <span className="text-red-500">{error.message}</span>
                  )}
                </div>
              )}
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            onClick={() => console.log("clicked")}
          >
            {isSubmitting ? "Submitting..." : "Create Task"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewTaskForm;
