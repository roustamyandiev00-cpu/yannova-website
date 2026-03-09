import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Contact - Gratis Offerte Aanvragen",
  description: "Neem contact op voor een gratis offerte of advies. Reactie binnen 24 uur. Bereikbaar via telefoon, email en WhatsApp. Actief in Antwerpen en omgeving.",
  path: "/contact",
  keywords: [
    "contact yannova",
    "offerte aanvragen",
    "gratis opmeting",
    "renovatie antwerpen contact",
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
