import { Button } from "@/components/ui/button";
import { Paper } from "./components/ui/paper";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="bg-surface h-[100vh]">
      <ThemeToggle />
      <Button variant="elevated">Elevated</Button>
      <Button variant="filled">Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="ghost">Text / ghost</Button>
      <Button variant="filledTonal">Filled Tonal</Button>

      <div className="flex justify-between h-96] ">
        <Paper elevation={1} className="p-4 w-40 h-56 "></Paper>
        <Paper elevation={2} className="p-4 w-40 h-56 "></Paper>
        <Paper elevation={3} className="p-4 w-40 h-56 "></Paper>
        <Paper elevation={4} className="p-4 w-40 h-56 "></Paper>
        <Paper elevation={5} className="p-4 w-40 h-56 "></Paper>
        <Paper elevation={6} className="p-4 w-40 h-56 "></Paper>
      </div>
    </div>
  );
};

export default App;
