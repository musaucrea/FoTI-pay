export enum PaymentMethod {
  CARD = 'Card',
  MPESA = 'M-Pesa',
  WALLET = 'FoTI Wallet',
  APPLE_PAY = 'Apple Pay'
}

export interface Merchant {
  id: string;
  name: string;
  category: string;
  rating: number;
  isVerified: boolean; // Trust signal
  location: string;
  imageUrl: string;
  description: string;
  paymentMethods: PaymentMethod[];
  ecoFriendly?: boolean;
}

export interface Transaction {
  id: string;
  merchantName: string;
  amountLocal: number;
  currencyLocal: string;
  amountHome: number;
  currencyHome: string;
  date: string;
  category: string;
  location: string;
}

export interface ExchangeRate {
  from: string;
  to: string;
  rate: number;
  lastUpdated: string;
}

export type ViewState = 'onboarding' | 'home' | 'scan' | 'discovery' | 'wallet';
