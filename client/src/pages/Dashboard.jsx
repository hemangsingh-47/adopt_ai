import React from 'react';
import { Calendar, MoreHorizontal } from 'lucide-react';
import KpiGrid from '../components/KpiGrid';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Overview</h1>
          <p className="dashboard-subtitle">Real-time performance metrics and AI optimizations.</p>
        </div>
        <button className="date-picker-btn">
          Last 30 Days <Calendar size={14} />
        </button>
      </div>

      {/* KPI Grid */}
      <KpiGrid />

      {/* Charts Row */}
      <div className="charts-row">
        <div className="chart-container flex-2">
          <div className="chart-header">
            <h3>Spend & Efficiency Over Time</h3>
            <MoreHorizontal size={16} className="text-muted" />
          </div>
          <div className="chart-content">
            <LineChart />
          </div>
        </div>

        <div className="chart-container flex-1">
          <div className="chart-header">
            <h3>Click-Through Rate (CTR) by Audience</h3>
            <MoreHorizontal size={16} className="text-muted" />
          </div>
          <div className="chart-content">
            <BarChart />
          </div>
        </div>
      </div>

      {/* Table Row */}
      <div className="table-container">
        <div className="table-header-box">
          <h3>Active Campaigns</h3>
          <button className="btn-outline-sm">View All</button>
        </div>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>CAMPAIGN NAME</th>
              <th>STATUS</th>
              <th>DAILY BUDGET</th>
              <th>SPEND</th>
              <th>ROAS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="campaign-name">
                  <span className="status-dot green"></span>
                  Q4 Retargeting - High Intent
                </div>
              </td>
              <td><span className="badge learning">Learning</span></td>
              <td>$500.00</td>
              <td>$342.10</td>
              <td className="text-green">3.2x</td>
            </tr>
            <tr>
              <td>
                <div className="campaign-name">
                  <span className="status-dot purple"></span>
                  Lookalike Prospecting v2
                </div>
              </td>
              <td><span className="badge optimized">Optimized</span></td>
              <td>$1,200.00</td>
              <td>$1,150.00</td>
              <td className="text-purple">4.8x</td>
            </tr>
            <tr>
              <td>
                <div className="campaign-name">
                  <span className="status-dot gray"></span>
                  Brand Awareness - Top of Funnel
                </div>
              </td>
              <td><span className="badge paused">Paused</span></td>
              <td>$200.00</td>
              <td>$0.00</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
