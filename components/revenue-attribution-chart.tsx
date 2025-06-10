"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

export function RevenueAttributionChart({ data }: { data: { name: string; value: number; revenue: number }[] }) {
  return (
    <Card className="shadow-lg rounded-xl border-0 bg-white/90">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-green-700">Revenue Attribution</CardTitle>
        <CardDescription>Revenue breakdown by acquisition channel</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <ChartTooltip
                contentStyle={{
                  background: 'rgba(255,255,255,0.95)',
                  border: '1px solid #6ee7b7',
                  borderRadius: 8,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
