import { Paper } from "@/components/ui/paper";
import ProfileInfo from "../Attendance/ProfileInfo";
import Notifications from "../Notifications";
const Dashboard = () => {
  return (
    <>
      <section className="flex flex-col gap-2 size-full">
        <div className="flex gap-4  h-auto lg:flex-1 flex-wrap rounded-3xl">
          <Paper className="p-2 py-4 flex-1 flex min-w-60 lg:h-full  rounded-3xl">
            <ProfileInfo className="px-4 gap-2" />
          </Paper>
          <div className="flex-[2] min-w-[60%] rounded-3xl overflow-y-scroll max-h-52 min-h-52 lg:min-h-0 lg:max-h-full">
            <Notifications />
          </div>
        </div>
        <div className="border h-auto lg:flex-1 rounded-3xl"></div>
        <div className="border h-auto lg:flex-1 rounded-3xl"></div>
      </section>
    </>
  );
};

export default Dashboard;
