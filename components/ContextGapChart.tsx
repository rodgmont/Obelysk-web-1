import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';

const ContextGapChart: React.FC = () => {
  const { language } = useLanguage();

  const data = [
    {
      name: language === 'en' ? 'Reasoning' : 'Razonamiento',
      value: 92.4,
      isPrimary: true,
      global: 83.3
    },
    {
      name: language === 'en' ? 'Dialect' : 'Dialecto',
      value: 88.9,
      isPrimary: true,
      global: 45.2
    },
    {
      name: language === 'en' ? 'Culture' : 'Cultura',
      value: 86.4,
      isPrimary: true,
      global: 32.1
    },
    {
      name: language === 'en' ? 'Regulation' : 'Regulación',
      value: 95.1,
      isPrimary: true,
      global: 58.5
    },
  ];

  return (
    <div className="w-full bg-zinc-950/50 rounded-lg p-6 md:p-8 border border-zinc-900 my-12">
        <div className="flex justify-between items-end mb-8">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
               Obelysk-1 vs Global SOTA
            </div>
            <div className="flex gap-4 text-xs font-medium">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#8b5cf6]"></div>
                    <span className="text-zinc-300">Obelysk</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-zinc-700"></div>
                    <span className="text-zinc-500">Global</span>
                </div>
            </div>
        </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barGap={8}
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
          >
            <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#a1a1aa', fontSize: 12, fontWeight: 500 }}
                dy={10}
            />
            <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#525252', fontSize: 11 }}
                domain={[0, 100]}
                tickCount={5}
                tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              cursor={{fill: 'transparent'}}
              contentStyle={{ backgroundColor: '#000', borderColor: '#333', color: '#fff', fontSize: '12px' }}
            />
            <Bar dataKey="value" name="Obelysk" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#8b5cf6" />
              ))}
            </Bar>
            <Bar dataKey="global" name="Global" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-g-${index}`} fill="#3f3f46" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContextGapChart;