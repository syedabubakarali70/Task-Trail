import { useAppSelector } from "@/Hooks/ReduxHooks";
import { H3, H4, P, Small } from "@/components/ui/Typography";
import { Paper } from "@/components/ui/paper";
import { selectLeaveRequests } from "@/features/LeaveRequests/leaveRequestSlice";
import { LeaveRequest as LeaveRequestType } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import LeaveRequestForm from "./LeaveRequestForm";

const badgeVariants: { [key: string]: "warning" | "success" | "error" } = {
  Pending: "warning",
  Approved: "success",
  Rejected: "error",
};

const LeaveRequest = (props: LeaveRequestType) => {
  const { startingDate, endingDate, reason, status } = props;
  return (
    <div className="w-full border rounded-xl px-4 py-2 flex flex-col justify-between">
      <div className="flex justify-between items-baseline">
        <H4>Reason</H4>
        <Badge variant={badgeVariants[status]}>{status}</Badge>
      </div>
      <div className="flex items-start flex-1">
        <P className="min-h-8 max-h-20 overflow-y-scroll size-full">{reason}</P>
      </div>

      <div className="flex justify-between mt-2">
        <div className="flex flex-col gap-1 py-2">
          <Small>Starting date:</Small>
          <Small>{startingDate.toISOString()}</Small>
        </div>
        <div className="flex flex-col gap-1 py-2">
          <Small>Ending date:</Small>
          <Small>{endingDate.toISOString()}</Small>
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
        <H3 className="px-4">Leave Requests</H3>
        <div className="grid sm:grid-cols-2  gap-4">
          {leaverequests.map((request, index) => (
            <LeaveRequest key={index} {...request} />
          ))}
        </div>
      </Paper>
      <LeaveRequestForm />
    </>
  );
};

export default LeaveRequests;
