import { Badge } from "@/components/ui/badge";
import { H3, P } from "@/components/ui/Typography";
import { selectStatus } from "@/features/Attendance/attendanceSlice";
import { selectName } from "@/features/Profile/profileSlice";
import { useAppSelector } from "@/Hooks/ReduxHooks";
const badgeVariants: { [key: string]: "warning" | "success" | "error" } = {
  "on Leave": "warning",
  Present: "success",
  Absent: "error",
};
const date = new Date();
const FullDate =
  date.getDate().toString() +
  "-" +
  (date.getMonth() + 1).toString() +
  "-" +
  date.getFullYear().toString();

const ProfileInfo = ({ className }: { className?: string }) => {
  const name = useAppSelector(selectName);
  const status = useAppSelector(selectStatus);

  return (
    <div className={`flex-1 flex flex-col ${className}`}>
      <H3>{`Welcome ${name}`}</H3>
      <div>{FullDate}</div>
      <div className="flex gap-2 items-center">
        <P>Todays Status:</P>
        <Badge variant={badgeVariants[status]}>{status}</Badge>
      </div>
    </div>
  );
};

export default ProfileInfo;
