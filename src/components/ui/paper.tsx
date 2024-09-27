import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define drop-shadow- classes for different elevations
const elevationClasses = {
  level1: "drop-shadow-sm", // md.sys.elevation.level1
  level2: "drop-shadow", // md.sys.elevation.level5
  level3: "drop-shadow-md", // md.sys.elevation.level2
  level4: "drop-shadow-lg", // md.sys.elevation.level3
  level5: "drop-shadow-xl", // md.sys.elevation.level4
  level6: "drop-shadow-2xl", // md.sys.elevation.level5
};

// Define the Paper component variants
const paperVariants = cva("", {
  variants: {
    elevation: {
      1: `${elevationClasses.level1} bg-surface-dim`,
      2: `${elevationClasses.level2} bg-surface`,
      3: `${elevationClasses.level3} bg-surface-containerLow`,
      4: `${elevationClasses.level4} bg-surface-container`,
      5: `${elevationClasses.level5} bg-surface-containerHigh`,
      6: `${elevationClasses.level6} bg-surface-containerHighest`,
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      default: "rounded",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      xxl: "rounded-2xl",
      xxxl: "rounded-3xl",
    },
  },
  defaultVariants: {
    elevation: 2,
    rounded: "xxxl",
  },
});

export interface PaperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof paperVariants> {
  asChild?: boolean;
}

const Paper = React.forwardRef<HTMLDivElement, PaperProps>(
  ({ className, elevation, rounded, ...props }, ref) => {
    return (
      <div
        className={cn(paperVariants({ elevation, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Paper.displayName = "Paper";

export { Paper, paperVariants };
