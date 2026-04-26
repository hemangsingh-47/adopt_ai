import React from 'react';
import { RefreshCw, MoreVertical, Layers, Database } from 'lucide-react';

const SegmentItem = ({ segment }) => {
  const isMeta = segment.platform === 'Meta Ads';
  const Icon = isMeta ? Layers : Database; // Simplified icons for platforms

  return (
    <div className="segment-item">
      <div className="segment-icon-wrapper">
        <Icon size={20} className={isMeta ? 'text-purple' : 'text-blue'} />
      </div>
      
      <div className="segment-info">
        <div className="segment-title-wrapper">
          <h3 className="segment-title">{segment.name}</h3>
          {segment.isOptimized && <span className="badge-ai-optimized">AI OPTIMIZED</span>}
        </div>
        <div className="segment-meta">
          <span className="segment-platform">
            <Icon size={12} className="meta-icon" /> {segment.platform}
          </span>
          <span className="meta-dot">•</span>
          <span className="segment-id">ID: {segment.id}</span>
        </div>
      </div>

      <div className="segment-metrics">
        <div className="segment-metric">
          <span className="metric-label">EST. SIZE</span>
          <span className="metric-value">{segment.size}</span>
        </div>
        <div className="segment-metric">
          <span className="metric-label">CONV. RATE</span>
          <span className={`metric-value ${parseFloat(segment.conversionRate) > 3 ? 'text-green' : 'text-red'}`}>
            {segment.conversionRate}
          </span>
        </div>
      </div>

      <div className="segment-actions">
        <button className="icon-btn" title="Sync">
          <RefreshCw size={16} />
        </button>
        <button className="icon-btn" title="More">
          <MoreVertical size={16} />
        </button>
      </div>
    </div>
  );
};

export default SegmentItem;
