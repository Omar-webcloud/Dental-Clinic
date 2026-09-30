import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import TreatmentProcess from "@/components/TreatmentProcess";
import BeforeAfter from "@/components/BeforeAfter";
import Doctors from "@/components/Doctors";
import TechnologySection from "@/components/TechnologySection";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import EmergencyCTA from "@/components/EmergencyCTA";
import AppointmentForm from "@/components/AppointmentForm";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Footer from "@/components/Footer";
import { CLINIC_CONFIG } from "@/lib/whatsapp";

export default function Home() {
  // Schema.org structured data for Dentist / Medical Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: CLINIC_CONFIG.name,
    image: "https://evrikadent.com/images/hero-smile.jpg",
    description: "Modern dental clinic offering Carl Zeiss microscope dentistry, 3D computer-guided implants, ceramic veneers, laser teeth whitening, and gentle pain-free care with instant WhatsApp appointment booking.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "742 Evergreen Medical Plaza, Suite 300",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.74844,
      longitude: -73.99344
    },
    telephone: CLINIC_CONFIG.phoneDisplay,
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00"
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "380"
    }
  };

  return (
    <>
      {/* JSON-LD Schema.org for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Main Page Layout */}
      <div className="flex flex-col min-h-screen bg-[#faf8f5] text-[#1a2e26]">
        <Header />
        <main className="flex-1">
          <Hero />
          <TrustBar />
          <Services />
          <WhyChooseUs />
          <TreatmentProcess />
          <BeforeAfter />
          <Doctors />
          <TechnologySection />
          <PricingSection />
          <Testimonials />
          <EmergencyCTA />
          <AppointmentForm />
          <FAQ />
          <ContactSection />
        </main>
        <Footer />
        
        {/* Global Floating Actions */}
        <WhatsAppFloatingButton />
        <MobileStickyCTA />
      </div>
    </>
  );
}
