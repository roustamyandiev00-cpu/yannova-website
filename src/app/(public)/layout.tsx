import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";
import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("@/components/Chatbot").then(m => ({ default: m.Chatbot })), { ssr: false });
const ExitIntentPopup = dynamic(() => import("@/components/ExitIntentPopup").then(m => ({ default: m.ExitIntentPopup })), { ssr: false });
const CookieConsent = dynamic(() => import("@/components/CookieConsent").then(m => ({ default: m.CookieConsent })), { ssr: false });
const StickyCTA = dynamic(() => import("@/components/StickyCTA").then(m => ({ default: m.StickyCTA })), { ssr: false });

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <Chatbot />
      <ExitIntentPopup />
      <CookieConsent />
      <StickyCTA />
    </CartProvider>
  );
}
