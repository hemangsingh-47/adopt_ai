import React from 'react';
import { Wallet, Eye, MousePointerClick, Activity, CheckCircle2 } from 'lucide-react';
import KpiCard from './KpiCard';

const kpiData = [
  {
    id: 1,
    title: 'Total Spend',
    icon: Wallet,
    value: '$42,850',
    trend: { type: 'positive', value: '12.5%' }
  },
  {
    id: 2,
    title: 'Impressions',
    icon: Eye,
    value: '4.2M',
    trend: { type: 'positive', value: '8.1%' }
  },
  {
    id: 3,
    title: 'Clicks',
    icon: MousePointerClick,
    value: '125.4K',
    trend: { type: 'positive', value: '14.2%' }
  },
  {
    id: 4,
    title: 'ROAS',
    icon: Wallet,
    labelIcon: Activity,
    value: '4.8x',
    trend: { type: 'positive', value: '22.4%' },
    isHighlight: true
  },
  {
    id: 5,
    title: 'Conversions',
    icon: CheckCircle2,
    value: '8,240',
    trend: { type: 'neutral', value: '0.5%' }
  }
];

const KpiGrid = () => {
  return (
    <div className="kpi-grid">
      {kpiData.map((kpi) => (
        <KpiCard
          key={kpi.id}
          title={kpi.title}
          icon={kpi.icon}
          labelIcon={kpi.labelIcon}
          value={kpi.value}
          trend={kpi.trend}
          isHighlight={kpi.isHighlight}
        />
      ))}
    </div>
  );
};

export default KpiGrid;
