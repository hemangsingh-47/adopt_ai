import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const KpiCard = ({ title, icon: Icon, labelIcon: LabelIcon, value, trend, isHighlight }) => {
  return (
    <div className={`kpi-card ${isHighlight ? 'highlight-card' : ''}`}>
      <div className="kpi-header">
        {isHighlight && LabelIcon ? (
          <span className="roas-label"><LabelIcon size={14} /> {title}</span>
        ) : (
          <span>{title}</span>
        )}
        <Icon size={14} className="kpi-icon" />
      </div>
      <div className="kpi-value">{value}</div>
      <div className={`kpi-trend ${trend.type}`}>
        {trend.type === 'positive' ? <ArrowUpRight size={14} /> : <ArrowRight size={14} />} {trend.value} vs last period
      </div>
    </div>
  );
};

export default KpiCard;
