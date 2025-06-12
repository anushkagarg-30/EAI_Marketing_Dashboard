"use client"

import { TrendingUp, Users, DollarSign, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LeadFunnelChart } from "@/components/lead-funnel-chart"
import { CampaignPerformanceChart } from "@/components/campaign-performance-chart"
import { RevenueAttributionChart } from "@/components/revenue-attribution-chart"
import { CustomerAcquisitionChart } from "@/components/customer-acquisition-chart"
import { DemoConversionChart } from "@/components/demo-conversion-chart"
import { MrrGrowthChart } from "@/components/mrr-growth-chart"
import { useState, useEffect } from 'react';
import { Spinner } from '@/components/ui/spinner';
import { toast } from 'sonner';

export default function EAIDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [metrics, setMetrics] = useState({
    leads: 2847,
    conversion: 18.3,
    cac: 284,
    mrr: 127000,
    mrrGrowth: 18.7,
  });
  const [leadFunnelData, setLeadFunnelData] = useState([
    { name: 'Visitors', value: 15000 },
    { name: 'Leads', value: 2847 },
    { name: 'Qualified Leads', value: 1423 },
    { name: 'Opportunities', value: 711 },
    { name: 'Customers', value: 156 },
  ]);
  const [revenueAttributionData, setRevenueAttributionData] = useState([
    { name: 'Direct Sales', value: 35, revenue: 44500 },
    { name: 'Partner Channel', value: 28, revenue: 35600 },
    { name: 'Digital Marketing', value: 22, revenue: 27940 },
    { name: 'Referrals', value: 10, revenue: 12700 },
    { name: 'Events', value: 5, revenue: 6350 },
  ]);
  const [campaignPerformanceData, setCampaignPerformanceData] = useState([
    { campaign: 'AI Webinar Series', impressions: 45000, clicks: 2340, conversions: 187, roi: 340 },
    { campaign: 'LinkedIn Sponsored', impressions: 32000, clicks: 1890, conversions: 156, roi: 280 },
    { campaign: 'Google Ads', impressions: 28000, clicks: 1650, conversions: 134, roi: 220 },
    { campaign: 'Content Marketing', impressions: 18000, clicks: 1200, conversions: 98, roi: 450 },
    { campaign: 'Email Campaigns', impressions: 15000, clicks: 980, conversions: 89, roi: 380 },
    { campaign: 'Partner Referrals', impressions: 8000, clicks: 560, conversions: 67, roi: 520 },
  ]);
  const [customerAcquisitionData, setCustomerAcquisitionData] = useState([
    { month: 'Jan', cac: 320, ltv: 2400, ratio: 7.5 },
    { month: 'Feb', cac: 298, ltv: 2450, ratio: 8.2 },
    { month: 'Mar', cac: 275, ltv: 2380, ratio: 8.7 },
    { month: 'Apr', cac: 290, ltv: 2520, ratio: 8.7 },
    { month: 'May', cac: 284, ltv: 2580, ratio: 9.1 },
    { month: 'Jun', cac: 267, ltv: 2620, ratio: 9.8 },
  ]);

  // Add a refresh handler
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      // Randomize metrics for demo
      const newMetrics = {
        leads: Math.floor(Math.random() * 2000 + 2000),
        conversion: +(Math.random() * 10 + 10).toFixed(1),
        cac: Math.floor(Math.random() * 200 + 200),
        mrr: Math.floor(Math.random() * 100000 + 80000),
        mrrGrowth: +(Math.random() * 20 + 10).toFixed(1),
      };
      setMetrics(newMetrics);
      setIsLoading(false);
      toast.success('Data refreshed!');
      if (newMetrics.mrrGrowth > 20) {
        toast.success('MRR Growth Alert: MRR growth is above 20%!');
      }
      setLeadFunnelData([
        { name: 'Visitors', value: Math.floor(Math.random() * 5000 + 12000) },
        { name: 'Leads', value: Math.floor(Math.random() * 2000 + 2000) },
        { name: 'Qualified Leads', value: Math.floor(Math.random() * 1000 + 1000) },
        { name: 'Opportunities', value: Math.floor(Math.random() * 500 + 500) },
        { name: 'Customers', value: Math.floor(Math.random() * 100 + 100) },
      ]);
      setRevenueAttributionData([
        { name: 'Direct Sales', value: Math.floor(Math.random() * 20 + 20), revenue: Math.floor(Math.random() * 30000 + 20000) },
        { name: 'Partner Channel', value: Math.floor(Math.random() * 20 + 10), revenue: Math.floor(Math.random() * 20000 + 15000) },
        { name: 'Digital Marketing', value: Math.floor(Math.random() * 20 + 10), revenue: Math.floor(Math.random() * 20000 + 10000) },
        { name: 'Referrals', value: Math.floor(Math.random() * 10 + 5), revenue: Math.floor(Math.random() * 10000 + 5000) },
        { name: 'Events', value: Math.floor(Math.random() * 10 + 2), revenue: Math.floor(Math.random() * 8000 + 2000) },
      ]);
      setCampaignPerformanceData([
        { campaign: 'AI Webinar Series', impressions: Math.floor(Math.random() * 20000 + 30000), clicks: Math.floor(Math.random() * 2000 + 1000), conversions: Math.floor(Math.random() * 100 + 100), roi: Math.floor(Math.random() * 200 + 200) },
        { campaign: 'LinkedIn Sponsored', impressions: Math.floor(Math.random() * 15000 + 20000), clicks: Math.floor(Math.random() * 1500 + 500), conversions: Math.floor(Math.random() * 80 + 80), roi: Math.floor(Math.random() * 200 + 200) },
        { campaign: 'Google Ads', impressions: Math.floor(Math.random() * 15000 + 15000), clicks: Math.floor(Math.random() * 1200 + 400), conversions: Math.floor(Math.random() * 60 + 70), roi: Math.floor(Math.random() * 200 + 200) },
        { campaign: 'Content Marketing', impressions: Math.floor(Math.random() * 10000 + 10000), clicks: Math.floor(Math.random() * 800 + 200), conversions: Math.floor(Math.random() * 40 + 60), roi: Math.floor(Math.random() * 300 + 200) },
        { campaign: 'Email Campaigns', impressions: Math.floor(Math.random() * 8000 + 8000), clicks: Math.floor(Math.random() * 600 + 200), conversions: Math.floor(Math.random() * 30 + 50), roi: Math.floor(Math.random() * 200 + 200) },
        { campaign: 'Partner Referrals', impressions: Math.floor(Math.random() * 4000 + 4000), clicks: Math.floor(Math.random() * 300 + 200), conversions: Math.floor(Math.random() * 20 + 40), roi: Math.floor(Math.random() * 300 + 200) },
      ]);
      setCustomerAcquisitionData([
        { month: 'Jan', cac: Math.floor(Math.random() * 100 + 200), ltv: Math.floor(Math.random() * 1000 + 2000), ratio: +(Math.random() * 3 + 7).toFixed(1) },
        { month: 'Feb', cac: Math.floor(Math.random() * 100 + 200), ltv: Math.floor(Math.random() * 1000 + 2000), ratio: +(Math.random() * 3 + 7).toFixed(1) },
        { month: 'Mar', cac: Math.floor(Math.random() * 100 + 200), ltv: Math.floor(Math.random() * 1000 + 2000), ratio: +(Math.random() * 3 + 7).toFixed(1) },
        { month: 'Apr', cac: Math.floor(Math.random() * 100 + 200), ltv: Math.floor(Math.random() * 1000 + 2000), ratio: +(Math.random() * 3 + 7).toFixed(1) },
        { month: 'May', cac: Math.floor(Math.random() * 100 + 200), ltv: Math.floor(Math.random() * 1000 + 2000), ratio: +(Math.random() * 3 + 7).toFixed(1) },
        { month: 'Jun', cac: Math.floor(Math.random() * 100 + 200), ltv: Math.floor(Math.random() * 1000 + 2000), ratio: +(Math.random() * 3 + 7).toFixed(1) },
      ]);
    }, 1500);
  };

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (metrics.mrrGrowth > 20) {
        toast.success('MRR Growth Alert: MRR growth is above 20%!');
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-7xl mx-auto space-y-6" role="main" aria-label="EAI Marketing Dashboard">
        {/* Header */}
        <div className="text-center space-y-2 py-6 flex flex-col items-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" id="dashboard-title">
            EAI Marketing Analytics
          </h1>
          <p className="text-slate-600 text-lg">Enterprise AI Marketing Performance Dashboard</p>
          <button
            onClick={handleRefresh}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline focus:outline-2 focus:outline-blue-700"
            aria-label="Refresh dashboard data"
          >
            Refresh
          </button>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.leads.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12.5%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <Target className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.conversion}%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+2.1%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CAC</CardTitle>
              <DollarSign className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${metrics.cac}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-600">+5.2%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">MRR</CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${(metrics.mrr / 1000).toFixed(0)}K</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+{metrics.mrrGrowth}%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-4" role="tablist" aria-label="Dashboard Views">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview" role="tab" aria-controls="overview-panel" aria-selected="true" tabIndex={0}>Overview</TabsTrigger>
            <TabsTrigger value="campaigns" role="tab" aria-controls="campaigns-panel" aria-selected="false" tabIndex={0}>Campaigns</TabsTrigger>
            <TabsTrigger value="conversions" role="tab" aria-controls="conversions-panel" aria-selected="false" tabIndex={0}>Conversions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4" role="tabpanel" id="overview-panel" aria-labelledby="overview-tab">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Lead Funnel Analysis</h3>
                <p className="text-sm text-slate-600">Visualizes the conversion journey from visitors to customers, showing the progression and drop-off at each stage of the sales funnel.</p>
                <LeadFunnelChart data={leadFunnelData} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Revenue Attribution</h3>
                <p className="text-sm text-slate-600">Breaks down revenue sources across different channels, helping identify the most profitable marketing channels and their contribution to overall revenue.</p>
                <RevenueAttributionChart data={revenueAttributionData} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Customer Acquisition Trends</h3>
                <p className="text-sm text-slate-600">Tracks Customer Acquisition Cost (CAC) and Lifetime Value (LTV) trends over time, showing the efficiency of marketing spend and customer value.</p>
                <CustomerAcquisitionChart data={customerAcquisitionData} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">MRR Growth Analysis</h3>
                <p className="text-sm text-slate-600">Monitors Monthly Recurring Revenue (MRR) growth patterns, highlighting trends and momentum in subscription revenue.</p>
                <MrrGrowthChart />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-4" role="tabpanel" id="campaigns-panel" aria-labelledby="campaigns-tab">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Campaign Performance Metrics</h3>
                <p className="text-sm text-slate-600">Detailed analysis of marketing campaign performance, including impressions, clicks, conversions, and ROI across different channels.</p>
                <CampaignPerformanceChart data={campaignPerformanceData} />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Revenue Channel Analysis</h3>
                  <p className="text-sm text-slate-600">Distribution of revenue across different marketing channels, helping optimize channel mix and budget allocation.</p>
                  <RevenueAttributionChart data={revenueAttributionData} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Customer Value Metrics</h3>
                  <p className="text-sm text-slate-600">Monthly trends in customer acquisition costs and lifetime value, essential for measuring marketing efficiency.</p>
                  <CustomerAcquisitionChart data={customerAcquisitionData} />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="conversions" className="space-y-4" role="tabpanel" id="conversions-panel" aria-labelledby="conversions-tab">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Demo Conversion Analysis</h3>
                <p className="text-sm text-slate-600">Tracks the effectiveness of demo requests and their conversion to qualified opportunities, measuring sales process efficiency.</p>
                <DemoConversionChart />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Lead Flow Analysis</h3>
                <p className="text-sm text-slate-600">Visual representation of lead progression through the sales funnel, identifying potential bottlenecks and optimization opportunities.</p>
                <LeadFunnelChart data={leadFunnelData} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Revenue Growth Tracking</h3>
                <p className="text-sm text-slate-600">Monitors the growth trajectory of monthly recurring revenue, providing insights into business scalability and momentum.</p>
                <MrrGrowthChart />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center py-6 text-sm text-slate-500">
          <p>EAI Marketing Dashboard • Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}
