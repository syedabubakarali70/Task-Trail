import { Paper } from "@/components/ui/paper";
import { NavLink } from "react-router-dom";
import {
  SquareCheckBig,
  LayoutDashboard,
  AlarmClockCheck,
  Folder,
  Calendar,
  Users,
  Bell,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// type SideNavBarProps = {
//   open: boolean;
//   onChange: React.Dispatch<React.SetStateAction<boolean>>;
// };
const routes = [
  {
    path: "dashboard",
    name: "DashBoard",
    icon: <LayoutDashboard />,
  },
  {
    path: "attendance",
    name: "Attendance",
    icon: <AlarmClockCheck />,
  },
  {
    path: "tasks",
    name: "Tasks",
    icon: <SquareCheckBig />,
  },
  {
    path: "projects",
    name: "Projects",
    icon: <Folder />,
  },
  {
    path: "departments",
    name: "Departments",
    icon: <Users />,
  },
  {
    path: "leaverequests",
    name: "LeaveRequests",
    icon: <Calendar />,
  },
  {
    path: "notifications",
    name: "Notifications",
    icon: <Bell />,
  },
];

const handleIsMinimized = (
  setIsMinimized: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (window.innerWidth <= 500) {
    setIsMinimized(val => {
      if (!val) return true;
      else return val;
    });
  }
};

const SideNavbarContent = ({
  isMinimized,
  setIsMinimized,
}: {
  isMinimized: boolean;
  setIsMinimized: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <nav className={`size-full flex flex-col justify-between`}>
      <ul className="flex flex-col gap-1">
        {routes.map(route => (
          <NavLink
            to={route.path}
            key={route.path}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-secondary-container text-secondary-containerForeground"
                  : "text-primary/80 hover:bg-secondary-container/50 "
              } w-full  rounded-full font-semibold dark:text-white `
            }
            onClick={() => handleIsMinimized(setIsMinimized)}
          >
            <div className="flex gap-4 ">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="px-4 py-3">
                    {route.icon}
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>{route.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className={`${isMinimized && "hidden"} py-3`}>
                {route.name}
              </span>
            </div>
          </NavLink>
        ))}
      </ul>
      <div
        className={`w-full flex pb-8 ${
          isMinimized ? "justify-center" : "justify-end"
        }`}
      >
        <Button
          variant="ghost"
          size="icon"
          className="dark:text-white "
          onClick={() => setIsMinimized(val => !val)}
        >
          {isMinimized ? <ArrowRight /> : <ArrowLeft />}
        </Button>
      </div>
    </nav>
  );
};

export default function SideNavbar() {
  const [isMinimized, setiIsMinimized] = useState(true);
  return (
    <aside
      className={`${!isMinimized && "sm:w-auto md:flex-1 "} max-w-[400px] ${
        isMinimized && "max-w-20 "
      } transition-all duration-300 ease-in-out`}
    >
      <Paper className="size-full px-2 py-2" rounded="none">
        <div className={`size-full transition-opacity duration-300 `}>
          <SideNavbarContent
            isMinimized={isMinimized}
            setIsMinimized={setiIsMinimized}
          />
        </div>
      </Paper>
      {/* <Sheet open={open} onOpenChange={() => onChange(false)} modal={false}>
        <SheetContent side={"left"} className="px-4 py-2">
          <SheetHeader>
            <SheetTitle>Task Trail</SheetTitle>
          </SheetHeader>
          <SheetDescription />
          <SideNavbarContent
            onChange={onChange}
            isMinimized={isMinimized}
            setIsMinimized={setiIsMinimized}
          />
        </SheetContent>
      </Sheet> */}
    </aside>
  );
}
