# EAI Marketing Dashboard

A modern, interactive marketing analytics dashboard built with Next.js and Tailwind CSS. This comprehensive dashboard provides real-time insights into marketing performance, lead generation, revenue attribution, and campaign effectiveness.

## Features

- **Real-time Analytics**: Live marketing metrics visualization with dynamic data refresh
- **Interactive Charts**: Multiple chart types including funnel analysis, revenue attribution, and performance metrics
- **Campaign Tracking**: Detailed analysis of marketing campaign performance across different channels
- **Lead Management**: Complete lead funnel visualization from visitors to customers
- **Revenue Insights**: Revenue attribution breakdown and MRR growth tracking
- **Customer Analytics**: Customer acquisition cost (CAC) and lifetime value (LTV) analysis
- **Responsive Design**: Optimized for all devices and screen sizes

## Live Demo

[View Live Dashboard](https://eaimarketingdashboard.netlify.app/)

## Dashboard Components

### Key Metrics
- **Total Leads**: Track lead generation performance
- **Conversion Rate**: Monitor conversion efficiency
- **Customer Acquisition Cost (CAC)**: Measure marketing spend efficiency
- **Monthly Recurring Revenue (MRR)**: Track subscription revenue growth

### Interactive Charts
1. **Lead Funnel Analysis**: Visualizes the conversion journey from visitors to customers
2. **Revenue Attribution Chart**: Revenue breakdown by marketing channels
3. **Campaign Performance Chart**: Marketing campaign metrics and ROI analysis
4. **Customer Acquisition Chart**: CAC and LTV trends over time
5. **MRR Growth Chart**: Monthly recurring revenue tracking and trends
6. **Demo Conversion Chart**: Demo request conversion effectiveness

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **UI Components**: Custom components with shadcn/ui
- **Charts**: Recharts library for data visualization
- **Icons**: Lucide React for consistent iconography
- **State Management**: React Hooks for local state
- **Notifications**: Sonner for user feedback

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/anushkagarg-30/EAI_Marketing_Dashboard.git
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   └── page.tsx           # Main dashboard page
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   └── charts/           # Chart components
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── styles/               # Global styles
└── public/               # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 