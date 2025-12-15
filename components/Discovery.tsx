import React from 'react';
import { Search, Map as MapIcon, Filter, Star, ShieldCheck } from 'lucide-react';
import { MOCK_MERCHANTS } from '../constants';

export const Discovery: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-savanna-900">
      {/* Search Bar */}
      <div className="p-4 bg-savanna-800/50 backdrop-blur sticky top-0 z-10 border-b border-white/5">
        <div className="flex gap-2">
            <div className="flex-1 bg-stone-900 rounded-xl flex items-center px-4 h-12 border border-white/5">
                <Search className="text-gray-400 mr-2" size={20} />
                <input 
                    type="text" 
                    placeholder="Find verified merchants..." 
                    className="bg-transparent text-white w-full outline-none placeholder-gray-500"
                />
            </div>
            <button className="w-12 h-12 bg-stone-800 rounded-xl flex items-center justify-center border border-white/5">
                <Filter className="text-white" size={20} />
            </button>
        </div>
        
        {/* Categories */}
        <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar pb-2">
            {['All', 'Dining', 'Art', 'Tours', 'Transport'].map((cat, i) => (
                <button key={i} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${i === 0 ? 'bg-savanna-accent text-white' : 'bg-stone-800 text-gray-400 border border-white/5'}`}>
                    {cat}
                </button>
            ))}
        </div>
      </div>

      {/* Map Preview (Static Placeholder) */}
      <div className="h-48 w-full bg-stone-800 relative group overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/36.8219,-1.2921,13,0/600x300@2x?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2xsIn0')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 text-sm transform transition hover:scale-105">
                <MapIcon size={16} /> View Full Map
            </button>
        </div>
      </div>

      {/* Merchant List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold text-white">Verified Places Nearby</h2>
            <span className="text-xs text-savanna-accent">FoTI Certified</span>
        </div>

        {MOCK_MERCHANTS.map((merchant) => (
            <div key={merchant.id} className="bg-stone-800 rounded-2xl p-3 flex gap-4 border border-white/5 hover:border-savanna-accent/50 transition-colors">
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 relative">
                    <img src={merchant.imageUrl} alt={merchant.name} className="w-full h-full object-cover" />
                    {merchant.ecoFriendly && (
                        <div className="absolute bottom-0 left-0 right-0 bg-emerald-500/80 text-[10px] text-white text-center py-0.5 font-bold backdrop-blur">
                            Eco-Friendly
                        </div>
                    )}
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                        <div className="flex justify-between items-start">
                            <h3 className="text-white font-bold leading-tight">{merchant.name}</h3>
                            {merchant.isVerified && <ShieldCheck size={16} className="text-emerald-500 shrink-0 ml-1" />}
                        </div>
                        <p className="text-gray-400 text-xs mt-1">{merchant.category} • {merchant.location}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-0.5 rounded text-yellow-500 text-xs font-bold">
                            <Star size={10} fill="currentColor" /> {merchant.rating}
                        </div>
                        <div className="flex -space-x-1">
                            {merchant.paymentMethods.slice(0, 3).map((pm, i) => (
                                <div key={i} className="w-5 h-5 rounded-full bg-stone-700 border border-stone-800 flex items-center justify-center text-[8px] text-white" title={pm}>
                                    {pm[0]}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};
