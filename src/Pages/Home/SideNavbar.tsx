import { Paper } from "@/components/ui/paper";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";

type SideNavBarProps = {
  open: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
};
const routes = [
  {
    path: "dashboard",
    name: "DashBoard",
  },
  {
    path: "attendance",
    name: "Attendance",
  },
  {
    path: "tasks",
    name: "Tasks",
  },
  {
    path: "projects",
    name: "Projects",
  },
  {
    path: "departments",
    name: "Departments",
  },
  {
    path: "leaverequests",
    name: "LeaveRequests",
  },
  {
    path: "notifications",
    name: "Notifications",
  },
];

const SideNavbarContent = ({
  onChange,
}: {
  onChange?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <nav className="size-full">
      <ul className="flex flex-col ">
        {routes.map(route => (
          <NavLink
            to={route.path}
            key={route.path}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-secondary-container text-secondary-containerForeground"
                  : "text-primary/80 hover:bg-secondary-container/50 "
              } w-full px-4 py-2 rounded-full font-semibold dark:text-white `
            }
            onClick={() => onChange && onChange(false)}
          >
            {route.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default function SideNavbar({ open, onChange }: SideNavBarProps) {
  return (
    <aside className={`flex-1 max-w-[400px] hidden md:block`}>
      <Paper className="size-full rounded-r-xl px-4 py-2" rounded="none">
        <SideNavbarContent />
      </Paper>
      <Sheet open={open} onOpenChange={() => onChange(false)} modal={false}>
        <SheetContent side={"left"} className="px-4 py-2">
          <SheetHeader>
            <SheetTitle>Task Trail</SheetTitle>
          </SheetHeader>
          <SheetDescription />
          <SideNavbarContent onChange={onChange} />
        </SheetContent>
      </Sheet>
    </aside>
  );
}
