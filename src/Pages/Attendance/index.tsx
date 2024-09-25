import { useAppSelector, useAppDispatch } from "@/Hooks/ReduxHooks";
import { selectName } from "@/features/Profile/profileSlice";
import {
  selectLeavesAvailed,
  selectStatus,
  selectTotalActiveDays,
  selectTotalLeaves,
  setStatus,
} from "@/features/Attendance/attendanceSlice";
import { Paper } from "@/components/ui/paper";
import { H3, H4, P } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Chart } from "./chart";
import { ChartConfig } from "@/components/ui/chart";

const badgeVariants: { [key: string]: "warning" | "success" | "error" } = {
  "on Leave": "warning",
  Present: "success",
  Absent: "error",
};

function calculateEndingAngle(totalLeaves: number, leavesRemaining: number) {
  const startAngle = 270; // Starting angle (fully unfilled)
  // const endAngle = -90;   // Ending angle (fully filled)
  const percentageRemaining = leavesRemaining / totalLeaves;
  const angleRange = 360;
  const endingAngle = startAngle - angleRange * (1 - percentageRemaining);

  if (endingAngle < -90 || endingAngle > 270) return 270.1;
  return endingAngle;
}

const getChartColor = (num1: number, num2: number, inverse = false) => {
  const colors = [
    "hsl(var(--chart-2))",
    "hsl(var(--warning))",
    "hsl(var(--destructive))",
  ];
  const percentage = num2 / num1;
  const inverseMap: { [key: number]: number } = {
    0: 2,
    1: 1,
    2: 0,
  };
  let x = 0;
  if (percentage > 0.66) x = 0;
  else if (percentage > 0.33) x = 1;
  else x = 2;
  if (inverse) {
    return colors[inverseMap[x]];
  }
  return colors[x];
};

const Attendance = () => {
  const status = useAppSelector(selectStatus);
  const totalActiveDays = useAppSelector(selectTotalActiveDays);
  const totalLeaves = useAppSelector(selectTotalLeaves);
  const leavesAvailed = useAppSelector(selectLeavesAvailed);
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectName);
  const date = new Date();
  const FullDate =
    date.getDate().toString() +
    "-" +
    (date.getMonth() + 1).toString() +
    "-" +
    date.getFullYear().toString();

  const leavesRemainingData = [
    {
      total: totalLeaves - leavesAvailed,
      endingAngle: calculateEndingAngle(totalLeaves, leavesAvailed),
      label: "Leaves Remaining",
      fill: "var(--color-leaves-remaining)",
    },
  ];
  const leavesUsedData = [
    {
      total: leavesAvailed,
      endingAngle: calculateEndingAngle(
        totalLeaves,
        totalLeaves - leavesAvailed
      ),
      label: "Leaves Used",
      fill: "var(--color-leaves-used)",
    },
  ];
  const leavesUsedConfig = {
    total: {
      label: "Leaves Used",
    },
    "leaves-used": {
      label: "Leaves Used",
      color: getChartColor(totalLeaves, totalLeaves - leavesAvailed),
    },
  } satisfies ChartConfig;
  const leavesRemainingConfig = {
    total: {
      label: "Total",
    },
    "leaves-remaining": {
      label: "Leaves Remaining",
      color: getChartColor(totalLeaves, leavesAvailed, true),
    },
  } satisfies ChartConfig;
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
      <div className="flex flex-col lg:flex-row py-2">
        <Paper
          className="flex flex-col px-5 py-4 items-center justify-center "
          elevation={2}
        >
          <H4>Total Active Days</H4>
          <div className="text-4xl text-muted-foreground font-bold">
            {totalActiveDays.toString()}
          </div>
        </Paper>
        <div className="flex-1 flex flex-col md:flex-row">
          <Chart
            chartConfig={leavesRemainingConfig}
            chartData={leavesRemainingData}
          />
          <Chart chartConfig={leavesUsedConfig} chartData={leavesUsedData} />
        </div>
      </div>
    </>
  );
};

export default Attendance;
