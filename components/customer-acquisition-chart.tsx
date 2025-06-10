"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

export function CustomerAcquisitionChart({ data }: { data: { month: string; cac: number; ltv: number; ratio: number }[] }) {
  return (
    <Card className="shadow-lg rounded-xl border-0 bg-white/90">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-emerald-700">Customer Acquisition</CardTitle>
        <CardDescription>CAC vs LTV trends</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="p-4 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg">
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 60, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontWeight: 600, fill: '#10b981', fontSize: 14 }} />
              <YAxis yAxisId="left" tick={{ fontWeight: 600, fill: '#ef4444', fontSize: 14 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontWeight: 600, fill: '#22c55e', fontSize: 14 }} />
              <ChartTooltip
                contentStyle={{
                  background: 'rgba(255,255,255,0.95)',
                  border: '1px solid #6ee7b7',
                  borderRadius: 8,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="cac"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ fill: '#ef4444', strokeWidth: 2, r: 5 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="ltv"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ fill: '#22c55e', strokeWidth: 2, r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
