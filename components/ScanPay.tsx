import React, { useState, useEffect } from 'react';
import { Camera, X, Check, ShieldCheck, RefreshCw, Info, Wallet, Smartphone, CreditCard } from 'lucide-react';
import { FX_RATES } from '../constants';

interface ScanPayProps {
  onClose: () => void;
}

type PaymentStep = 'scan' | 'amount' | 'confirm' | 'success';
type PaymentMethodType = 'card' | 'mpesa' | 'wallet' | 'apple';

export const ScanPay: React.FC<ScanPayProps> = ({ onClose }) => {
  const [step, setStep] = useState<PaymentStep>('scan');
  const [amount, setAmount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodType>('card');

  // Simulate scanning
  useEffect(() => {
    if (step === 'scan') {
      const timer = setTimeout(() => {
        setStep('amount');
      }, 2500); // Auto scan after 2.5s for demo
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
    }, 2000);
  };

  const calculateUSD = (kes: string) => {
    const val = parseFloat(kes);
    if (isNaN(val)) return '0.00';
    return (val / FX_RATES.rate).toFixed(2);
  };

  if (step === 'scan') {
    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col">
        {/* Header */}
        <div className="absolute top-0 w-full p-4 flex justify-between items-center z-10 bg-gradient-to-b from-black/80 to-transparent">
            <button onClick={onClose} className="p-2 bg-white/10 rounded-full backdrop-blur">
                <X className="text-white" size={24} />
            </button>
            <span className="text-white font-medium">Scan QR to Pay</span>
            <button className="p-2 bg-white/10 rounded-full backdrop-blur">
                <RefreshCw className="text-white" size={24} />
            </button>
        </div>

        {/* Camera Viewport Simulation */}
        <div className="flex-1 relative bg-stone-900 flex items-center justify-center overflow-hidden">
            {/* Fake Camera Feed */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1000&auto=format&fit=crop')] bg-cover opacity-50 blur-sm"></div>
            
            {/* Scanner Frame */}
            <div className="relative w-64 h-64 border-2 border-savanna-accent rounded-3xl z-10 flex flex-col items-center justify-center shadow-[0_0_100px_rgba(217,119,6,0.5)]">
                 <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-savanna-accent -mt-1 -ml-1 rounded-tl-lg"></div>
                 <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-savanna-accent -mt-1 -mr-1 rounded-tr-lg"></div>
                 <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-savanna-accent -mb-1 -ml-1 rounded-bl-lg"></div>
                 <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-savanna-accent -mb-1 -mr-1 rounded-br-lg"></div>
                 
                 <div className="absolute w-full h-1 bg-savanna-accent/80 animate-pulse-slow top-1/2"></div>
                 <span className="text-white text-xs font-bold bg-black/50 px-3 py-1 rounded-full backdrop-blur mt-32">Scanning...</span>
            </div>
            
            {/* Detected Merchant Badge (Pop up) */}
            <div className="absolute bottom-32 bg-stone-800/90 backdrop-blur border border-white/10 p-3 rounded-xl flex items-center space-x-3 animate-bounce">
                 <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                    <ShieldCheck size={20} className="text-white" />
                 </div>
                 <div>
                    <p className="text-white text-sm font-bold">Verified Merchant</p>
                    <p className="text-gray-400 text-xs">Mama Oliech Restaurant</p>
                 </div>
            </div>
        </div>

        {/* Footer controls */}
        <div className="h-32 bg-black flex items-center justify-center space-x-8 pb-8">
             <div className="flex flex-col items-center text-savanna-accent">
                <div className="w-12 h-12 rounded-full border-2 border-savanna-accent flex items-center justify-center mb-1">
                    <Camera size={20} />
                </div>
                <span className="text-xs">Scan</span>
             </div>
             <div className="flex flex-col items-center text-gray-500">
                <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center mb-1">
                    <span className="text-xs font-bold">123</span>
                </div>
                <span className="text-xs">Enter Code</span>
             </div>
        </div>
      </div>
    );
  }

  if (step === 'amount') {
    return (
      <div className="fixed inset-0 z-50 bg-stone-900 flex flex-col p-6">
        <button onClick={onClose} className="absolute top-6 right-6">
            <X className="text-gray-400" />
        </button>

        <div className="mt-12 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-emerald-500">
                <img src="https://picsum.photos/200" alt="Merchant" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                Mama Oliech Restaurant <ShieldCheck size={18} className="text-emerald-500" />
            </h2>
            <p className="text-gray-400 text-sm">Dining • Kilimani, Nairobi</p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center w-full">
            <label className="text-gray-500 text-sm mb-2">Enter Amount (KES)</label>
            <div className="relative w-full max-w-xs">
                <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0"
                    autoFocus
                    className="w-full bg-transparent text-center text-6xl font-bold text-white placeholder-stone-700 outline-none border-b border-stone-700 pb-2 focus:border-savanna-accent transition-colors"
                />
            </div>
            
            <div className="mt-6 bg-stone-800 p-4 rounded-xl w-full max-w-xs border border-white/5">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">You pay approx.</span>
                    <span className="text-white font-bold">${calculateUSD(amount)} USD</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Rate: 1 USD = {FX_RATES.rate} KES</span>
                    <span className="text-emerald-500 flex items-center gap-1"><Check size={10} /> Fair Rate</span>
                </div>
            </div>
        </div>

        <button 
            disabled={!amount}
            onClick={() => setStep('confirm')}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${amount ? 'bg-savanna-accent text-white hover:bg-amber-600' : 'bg-stone-800 text-stone-600'}`}
        >
            Continue
        </button>
      </div>
    );
  }

  if (step === 'confirm') {
    return (
        <div className="fixed inset-0 z-50 bg-stone-900 flex flex-col h-full">
            <div className="p-6 flex-1 overflow-y-auto no-scrollbar">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Confirm Payment</h2>
                    <button onClick={onClose}>
                        <X className="text-gray-400" />
                    </button>
                </div>
                
                <div className="bg-stone-800 rounded-2xl p-6 border border-white/5 space-y-4 mb-6">
                    <div className="flex justify-between">
                        <span className="text-gray-400">To</span>
                        <span className="text-white font-medium">Mama Oliech Restaurant</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">Amount</span>
                        <span className="text-white font-medium">KES {amount}</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="text-gray-400">Total (USD)</span>
                        <span className="text-white font-bold">${calculateUSD(amount)}</span>
                    </div>
                </div>

                {/* Payment Method Selection */}
                <div className="mb-6">
                    <h3 className="text-gray-400 text-sm mb-3 font-medium">Select Payment Method</h3>
                    <div className="space-y-3">
                        {/* VISA Card */}
                        <button
                            onClick={() => setSelectedMethod('card')}
                            className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${selectedMethod === 'card' ? 'bg-savanna-accent/10 border-savanna-accent shadow-[0_0_15px_rgba(217,119,6,0.1)]' : 'bg-stone-800 border-white/5 hover:bg-stone-700'}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-7 bg-blue-700 rounded flex items-center justify-center text-[10px] font-bold text-white italic shadow-sm">VISA</div>
                                <div className="text-left">
                                    <span className="text-white text-sm font-bold block">FOTI Card</span>
                                    <span className="text-gray-400 text-xs">•••• 4242</span>
                                </div>
                            </div>
                            {selectedMethod === 'card' && <div className="w-5 h-5 rounded-full bg-savanna-accent flex items-center justify-center"><Check size={12} className="text-white"/></div>}
                        </button>

                        {/* M-Pesa */}
                         <button
                            onClick={() => setSelectedMethod('mpesa')}
                            className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${selectedMethod === 'mpesa' ? 'bg-savanna-accent/10 border-savanna-accent shadow-[0_0_15px_rgba(217,119,6,0.1)]' : 'bg-stone-800 border-white/5 hover:bg-stone-700'}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-7 bg-emerald-600 rounded flex items-center justify-center text-[10px] font-bold text-white shadow-sm">M-PESA</div>
                                <div className="text-left">
                                    <span className="text-white text-sm font-bold block">M-Pesa</span>
                                    <span className="text-gray-400 text-xs">Local Mobile Money</span>
                                </div>
                            </div>
                            {selectedMethod === 'mpesa' && <div className="w-5 h-5 rounded-full bg-savanna-accent flex items-center justify-center"><Check size={12} className="text-white"/></div>}
                        </button>

                         {/* FoTI Wallet */}
                         <button
                            onClick={() => setSelectedMethod('wallet')}
                            className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${selectedMethod === 'wallet' ? 'bg-savanna-accent/10 border-savanna-accent shadow-[0_0_15px_rgba(217,119,6,0.1)]' : 'bg-stone-800 border-white/5 hover:bg-stone-700'}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-7 bg-indigo-600 rounded flex items-center justify-center text-white shadow-sm"><Wallet size={16} /></div>
                                <div className="text-left">
                                    <span className="text-white text-sm font-bold block">FoTI Wallet</span>
                                    <span className="text-gray-400 text-xs">Balance: $1,240.50</span>
                                </div>
                            </div>
                            {selectedMethod === 'wallet' && <div className="w-5 h-5 rounded-full bg-savanna-accent flex items-center justify-center"><Check size={12} className="text-white"/></div>}
                        </button>

                        {/* Apple Pay */}
                        <button
                            onClick={() => setSelectedMethod('apple')}
                            className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${selectedMethod === 'apple' ? 'bg-savanna-accent/10 border-savanna-accent shadow-[0_0_15px_rgba(217,119,6,0.1)]' : 'bg-stone-800 border-white/5 hover:bg-stone-700'}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-7 bg-white rounded flex items-center justify-center text-black shadow-sm"><Smartphone size={16} fill="black" /></div>
                                <div className="text-left">
                                    <span className="text-white text-sm font-bold block">Apple Pay</span>
                                    <span className="text-gray-400 text-xs">Default Card</span>
                                </div>
                            </div>
                            {selectedMethod === 'apple' && <div className="w-5 h-5 rounded-full bg-savanna-accent flex items-center justify-center"><Check size={12} className="text-white"/></div>}
                        </button>
                    </div>
                </div>

                {/* Smart Travel Tip */}
                <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-xl flex gap-3 items-start mb-6">
                    <Info className="text-blue-400 shrink-0 mt-0.5" size={18} />
                    <div>
                        <h4 className="text-blue-400 font-bold text-sm mb-1">Cultural Tip</h4>
                        <p className="text-blue-200/80 text-xs leading-relaxed">
                            Tipping is customary in Kenyan restaurants. 10% is standard for good service. Would you like to add a tip?
                        </p>
                        <div className="flex gap-2 mt-3">
                            <button className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">No tip</button>
                            <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">Add 10%</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 bg-stone-900 border-t border-white/5">
                 <button 
                    onClick={handlePay}
                    disabled={isProcessing}
                    className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20"
                >
                    {isProcessing ? 'Processing...' : `Pay with ${selectedMethod === 'card' ? 'Card' : selectedMethod === 'mpesa' ? 'M-Pesa' : selectedMethod === 'wallet' ? 'Wallet' : 'Apple Pay'}`}
                </button>
            </div>
        </div>
    )
  }

  // Success Step
  return (
    <div className="fixed inset-0 z-50 bg-emerald-500 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl animate-bounce">
            <Check size={48} className="text-emerald-500" strokeWidth={4} />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Payment Successful!</h2>
        <p className="text-emerald-100 text-lg mb-8">You paid KES {amount} to Mama Oliech using {selectedMethod === 'card' ? 'Card' : selectedMethod === 'mpesa' ? 'M-Pesa' : selectedMethod === 'wallet' ? 'Wallet' : 'Apple Pay'}.</p>
        
        <div className="bg-white/10 backdrop-blur rounded-xl p-6 w-full max-w-sm border border-white/20 mb-8">
            <h3 className="text-white font-bold mb-2">Travel Memory Created 📸</h3>
            <p className="text-emerald-100 text-sm mb-4">Would you like to attach a photo to this transaction for your travel journal?</p>
            <button className="w-full py-2 bg-white text-emerald-600 font-bold rounded-lg text-sm">
                Add Photo
            </button>
        </div>

        <button onClick={onClose} className="text-white font-bold underline decoration-2 underline-offset-4">
            Done
        </button>
    </div>
  );
};