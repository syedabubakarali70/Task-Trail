import logo from "/TasktrailLogo.svg";
import ThemeToggle from "./ThemeToggle";
import { H4 } from "./ui/Typography";
import { Button } from "./ui/button";
import { Paper } from "./ui/paper";
import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Paper
        rounded="none"
        className="h-16 flex justify-between items-center px-4 "
      >
        {/* <Button
          variant="ghost"
          size="icon"
          className={` w-10 h-10 flex items-center justify-center md:hidden`}
          onClick={onMenuClick}
        >
          <Menu className="dark:text-white" />
        </Button> */}
        <Link
          to="/"
          className={`h-10 justify-center flex gap-2 text-nowrap items-center pl-1 `}
        >
          <img src={logo} className="w-9 h-9" />
          <H4 className="text-primary dark:text-white">Task Trail</H4>
        </Link>
        <div className="flex gap-1">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="dark:text-white border-white"
              >
                <CircleUserRound />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to={"profile/123"}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to={"signup"}>Sign Up</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to={"login"}>Login</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Paper>
    </header>
  );
};

export default Header;
