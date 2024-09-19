import { useAppSelector } from "@/Hooks/ReduxHooks";
import { H3, H4, P, Small } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { Paper } from "@/components/ui/paper";
import { selectLeaveRequests } from "@/features/LeaveRequests/leaveRequestSlice";
import { LeaveRequest as LeaveRequestType } from "@/features/LeaveRequests/leaveRequestSlice";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const LeaveRequest = (props: LeaveRequestType) => {
  const { startingDate, endingDate, reason, status } = props;
  return (
    <div className="w-full border rounded-md px-4 py-2 flex flex-col justify-between">
      <div className="flex justify-between items-baseline">
        <H4>Leave Request</H4>
        <Badge variant={status}>{status}</Badge>
      </div>
      <P>{reason}</P>

      <div className="flex justify-between">
        <div className="flex flex-col gap-2 py-2">
          <Small>Starting date:</Small>
          <Small>{startingDate}</Small>
        </div>
        <div className="flex flex-col gap-2 py-2">
          <Small>Ending date:</Small>
          <Small>{endingDate}</Small>
        </div>
      </div>
    </div>
  );
};

const LeaveRequests = () => {
  const leaverequests = useAppSelector(selectLeaveRequests);
  return (
    <>
      <Paper className="px-4 py-2 flex flex-col gap-3 pb-4">
        <H3>Leave Requests</H3>
        <div className="grid sm:grid-cols-2  gap-4">
          {leaverequests.map((request, index) => (
            <LeaveRequest key={index} {...request} />
          ))}
        </div>
      </Paper>
      <Button
        variant="filledTonal"
        size="icon"
        className="bottom-4 right-5 w-12 h-12 fixed"
      >
        <Plus />
      </Button>
    </>
  );
};

export default LeaveRequests;
