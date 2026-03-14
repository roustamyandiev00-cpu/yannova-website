import { Metadata } from 'next';
import ShopAdmin from './ShopAdmin';

export const metadata: Metadata = {
  title: 'Shop Beheer | Admin',
  description: 'Beheer producten en bestellingen',
};

export default function ShopAdminPage() {
  return <ShopAdmin />;
}
