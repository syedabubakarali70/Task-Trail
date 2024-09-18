import { useAppSelector } from "@/Hooks/ReduxHooks";
import { H3, P } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { Paper } from "@/components/ui/paper";
import { selectLeaveRequests } from "@/features/LeaveRequests/leaveRequestSlice";
import { LeaveRequest as LeaveRequestType } from "@/features/LeaveRequests/leaveRequestSlice";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const LeaveRequest = (props: LeaveRequestType) => {
  const { startingDate, endingDate, reason, status } = props;
  return (
    <div className="w-full border rounded-full px-4 py-2 flex justify-between items-center">
      <div className="sm:flex">
        <P>{startingDate}</P>
        <P>{endingDate}</P>
      </div>
      <div className="hidden md:block">{reason}</div>
      <Badge variant={status}>{status}</Badge>
    </div>
  );
};

const LeaveRequests = () => {
  const leaverequests = useAppSelector(selectLeaveRequests);
  return (
    <>
      <Paper className="px-4 py-2 flex flex-col gap-4 pb-5">
        <H3 className="px-4">Leave Requests</H3>
        {leaverequests.map((request, index) => (
          <LeaveRequest key={index} {...request} />
        ))}
        <Button variant="filledTonal" className="w-full">
          <Plus />
          <p className="ml-2">Create New Request</p>
        </Button>
      </Paper>
    </>
  );
};

export default LeaveRequests;
