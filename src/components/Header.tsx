import logo from "../../public/TasktrailLogo.svg";
import ThemeToggle from "./ThemeToggle";
import { H4 } from "./ui/Typography";
import { Button } from "./ui/button";
import { Paper } from "./ui/paper";
import { Menu } from "lucide-react";

type HeaderProps = {
  onMenuClick: () => void;
};

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header>
      <Paper
        elevation={3}
        rounded="none"
        className="h-16 flex justify-between items-center px-4 "
      >
        <Button
          variant="ghost"
          size="icon"
          className={` w-10 h-10 flex items-center justify-center md:hidden`}
          onClick={onMenuClick}
        >
          <Menu />
        </Button>
        <div
          className={`h-10 justify-center flex gap-2 text-nowrap items-center`}
        >
          <img src={logo} className="w-10 h-10" />
          <H4 className="text-primary">Task Trail</H4>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </Paper>
    </header>
  );
};

export default Header;
