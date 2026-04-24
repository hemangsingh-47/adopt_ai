import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

const dummyData = [
  { name: 'Mon', spend: 3200, efficiency: 2100 },
  { name: 'Tue', spend: 2800, efficiency: 2400 },
  { name: 'Wed', spend: 4100, efficiency: 3200 },
  { name: 'Thu', spend: 3700, efficiency: 2800 },
  { name: 'Fri', spend: 4800, efficiency: 3800 },
  { name: 'Sat', spend: 5200, efficiency: 4200 },
  { name: 'Sun', spend: 4900, efficiency: 3900 },
];

const LineChart = () => {
  return (
    <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer>
        <AreaChart data={dummyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2d2d3d" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 12 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 12 }} 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e1e2d', border: 'none', borderRadius: '8px', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
          />
          <Area 
            type="monotone" 
            dataKey="spend" 
            stroke="#7c3aed" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorSpend)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
