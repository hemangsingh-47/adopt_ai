import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const dummyData = [
  { name: 'Gen Z', ctr: 2.1 },
  { name: 'Tech Pro', ctr: 4.2 },
  { name: 'Parents', ctr: 3.0 },
  { name: 'Students', ctr: 2.8 },
  { name: 'Founders', ctr: 3.5 },
];

const BarChart = () => {
  return (
    <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer>
        <RechartsBarChart data={dummyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
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
            cursor={{ fill: 'rgba(124, 58, 237, 0.1)' }}
          />
          <Bar dataKey="ctr" radius={[4, 4, 0, 0]}>
            {dummyData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.name === 'Tech Pro' ? '#7c3aed' : '#334155'} />
            ))}
          </Bar>
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
