export interface FAQItem {
  id: string;
  category: "booking" | "treatment" | "implants" | "comfort" | "pricing";
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-booking-1",
    category: "booking",
    question: "How do I book an appointment via WhatsApp?",
    answer: "Booking via WhatsApp takes less than 30 seconds! Simply click any 'Book on WhatsApp' or 'WhatsApp Us' button on our website, or fill in our quick booking form. A formatted message will open directly in your WhatsApp app, and our clinic reception team will immediately reply with available appointment slots that suit your schedule."
  },
  {
    id: "faq-booking-2",
    category: "booking",
    question: "Do I need to make an appointment in advance or do you accept walk-ins?",
    answer: "We recommend scheduling in advance so our doctors can reserve dedicated time for your comprehensive consultation. However, we prioritize emergency dental pain and urgent walk-in cases every day during operating hours. If you are experiencing acute pain, message our WhatsApp emergency line immediately for swift assistance."
  },
  {
    id: "faq-comfort-1",
    category: "comfort",
    question: "Will the dental treatment hurt?",
    answer: "No. Pain-free dentistry is our foundational principle. We use computerized STA (Single Tooth Anesthesia) systems, ultra-fine microscopic needles, and pre-numbing fruit-flavored gels so you won't even feel the injection. During procedures like root canals or implant placements, patients feel only gentle vibration and zero pain."
  },
  {
    id: "faq-implants-1",
    category: "implants",
    question: "How long does a dental implant procedure take and how long do they last?",
    answer: "The surgical placement of a single implant typically takes between 40 to 60 minutes. In many cases, we can attach an aesthetic temporary tooth on the exact same day ('Immediate Loading'). With proper oral hygiene, our premium Swiss Straumann and Nobel Biocare implants have a 99%+ survival rate and are engineered to last for a lifetime."
  },
  {
    id: "faq-treatment-1",
    category: "treatment",
    question: "What is microscope dentistry and why is it superior?",
    answer: "Treating teeth under a Carl Zeiss dental microscope provides up to 25x optical magnification and coaxial shadowless illumination. This allows our doctors to identify hidden root canals, detect micro-cracks before they cause tooth loss, and remove only decayed tissue while preserving maximum healthy tooth enamel."
  },
  {
    id: "faq-pricing-1",
    category: "pricing",
    question: "Are your prices transparent and do you offer payment plans?",
    answer: "Yes, 100% transparent. Before beginning any dental procedure, we provide a printed and digital personalized treatment plan detailing every single step and fixed cost. There are never any surprise fees. We also offer 0% interest flexible milestone payment plans for orthodontic and implant restorations."
  },
  {
    id: "faq-treatment-2",
    category: "treatment",
    question: "How does teeth whitening work and is it safe for sensitive teeth?",
    answer: "Our laser and cold-light LED whitening gently breaks down stubborn stains within the enamel using active oxygen. We apply an advanced potassium-nitrate remineralizing mineral barrier before and after the session, guaranteeing high brightness with minimal to zero post-treatment sensitivity."
  }
];
