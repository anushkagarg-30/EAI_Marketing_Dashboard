"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

const data = [
  { month: "Jan", demoRequests: 145, demoCompleted: 123, trialSignups: 89, paidConversions: 34 },
  { month: "Feb", demoRequests: 167, demoCompleted: 142, trialSignups: 98, paidConversions: 41 },
  { month: "Mar", demoRequests: 189, demoCompleted: 156, trialSignups: 112, paidConversions: 47 },
  { month: "Apr", demoRequests: 203, demoCompleted: 178, trialSignups: 134, paidConversions: 56 },
  { month: "May", demoRequests: 234, demoCompleted: 198, trialSignups: 145, paidConversions: 62 },
  { month: "Jun", demoRequests: 267, demoCompleted: 223, trialSignups: 167, paidConversions: 71 },
]

export function DemoConversionChart() {
  return (
    <Card className="shadow-lg rounded-xl border-0 bg-white/90">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-blue-700">Demo & Trial Conversions</CardTitle>
        <CardDescription>Demo-to-paid conversion funnel</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={data} margin={{ top: 20, right: 30, left: 60, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontWeight: 600, fill: '#6366f1', fontSize: 14 }} />
              <YAxis tick={{ fontWeight: 600, fill: '#a855f7', fontSize: 14 }} />
              <ChartTooltip
                contentStyle={{
                  background: 'rgba(255,255,255,0.95)',
                  border: '1px solid #a855f7',
                  borderRadius: 8,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              />
              <Area
                type="monotone"
                dataKey="demoRequests"
                stackId="1"
                stroke="#3b82f6"
                fillOpacity={0.3}
                fill="#3b82f6"
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 5 }}
              />
              <Area
                type="monotone"
                dataKey="trialSignups"
                stackId="2"
                stroke="#22c55e"
                fillOpacity={0.6}
                fill="#22c55e"
                strokeWidth={3}
                dot={{ fill: '#22c55e', strokeWidth: 2, r: 5 }}
              />
              <Area
                type="monotone"
                dataKey="paidConversions"
                stackId="3"
                stroke="#8b5cf6"
                fillOpacity={0.8}
                fill="#8b5cf6"
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 5 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
