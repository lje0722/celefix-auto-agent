import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar } from "recharts";

const feeLineData = [
  { month: "6월", "솔로": 3.2, "걸그룹": 4.1, "배우": 2.1, "보이그룹": 3.6 },
  { month: "7월", "솔로": 3.6, "걸그룹": 4.4, "배우": 2.4, "보이그룹": 3.2 },
  { month: "8월", "솔로": 3.9, "걸그룹": 4.9, "배우": 2.8, "보이그룹": 3.8 },
];

const contractAvg = [
  { name: "솔로 가수", value: 28.4 },
  { name: "걸그룹", value: 24.6 },
  { name: "배우", value: 16.8 },
  { name: "보이그룹", value: 22.3 },
];

export default function PerformanceMetrics() {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-sm font-medium mb-2">출연료 추이 (상위 5개 장르)</div>
        <ChartContainer config={{}} className="h-56 w-full">
          <LineChart data={feeLineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Line type="monotone" dataKey="솔로" stroke="hsl(var(--primary))" strokeWidth={2} />
            <Line type="monotone" dataKey="걸그룹" stroke="hsl(var(--accent))" strokeWidth={2} />
            <Line type="monotone" dataKey="배우" stroke="hsl(var(--secondary-foreground))" strokeWidth={2} />
            <Line type="monotone" dataKey="보이그룹" stroke="hsl(var(--muted-foreground))" strokeWidth={2} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
          </LineChart>
        </ChartContainer>
      </div>

      <div>
        <div className="text-sm font-medium mb-2">장르별 연평균 계약 건수</div>
        <div className="space-y-3">
          {contractAvg.map((c) => (
            <div key={c.name}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>{c.name}</span>
                <span className="font-bold">{c.value}건</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-primary" style={{ width: `${Math.round((c.value/30)*100)}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
