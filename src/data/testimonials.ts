export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatarText: string;
  rating: number;
  treatment: string;
  doctor: string;
  date: string;
  quote: string;
  verified: boolean;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "review-1",
    name: "Alexander M.",
    location: "New York, NY",
    avatarText: "AM",
    rating: 5,
    treatment: "Dental Implants & Zirconia Crown",
    doctor: "Dr. Michael Vance",
    date: "2 weeks ago",
    quote: "I put off getting an implant for 3 years because I was terrified of dental surgery. Dr. Vance and his team changed everything. The 3D scan and microscope precision meant I felt zero pain during the procedure, and my new tooth feels completely natural.",
    verified: true,
  },
  {
    id: "review-2",
    name: "Victoria S.",
    location: "Brooklyn, NY",
    avatarText: "VS",
    rating: 5,
    treatment: "Ceramic Veneers & Smile Makeover",
    doctor: "Dr. Sarah Jenkins",
    date: "1 month ago",
    quote: "Dr. Jenkins showed me a digital 3D preview of my smile before touching anything. The veneers look so translucent and authentic that people simply tell me my smile looks radiant without realizing I had cosmetic dentistry done. Booking via WhatsApp was effortless!",
    verified: true,
  },
  {
    id: "review-3",
    name: "David K.",
    location: "Manhattan, NY",
    avatarText: "DK",
    rating: 5,
    treatment: "Microscope Root Canal",
    doctor: "Dr. Elena Rostova",
    date: "3 weeks ago",
    quote: "I arrived with intense throbbing tooth pain on a Thursday afternoon. Dr. Elena saw me right away and treated the root canal under the Zeiss microscope. Absolutely painless and the clinic feels more like a boutique hotel than a dental office.",
    verified: true,
  },
  {
    id: "review-4",
    name: "Emily R.",
    location: "Queens, NY",
    avatarText: "ER",
    rating: 5,
    treatment: "Laser Teeth Whitening & Hygiene Spa",
    doctor: "Dr. Sarah Jenkins",
    date: "2 months ago",
    quote: "My teeth were stained from years of espresso. In just 45 minutes, they were 7 shades whiter with zero sensitivity. The AirFlow cleaning was warm and relaxing. This is now our whole family's dental clinic.",
    verified: true,
  },
  {
    id: "review-5",
    name: "Marcus T.",
    location: "Jersey City, NJ",
    avatarText: "MT",
    rating: 5,
    treatment: "Clear Aligners",
    doctor: "Dr. Sarah Jenkins",
    date: "3 months ago",
    quote: "The team at Evrika Dent made the entire aligner process seamless. WhatsApp support was always super responsive whenever I had questions between checkups. My smile is completely straight now.",
    verified: true,
  }
];
