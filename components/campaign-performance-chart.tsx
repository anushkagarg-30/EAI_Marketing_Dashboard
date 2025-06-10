"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

export function CampaignPerformanceChart({ data }: { data: { campaign: string; impressions: number; clicks: number; conversions: number; roi: number }[] }) {
  return (
    <Card className="shadow-lg rounded-xl border-0 bg-white/90">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-purple-700">Campaign Performance</CardTitle>
        <CardDescription>ROI and conversion metrics by campaign</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="p-4 bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 60, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="campaign"
                angle={-35}
                textAnchor="end"
                height={90}
                fontSize={13}
                tick={{ fontWeight: 600, fill: '#a855f7' }}
              />
              <YAxis yAxisId="left" tick={{ fontWeight: 600, fill: '#6366f1' }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontWeight: 600, fill: '#f59e0b' }} />
              <ChartTooltip
                contentStyle={{
                  background: 'rgba(255,255,255,0.95)',
                  border: '1px solid #fcd34d',
                  borderRadius: 8,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              />
              <Bar yAxisId="left" dataKey="conversions" fill="url(#campaignConvGradient)" name="Conversions" />
              <Bar yAxisId="right" dataKey="roi" fill="url(#campaignRoiGradient)" name="ROI %" />
              <defs>
                <linearGradient id="campaignConvGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
                <linearGradient id="campaignRoiGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
