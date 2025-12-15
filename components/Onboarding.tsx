import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, MapPin, CreditCard } from 'lucide-react';
import { ViewState } from '../types';

interface OnboardingProps {
  onComplete: () => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Karibu Africa",
      desc: "The smartest way to pay, explore, and protect your travel experience.",
      icon: MapPin,
      action: "Get Started"
    },
    {
      title: "Pay Like a Local",
      desc: "Connect your card once. Pay via QR, M-Pesa, or NFC instantly without fees.",
      icon: CreditCard,
      action: "Continue"
    },
    {
      title: "Travel Safe",
      desc: "Verified merchants, transparent FX rates, and travel insights.",
      icon: ShieldCheck,
      action: "Start Exploring"
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const CurrentIcon = steps[step].icon;

  return (
    <div className="h-screen w-full bg-[url('https://images.unsplash.com/photo-1547471080-75411883fc23?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center flex flex-col items-center justify-end relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-savanna-900 via-savanna-900/80 to-transparent"></div>

      <div className="relative z-10 w-full p-8 pb-12 flex flex-col items-start space-y-6">
        <div className="w-16 h-16 bg-savanna-accent rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20">
            <CurrentIcon size={32} className="text-white" />
        </div>
        
        <div className="space-y-2">
            <h1 className="text-4xl font-bold text-white tracking-tight">{steps[step].title}</h1>
            <p className="text-savanna-100/80 text-lg leading-relaxed">{steps[step].desc}</p>
        </div>

        <div className="w-full flex items-center justify-between pt-8">
            <div className="flex space-x-2">
                {steps.map((_, i) => (
                    <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-savanna-accent' : 'w-2 bg-gray-600'}`} />
                ))}
            </div>
            <button 
                onClick={handleNext}
                className="group flex items-center space-x-2 bg-white text-savanna-900 px-6 py-3 rounded-full font-bold hover:bg-savanna-100 transition-colors"
            >
                <span>{steps[step].action}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </div>
  );
};
