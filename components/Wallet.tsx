import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ArrowUpRight, ArrowDownLeft, Wallet as WalletIcon } from 'lucide-react';
import { RECENT_TRANSACTIONS } from '../constants';

const data = [
  { name: 'Dining', value: 4500, color: '#f59e0b' },
  { name: 'Transport', value: 2100, color: '#10b981' },
  { name: 'Attractions', value: 3200, color: '#3b82f6' },
  { name: 'Shopping', value: 1500, color: '#ec4899' },
];

export const Wallet: React.FC = () => {
  return (
    <div className="p-6 space-y-6 h-full overflow-y-auto">
      <h1 className="text-2xl font-bold text-white">Travel Wallet</h1>

      {/* Cards Scroll */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
         {/* Main Card */}
         <div className="w-72 h-44 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-5 flex flex-col justify-between shrink-0 shadow-lg border border-white/10 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <div className="flex justify-between items-start z-10">
                <span className="text-indigo-200 text-sm font-medium">FoTI Virtual Card</span>
                <WalletIcon className="text-indigo-300" size={20} />
            </div>
            <div className="z-10">
                <span className="text-2xl font-bold text-white tracking-widest block mb-1">•••• 8821</span>
                <span className="text-indigo-300 text-xs">Expires 12/28</span>
            </div>
            <div className="flex justify-between items-end z-10">
                <span className="text-white font-medium">ALEX TRAVELER</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
            </div>
         </div>

         {/* Local Rail Card */}
         <div className="w-72 h-44 bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-2xl p-5 flex flex-col justify-between shrink-0 shadow-lg border border-white/10">
            <div className="flex justify-between items-start">
                <span className="text-emerald-200 text-sm font-medium">M-Pesa Link</span>
                <div className="bg-white/10 p-1 rounded"><ArrowUpRight className="text-emerald-300" size={16} /></div>
            </div>
            <div>
                <span className="text-3xl font-bold text-white block mb-1">KES 4,200</span>
                <span className="text-emerald-300 text-xs">Available Local Balance</span>
            </div>
         </div>
      </div>

      {/* Analytics */}
      <div className="bg-stone-800 rounded-3xl p-6 border border-white/5">
        <h3 className="text-lg font-bold text-white mb-4">Spend Breakdown</h3>
        <div className="h-48 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#292524', border: 'none', borderRadius: '8px', color: '#fff' }}
                        itemStyle={{ color: '#fff' }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="grid grid-cols-2 gap-3 mt-2">
            {data.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-gray-400 text-sm">{item.name}</span>
                </div>
            ))}
        </div>
      </div>

      {/* Savings Highlight */}
      <div className="bg-gradient-to-r from-savanna-accent/20 to-savanna-accent/5 border border-savanna-accent/30 rounded-2xl p-4 flex items-center gap-4">
        <div className="w-10 h-10 bg-savanna-accent rounded-full flex items-center justify-center text-white font-bold">
            $
        </div>
        <div>
            <h4 className="text-white font-bold text-sm">You've saved $14.50</h4>
            <p className="text-savanna-100/60 text-xs">By using FoTI FX rates vs. Airport kiosks.</p>
        </div>
      </div>
    </div>
  );
};
