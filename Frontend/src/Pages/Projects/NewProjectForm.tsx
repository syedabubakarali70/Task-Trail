import { Button } from "@/components/ui/button";
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
import { ProjectSchema } from "@/lib/schemas";
import { Label } from "@/components/ui/label";
import { Project } from "@/lib/types";
import DropDownMenuRadioGroup, {
  DropDownMenuItem,
} from "@/components/ui/DropDownMenuRadioGroup";
import { useEffect } from "react";
import { DialogClose } from "@radix-ui/react-dialog";

const ProjectStatuses: DropDownMenuItem[] = [
  { name: "active", value: "active" },
  { name: "on-hold", value: "on-hold" },
  { name: "completed", value: "completed" },
];

const NewProjectForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Project>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      id: "66fe5c2cf3f1b6a570d1679a",
      members: ["66fe5c2cf3f1b6a570d1679a"],
    },
  });
  // onSubmit will be passed as a prop
  const submitForm = (data: Project) => {
    console.log("Submitted Data");
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);
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
          <DialogTitle>New Project</DialogTitle>
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
            label="Members"
            register={register("members")}
            type="text"
            error={errors.members}
          />
          <div className="flex w-full gap-2">
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
                    items={ProjectStatuses}
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
          <div className="flex justify-end gap-2 mt-4">
            <DialogClose asChild>
              <Button variant="outlined" onClick={() => reset()}>
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={isSubmitting}
              onClick={() => console.log("clicked")}
            >
              {isSubmitting ? "Submitting..." : "Create Task"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewProjectForm;
