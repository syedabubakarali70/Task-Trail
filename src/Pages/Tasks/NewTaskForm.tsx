import { Button } from "@/components/ui/button";
import Combobox from "@/components/ui/ComboBox";
import DatePicker from "@/components/ui/DatePicker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DropDownMenuRadioGroup from "@/components/ui/DropDownMenuRadioGroup";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { H4 } from "@/components/ui/Typography";
import { selectProfile } from "@/features/Profile/profileSlice";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { Plus } from "lucide-react";
import { useState } from "react";

const NewTaskForm = () => {
  const profile = useAppSelector(selectProfile);
  const [title] = useState("");
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
        <InputWithLabel label="Title" type="text" value={title} />
        <H4>Description</H4>
        <Textarea />
        <div className="grid md:grid-cols-2 w-full  gap-5">
          <InputWithLabel label="Assigned to" type="text" value={title} />
          <InputWithLabel
            label="Assigned By"
            type="text"
            value={profile.firstName}
          />
        </div>
        <div className="grid grid-cols-2 w-full  gap-5">
          <div className="w-full flex flex-col gap-2">
            <Label>Start Date</Label>
            <DatePicker placeholder="Start Date" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Label>End Date</Label>
            <DatePicker placeholder="End Date" />
          </div>
        </div>
        <div className="grid grid-cols-2 w-full  gap-5">
          <Combobox />
          <DropDownMenuRadioGroup />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewTaskForm;
