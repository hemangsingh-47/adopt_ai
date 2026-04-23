import React from 'react';
import { Calendar, MoreHorizontal, ArrowUpRight, ArrowRight, Wallet, Eye, MousePointerClick, Activity, CheckCircle2 } from 'lucide-react';

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
      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-header">
            <span>Total Spend</span>
            <Wallet size={14} className="kpi-icon" />
          </div>
          <div className="kpi-value">$42,850</div>
          <div className="kpi-trend positive">
            <ArrowUpRight size={14} /> 12.5% vs last period
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-header">
            <span>Impressions</span>
            <Eye size={14} className="kpi-icon" />
          </div>
          <div className="kpi-value">4.2M</div>
          <div className="kpi-trend positive">
            <ArrowUpRight size={14} /> 8.1% vs last period
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-header">
            <span>Clicks</span>
            <MousePointerClick size={14} className="kpi-icon" />
          </div>
          <div className="kpi-value">125.4K</div>
          <div className="kpi-trend positive">
            <ArrowUpRight size={14} /> 14.2% vs last period
          </div>
        </div>

        <div className="kpi-card highlight-card">
          <div className="kpi-header">
            <span className="roas-label"><Activity size={14} /> ROAS</span>
            <Wallet size={14} className="kpi-icon" />
          </div>
          <div className="kpi-value">4.8x</div>
          <div className="kpi-trend positive">
            <ArrowUpRight size={14} /> 22.4% vs last period
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-header">
            <span>Conversions</span>
            <CheckCircle2 size={14} className="kpi-icon" />
          </div>
          <div className="kpi-value">8,240</div>
          <div className="kpi-trend neutral">
            <ArrowRight size={14} /> 0.5% vs last period
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="charts-row">
        <div className="chart-container flex-2">
          <div className="chart-header">
            <h3>Spend & Efficiency Over Time</h3>
            <MoreHorizontal size={16} className="text-muted" />
          </div>
          {/* Chart Placeholder matching Figma visual */}
          <div className="chart-placeholder line-chart">
            <svg viewBox="0 0 400 150" className="mock-line" preserveAspectRatio="none">
              <path d="M0,130 C100,100 150,110 250,50 C300,20 350,20 400,30" fill="none" stroke="#7c3aed" strokeWidth="4" />
              <circle cx="250" cy="50" r="4" fill="#7c3aed" />
              <circle cx="400" cy="30" r="4" fill="#7c3aed" />
            </svg>
            <div className="axis-y">
              <span>$5k</span>
              <span>$2.5k</span>
              <span>$0</span>
            </div>
            <div className="axis-x">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        <div className="chart-container flex-1">
          <div className="chart-header">
            <h3>Click-Through Rate (CTR) by Audience</h3>
            <MoreHorizontal size={16} className="text-muted" />
          </div>
          {/* Chart Placeholder matching Figma visual */}
          <div className="chart-placeholder bar-chart">
            <div className="bars-container">
              <div className="bar-wrapper"><div className="bar empty" style={{height: '30%'}}></div><span>Gen Z</span></div>
              <div className="bar-wrapper"><div className="bar active" style={{height: '70%'}}><span className="bar-label">4.2%</span></div><span className="text-active">Tech Pro</span></div>
              <div className="bar-wrapper"><div className="bar empty" style={{height: '40%'}}></div><span>Parents</span></div>
              <div className="bar-wrapper"><div className="bar empty" style={{height: '35%'}}></div><span>Students</span></div>
              <div className="bar-wrapper"><div className="bar empty" style={{height: '50%'}}></div><span>Founders</span></div>
            </div>
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
