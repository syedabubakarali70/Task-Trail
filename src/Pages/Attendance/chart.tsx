import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

// const chartData = [
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
// ];

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   safari: {
//     label: "Safari",
//     color: "hsl(var(--chart-2))",
//   },
// } satisfies ChartConfig;

type Data = {
  total: number;
  label: string;
  endingAngle: number;
};

export function Chart({
  chartConfig,
  chartData,
}: {
  chartConfig: ChartConfig;
  chartData: Data[];
}) {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square flex flex-1 max-h-[200px] w-full"
    >
      <RadialBarChart
        data={chartData}
        startAngle={270}
        endAngle={chartData[0].endingAngle}
        innerRadius={85}
        outerRadius={65}
      >
        <PolarGrid
          gridType="circle"
          radialLines={true}
          stroke="none"
          className="first:fill-muted last:fill-background"
          polarRadius={[80, 70]}
        />
        <RadialBar dataKey="total" background cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-4xl font-bold"
                    >
                      {chartData[0].total.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      {chartData[0].label.toLocaleString()}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
