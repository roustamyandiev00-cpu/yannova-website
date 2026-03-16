import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";
import { Chatbot, ExitIntentPopup, CookieConsent, StickyCTA } from "@/components/ClientOnlyComponents";

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
