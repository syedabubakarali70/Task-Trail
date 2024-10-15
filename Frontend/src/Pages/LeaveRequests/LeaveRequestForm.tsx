import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import DatePickerWithRange from "@/components/ui/DatePickerWithRange";
import { addDays } from "date-fns";
const LeaveRequestForm = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 3),
  });
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
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Leave Request</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <DatePickerWithRange date={date} setDate={setDate} />
            <Label htmlFor="link">Reason</Label>
            <Textarea placeholder="Enter Reason" minLength={10} />
          </div>
        </div>
        <DialogFooter className="justify-end flex-row gap-2">
          <DialogClose asChild>
            <Button type="button" variant="outlined">
              Close
            </Button>
          </DialogClose>
          <Button variant="filled">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LeaveRequestForm;
