import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type DropDownMenuItem = { name: string; value: string };

type DropDownMenuProps = {
  label?: string;
  buttonText: string;
  items: DropDownMenuItem[];
  value: string | undefined;
  setValue: (value: string | undefined) => void;
};

export default function DropDownMenuRadioGroup({
  label,
  buttonText,
  items,
  value,
  setValue,
}: DropDownMenuProps) {
  const [position, setPosition] = React.useState("bottom");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-md justify-start w-full">
          {value || buttonText}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        {label && (
          <>
            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {items.map(item => (
            <DropdownMenuRadioItem
              key={item.value}
              value={item.value}
              onClick={() => setValue(item.value)}
            >
              {item.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
