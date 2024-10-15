import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  color?: string;
  bgColor?: string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, color, bgColor, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      `relative h-1 w-full overflow-hidden rounded-full ${bgColor} `,
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={`h-full w-full flex-1 ${color} transition-all`}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
