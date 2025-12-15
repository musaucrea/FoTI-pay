import { Merchant, PaymentMethod, Transaction, ExchangeRate } from './types';

export const MOCK_MERCHANTS: Merchant[] = [
  {
    id: '1',
    name: 'Mama Oliech Restaurant',
    category: 'Dining',
    rating: 4.8,
    isVerified: true,
    location: 'Kilimani, Nairobi',
    imageUrl: 'https://picsum.photos/400/300',
    description: 'Authentic Kenyan cuisine. Famous for whole Tilapia.',
    paymentMethods: [PaymentMethod.MPESA, PaymentMethod.CARD, PaymentMethod.WALLET],
    ecoFriendly: true,
  },
  {
    id: '2',
    name: 'Maasai Market Artisan',
    category: 'Shopping',
    rating: 4.5,
    isVerified: true,
    location: 'CBD, Nairobi',
    imageUrl: 'https://picsum.photos/401/300',
    description: 'Handcrafted beadwork and fabrics directly from artisans.',
    paymentMethods: [PaymentMethod.MPESA, PaymentMethod.WALLET],
  },
  {
    id: '3',
    name: 'Nairobi National Park Gate',
    category: 'Attraction',
    rating: 4.9,
    isVerified: true,
    location: 'Langata Rd',
    imageUrl: 'https://picsum.photos/402/300',
    description: 'The only wildlife capital in the world.',
    paymentMethods: [PaymentMethod.CARD, PaymentMethod.APPLE_PAY],
    ecoFriendly: true,
  }
];

export const RECENT_TRANSACTIONS: Transaction[] = [
  {
    id: 't1',
    merchantName: 'Java House Coffee',
    amountLocal: 450,
    currencyLocal: 'KES',
    amountHome: 3.50,
    currencyHome: 'USD',
    date: 'Today, 9:30 AM',
    category: 'Dining',
    location: 'Nairobi',
  },
  {
    id: 't2',
    merchantName: 'Uber Ride',
    amountLocal: 850,
    currencyLocal: 'KES',
    amountHome: 6.60,
    currencyHome: 'USD',
    date: 'Yesterday, 8:15 PM',
    category: 'Transport',
    location: 'Nairobi',
  },
  {
    id: 't3',
    merchantName: 'Karen Blixen Museum',
    amountLocal: 1200,
    currencyLocal: 'KES',
    amountHome: 9.30,
    currencyHome: 'USD',
    date: 'Yesterday, 2:00 PM',
    category: 'Attraction',
    location: 'Karen',
  }
];

export const FX_RATES: ExchangeRate = {
  from: 'USD',
  to: 'KES',
  rate: 129.50,
  lastUpdated: 'Live'
};
