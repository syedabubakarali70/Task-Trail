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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { P } from "@/components/ui/Typography";
const LeaveRequestForm = () => {
  const [leaveDays, setLeaveDays] = useState<DateRange | undefined>();
  console.log(leaveDays);
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
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    size="icon"
                    variant="elevated"
                    className="text-black dark:text-white flex w-full justify-between px-4"
                  >
                    <P>Select Date</P>
                    <CalendarIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    mode="range"
                    disabled={{ before: new Date() }}
                    selected={leaveDays}
                    onSelect={setLeaveDays}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <Label htmlFor="link">Reason</Label>
            <Textarea placeholder="Enter Reason" />
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
