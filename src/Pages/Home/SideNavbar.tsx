import { Paper } from "@/components/ui/paper";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type SideNavBarProps = {
  open: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function SideNavbar({ open, onChange }: SideNavBarProps) {
  const display = open === true ? "block" : "hidden";

  return (
    <aside className={`flex-1 max-w-[400px] ${display} md:block`}>
      <Paper className="size-full rounded-r-xl" rounded="none">
        <Sheet open={open} onOpenChange={() => onChange(false)} modal={false}>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </Paper>
    </aside>
  );
}
