import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';

const ContextGapChart: React.FC = () => {
  const { t } = useLanguage();

  const data = [
    {
      name: t.chart.labels.reasoning,
      Global_AI: 95,
      Local_Context_AI: 92,
    },
    {
      name: t.chart.labels.dialect,
      Global_AI: 45,
      Local_Context_AI: 88,
    },
    {
      name: t.chart.labels.culture,
      Global_AI: 30,
      Local_Context_AI: 85,
    },
    {
      name: t.chart.labels.regs,
      Global_AI: 40,
      Local_Context_AI: 90,
    },
  ];

  return (
    <section id="context" className="py-24 px-6 bg-obelysk-surface">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-3xl font-bold text-obelysk-text mb-2">{t.chart.title}</h3>
          <div className="h-1 w-20 bg-obelysk-accent mb-6"></div>
          <p className="text-obelysk-muted leading-relaxed">
            {t.chart.p1}
          </p>
          <p className="text-obelysk-muted leading-relaxed">
            {t.chart.p2}
          </p>
        </div>

        <div className="w-full md:w-1/2 h-[400px] bg-obelysk-base rounded-xl p-6 shadow-sm">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" horizontal={false} />
              <XAxis type="number" stroke="#a1a1aa" domain={[0, 100]} hide />
              <YAxis dataKey="name" type="category" stroke="#ffffff" width={110} tick={{fontSize: 11, fill: '#ffffff', fontWeight: 500}} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000000', borderColor: '#000000', color: '#ffffff' }}
                itemStyle={{ color: '#ffffff' }}
                cursor={{fill: '#18181b'}}
              />
              <Legend wrapperStyle={{paddingTop: '20px'}} />
              <Bar dataKey="Global_AI" name={t.chart.legend.global} fill="#525252" barSize={15} radius={[0, 4, 4, 0]} />
              <Bar dataKey="Local_Context_AI" name={t.chart.legend.local} fill="#ffffff" barSize={15} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </section>
  );
};

export default ContextGapChart;