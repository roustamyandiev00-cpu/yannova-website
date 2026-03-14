// Shop types voor ramen & deuren onderhoud producten

export type ProductCategory = 
  | 'onderhoud-reiniging'
  | 'tochtwering-isolatie'
  | 'raam-accessoires'
  | 'deur-accessoires'
  | 'bundels';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number; // Voor kortingen
  costPrice?: number; // Inkoopprijs (wholesale)
  margin?: number; // Marge in euro
  marginPercentage?: number; // Marge in percentage
  inStock: boolean;
  stockQuantity?: number;
  images: string[];
  features: string[];
  specifications?: Record<string, string>;
  relatedProducts?: string[]; // Product IDs
  tags: string[];
  brand?: string;
  sku?: string;
  weight?: number; // in gram
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  createdAt: Date;
  updatedAt: Date;
  featured?: boolean;
  bestseller?: boolean;
  bigbuyId?: number; // BigBuy product ID voor sync
  source?: 'manual' | 'bigbuy'; // Bron van het product
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  updatedAt: Date;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      postalCode: string;
      country: string;
    };
  };
  billingAddress?: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentMethod?: string;
  paymentId?: string;
  customerNotes?: string;
  adminNotes?: string;
  trackingNumber?: string;
  trackingUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  paidAt?: Date;
  shippedAt?: Date;
  deliveredAt?: Date;
}

export interface CheckoutFormData {
  // Customer Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Shipping Address
  street: string;
  houseNumber: string;
  city: string;
  postalCode: string;
  country: string;
  
  // Billing Address
  billingDifferent: boolean;
  billingStreet?: string;
  billingHouseNumber?: string;
  billingCity?: string;
  billingPostalCode?: string;
  billingCountry?: string;
  
  // Additional
  notes?: string;
  acceptTerms: boolean;
  newsletter: boolean;
}

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  'onderhoud-reiniging': 'Onderhoud & Reiniging',
  'tochtwering-isolatie': 'Tochtwering & Isolatie',
  'raam-accessoires': 'Raam Accessoires',
  'deur-accessoires': 'Deur Accessoires',
  'bundels': 'Bundels & Sets'
};
