import React from 'react';
import { Bell, MapPin, TrendingUp, Shield } from 'lucide-react';
import { RECENT_TRANSACTIONS, FX_RATES } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
            <div className="flex items-center space-x-1 text-savanna-accent text-sm font-medium uppercase tracking-wider">
                <MapPin size={14} />
                <span>Nairobi, Kenya</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Karibu, Alex</h1>
        </div>
        <div className="relative p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
            <Bell size={20} className="text-white" />
            <div className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-savanna-900"></div>
        </div>
      </div>

      {/* Balance / FX Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-6 border border-white/5 shadow-xl">
        {/* Background decorative blob */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-savanna-accent/10 rounded-full blur-3xl"></div>
        
        <div className="flex justify-between items-start mb-6">
            <div>
                <span className="text-gray-400 text-sm">Travel Budget Remaining</span>
                <div className="text-3xl font-bold text-white mt-1">$1,240.50</div>
                <div className="text-emerald-500 text-xs font-medium flex items-center mt-1">
                    <TrendingUp size={12} className="mr-1" />
                    +2.4% vs planned
                </div>
            </div>
            <div className="bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <span className="text-emerald-400 text-xs font-bold">Safe Mode ON</span>
            </div>
        </div>

        <div className="bg-black/20 rounded-xl p-3 flex justify-between items-center backdrop-blur-sm border border-white/5">
             <div className="flex items-center space-x-2">
                <img src="https://flagcdn.com/w40/us.png" alt="USD" className="w-6 h-6 rounded-full object-cover" />
                <span className="text-sm font-bold">1 USD</span>
             </div>
             <span className="text-gray-500 text-xs">=</span>
             <div className="flex items-center space-x-2">
                <img src="https://flagcdn.com/w40/ke.png" alt="KES" className="w-6 h-6 rounded-full object-cover" />
                <span className="text-sm font-bold text-savanna-accent">{FX_RATES.rate} KES</span>
             </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4">
        {[
            { label: 'Top Up', icon: 'PLUS' },
            { label: 'Split', icon: 'USERS' },
            { label: 'eSIM', icon: 'WIFI' },
            { label: 'Safety', icon: 'SHIELD' }
        ].map((action, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
                <div className="w-14 h-14 bg-stone-800 rounded-2xl flex items-center justify-center border border-white/5 hover:bg-stone-700 transition-colors cursor-pointer">
                    {action.icon === 'PLUS' && <span className="text-2xl text-savanna-accent">+</span>}
                    {action.icon === 'SHIELD' && <Shield size={20} className="text-white" />}
                    {action.icon === 'WIFI' && <span className="font-bold text-xs">eSIM</span>}
                    {action.icon === 'USERS' && <span className="font-bold text-xs">Split</span>}
                </div>
                <span className="text-xs text-gray-400">{action.label}</span>
            </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div>
        <div className="flex justify-between items-end mb-4">
            <h2 className="text-lg font-bold text-white">Recent Activity</h2>
            <button className="text-savanna-accent text-sm font-medium">See All</button>
        </div>
        <div className="space-y-4">
            {RECENT_TRANSACTIONS.map((tx) => (
                <div key={tx.id} className="flex justify-between items-center bg-stone-800/50 p-4 rounded-xl border border-white/5">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center text-lg">
                            {tx.category === 'Dining' ? '☕️' : tx.category === 'Transport' ? '🚕' : '🦁'}
                        </div>
                        <div>
                            <div className="font-bold text-white text-sm">{tx.merchantName}</div>
                            <div className="text-xs text-gray-400">{tx.date}</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="font-bold text-white text-sm">
                            -{tx.currencyLocal} {tx.amountLocal}
                        </div>
                        <div className="text-xs text-gray-500">
                            ${tx.amountHome.toFixed(2)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
