import type { Metadata } from "next";
import ThankYouPageClient from "./ThankYouPageClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// SEO metadata
export const metadata: Metadata = {
  title: "Thank You | ADL99 Cybersecurity",
  description: "Thank you for contacting ADL99 Cybersecurity. We've received your enquiry and will be in touch shortly.",
  robots: "noindex, nofollow",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ThankYouPageClient />
      <Footer />
    </div>
  );
}
