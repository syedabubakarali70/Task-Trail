import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useTheme } from "@/components/Providers/themeProvider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      size="icon"
      variant="ghost"
      className="dark:border-white"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] dark:text-white" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] dark:text-white" />
      )}
    </Button>
  );
};

export default ThemeToggle;
