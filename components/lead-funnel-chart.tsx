"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Cell, Tooltip, Legend, CartesianGrid, LabelList } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { useRef } from 'react';
import * as htmlToImage from 'html-to-image';

const colors = ["#3b82f6", "#6366f1", "#8b5cf6", "#a855f7", "#c084fc", "#d8b4fe"]

export function LeadFunnelChart({ data }: { data: { name: string; value: number }[] }) {
  const chartRef = useRef<HTMLDivElement>(null);

  const handleExportPNG = async () => {
    if (chartRef.current) {
      const dataUrl = await htmlToImage.toPng(chartRef.current);
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'lead-funnel-chart.png';
      link.click();
    }
  };

  const handleExportCSV = () => {
    const csvRows = [
      ['Stage', 'Value'],
      ...data.map(row => [row.name, row.value]),
    ];
    const csvContent = csvRows.map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'lead-funnel-chart.csv');
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Card className="shadow-lg rounded-xl border-0 bg-white/90">
      <CardHeader>
        <CardTitle id="lead-funnel-title" className="text-xl font-bold text-blue-700">Lead Generation Funnel</CardTitle>
        <CardDescription>Conversion rates through the marketing funnel</CardDescription>
        <div className="flex gap-2 mt-2" role="group" aria-label="Export options">
          <button
            onClick={handleExportPNG}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs focus:outline focus:outline-2 focus:outline-blue-700"
            aria-label="Export Lead Funnel Chart as PNG"
          >
            Export as PNG
          </button>
          <button
            onClick={handleExportCSV}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-xs focus:outline focus:outline-2 focus:outline-green-700"
            aria-label="Export Lead Funnel Chart as CSV"
          >
            Export as CSV
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div
          ref={chartRef}
          role="region"
          aria-labelledby="lead-funnel-title"
          className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg"
        >
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tick={{ fontSize: 14, fill: '#6366f1' }} />
              <YAxis dataKey="name" type="category" tick={{ fontWeight: 600, fontSize: 15, fill: '#3b82f6' }} />
              <Tooltip
                contentStyle={{
                  background: 'rgba(255,255,255,0.95)',
                  border: '1px solid #c7d2fe',
                  borderRadius: 8,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              />
              <Legend wrapperStyle={{ fontWeight: 600, color: '#6366f1' }} />
              <Bar dataKey="value" fill="url(#funnelGradient)">
                <LabelList dataKey="value" position="right" style={{ fontWeight: 700, fill: '#6366f1', fontSize: 16 }} />
              </Bar>
              <defs>
                <linearGradient id="funnelGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
