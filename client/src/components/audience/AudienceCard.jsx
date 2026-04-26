import React from 'react';

const AudienceCard = ({ title, value, subtext, isPositive, icon: Icon }) => {
  return (
    <div className="audience-card">
      <div className="audience-card-header">
        <span className="audience-card-title">{title}</span>
        {Icon && <Icon size={16} className="audience-card-icon" />}
      </div>
      <div className="audience-card-body">
        <span className="audience-card-value">{value}</span>
        {subtext && (
          <span className={`audience-card-subtext ${isPositive ? 'positive' : 'neutral'}`}>
            {isPositive && <span className="trend-arrow">↗</span>} {subtext}
          </span>
        )}
      </div>
    </div>
  );
};

export default AudienceCard;
