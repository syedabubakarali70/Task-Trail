import { useAppSelector, useAppDispatch } from "@/Hooks/ReduxHooks";
import { selectName } from "@/features/Profile/profileSlice";
import { selectStatus, setStatus } from "@/features/Attendance/attendanceSlice";
import { Paper } from "@/components/ui/paper";
import { H3, P } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Chart } from "./chart";
const badgeVariants: { [key: string]: "warning" | "success" | "error" } = {
  "on Leave": "warning",
  Present: "success",
  Absent: "error",
};

const Attendance = () => {
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectName);
  const date = new Date();
  const FullDate =
    date.getDate().toString() +
    "-" +
    (date.getMonth() + 1).toString() +
    "-" +
    date.getFullYear().toString();
  return (
    <>
      <Paper className="px-6 py-4 flex flex-col md:flex-row">
        <div className="flex-1">
          <H3>{`Welcome ${name}`}</H3>
          <div>{FullDate}</div>
          <div className="flex gap-2">
            <P>Todays Status:</P>
            <Badge variant={badgeVariants[status]}>{status}</Badge>
          </div>
        </div>
        <div className="py-4">
          <Button
            variant={status === "Absent" ? "filled" : "outlined"}
            onClick={() => dispatch(setStatus())}
            className="w-full"
          >
            {status === "Present" ? "Check out" : "Check In"}
          </Button>
        </div>
      </Paper>
      <div className="grid md:grid-cols-2">
        <Chart />
      </div>
    </>
  );
};

export default Attendance;
