"use client"

import { Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Area, AreaChart } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

const data = [
  { month: "Jan", mrr: 89000, newMrr: 12000, churnedMrr: 3400, netGrowth: 8600 },
  { month: "Feb", mrr: 97600, newMrr: 14200, churnedMrr: 2800, netGrowth: 11400 },
  { month: "Mar", mrr: 109000, newMrr: 15800, churnedMrr: 3200, netGrowth: 12600 },
  { month: "Apr", mrr: 121600, newMrr: 17400, churnedMrr: 2900, netGrowth: 14500 },
  { month: "May", mrr: 136100, newMrr: 18900, churnedMrr: 3100, netGrowth: 15800 },
  { month: "Jun", mrr: 151900, newMrr: 20200, churnedMrr: 2800, netGrowth: 17400 },
]

export function MrrGrowthChart() {
  return (
    <Card className="shadow-lg rounded-xl border-0 bg-white/90">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-orange-700">MRR Growth</CardTitle>
        <CardTitle>Monthly Recurring Revenue Growth</CardTitle>
        <CardDescription>MRR trend with new vs churned revenue</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            mrr: {
              label: "Total MRR",
              color: "hsl(var(--chart-1))",
            },
            newMrr: {
              label: "New MRR",
              color: "hsl(var(--chart-2))",
            },
            churnedMrr: {
              label: "Churned MRR",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload
                    return (
                      <div className="bg-white p-3 border rounded-lg shadow-lg">
                        <p className="font-medium">{label}</p>
                        <p className="text-blue-600">Total MRR: ${data.mrr.toLocaleString()}</p>
                        <p className="text-green-600">New MRR: ${data.newMrr.toLocaleString()}</p>
                        <p className="text-red-600">Churned MRR: ${data.churnedMrr.toLocaleString()}</p>
                        <p className="text-purple-600">Net Growth: ${data.netGrowth.toLocaleString()}</p>
                        <p className="text-orange-600">
                          Growth Rate: {((data.netGrowth / (data.mrr - data.netGrowth)) * 100).toFixed(1)}%
                        </p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Area type="monotone" dataKey="mrr" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} strokeWidth={3} />
              <Line type="monotone" dataKey="newMrr" stroke="#22c55e" strokeWidth={2} strokeDasharray="5 5" />
              <Line type="monotone" dataKey="churnedMrr" stroke="#ef4444" strokeWidth={2} strokeDasharray="3 3" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
