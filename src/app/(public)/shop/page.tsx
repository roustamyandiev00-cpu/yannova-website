import { Metadata } from 'next';
import ShopContent from './ShopContent';

export const metadata: Metadata = {
  title: 'Accessoires & Onderhoudsproducten op Aanvraag | Yannova',
  description: 'Onderhoudsproducten en accessoires voor ramen en deuren. Vraag eenvoudig aan via contact — wij leveren mee bij uw project.',
};

export default function ShopPage() {
  return <ShopContent />;
}
