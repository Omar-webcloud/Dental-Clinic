export interface ServiceItem {
  id: string;
  title: string;
  category: "all" | "implants" | "cosmetic" | "general" | "orthodontics" | "surgery" | "pediatric";
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  priceFrom: string;
  iconName: string;
  popular?: boolean;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "dental-implants",
    title: "Dental Implants & 3D Navigation",
    category: "implants",
    shortDesc: "Permanent, natural-looking tooth restoration using Swiss & German titanium/zirconia systems with lifetime guarantee.",
    fullDesc: "Our surgical suite utilizes computer-guided 3D navigation and high-resolution CBCT scans to place implants with sub-millimeter precision. We restore full chewing power and aesthetics with zero discomfort.",
    benefits: [
      "Computer-guided 3D surgical templates for 100% accuracy",
      "Immediate loading options (New tooth in 1 day)",
      "Premium Swiss Straumann & Nobel Biocare systems",
      "Lifetime official manufacturer warranty"
    ],
    duration: "45 - 60 mins per implant",
    priceFrom: "$750",
    iconName: "ShieldCheck",
    popular: true,
  },
  {
    id: "cosmetic-veneers",
    title: "Ultra-Thin Ceramic Veneers",
    category: "cosmetic",
    shortDesc: "Custom-sculpted porcelain E.max veneers tailored to your facial symmetry for a glowing Hollywood smile.",
    fullDesc: "Designed with Digital Smile Design (DSD) technology, our ultra-thin veneers correct discoloration, minor misalignments, chips, and gaps with minimal enamel prep.",
    benefits: [
      "Digital 3D preview of your new smile before we touch a tooth",
      "Micro-thin E.max porcelain (0.3 - 0.5 mm)",
      "Stain-resistant and natural light translucency",
      "Custom color matching by master ceramists"
    ],
    duration: "2 - 3 appointments",
    priceFrom: "$420",
    iconName: "Sparkles",
    popular: true,
  },
  {
    id: "teeth-whitening",
    title: "Professional Laser Teeth Whitening",
    category: "cosmetic",
    shortDesc: "Safe, non-invasive clinic whitening lightening your smile up to 8 shades in a single relaxing 45-minute session.",
    fullDesc: "We use gentle cold-light LED and laser activation systems with desensitizing minerals that protect enamel while erasing years of coffee, tea, and tobacco stains.",
    benefits: [
      "Up to 8 shades brighter in under 1 hour",
      "Zero enamel damage & advanced anti-sensitivity formula",
      "Includes personalized home maintenance kit",
      "Long-lasting brightness for 12–24 months"
    ],
    duration: "45 mins",
    priceFrom: "$180",
    iconName: "Sun",
    popular: true,
  },
  {
    id: "microscope-endodontics",
    title: "Microscope Root Canal Treatment",
    category: "general",
    shortDesc: "Pain-free root canal therapy performed under Carl Zeiss dental microscopes with 25x magnification.",
    fullDesc: "Treating tooth infections under a high-precision optical microscope allows us to locate micro-canals that standard methods miss, saving teeth that would otherwise need extraction.",
    benefits: [
      "Carl Zeiss optical magnification (25x clarity)",
      "3D warm gutta-percha hermetic sealing",
      "100% painless computerized local anesthesia",
      "Over 98% tooth preservation success rate"
    ],
    duration: "60 - 90 mins",
    priceFrom: "$220",
    iconName: "Microscope",
  },
  {
    id: "clear-aligners",
    title: "Orthodontics & Clear Aligners",
    category: "orthodontics",
    shortDesc: "Discreet teeth straightening with invisible transparent aligners or modern aesthetic ceramic braces.",
    fullDesc: "Say goodbye to traditional bulky metal brackets. Our digital 3D intraoral scanner maps your entire alignment journey from Day 1, allowing you to see your final smile progression in 3D.",
    benefits: [
      "Removable and practically invisible aligners",
      "No food restrictions or gum irritation",
      "Custom 3D treatment simulation video beforehand",
      "Faster results with fewer in-clinic adjustments"
    ],
    duration: "6 - 14 months",
    priceFrom: "$1,200",
    iconName: "Layers",
  },
  {
    id: "general-hygiene",
    title: "Guided Biofilm Therapy & Cleaning",
    category: "general",
    shortDesc: "Gentle Swiss AirFlow dental spa cleaning removing tartar, plaque, and dark stains without scratching enamel.",
    fullDesc: "Complete preventive oral hygiene protocol using warm water ultrasonic scaling and ultra-fine erythritol powder. Painless, refreshing, and critical for healthy gums.",
    benefits: [
      "Pain-free AirFlow with heated water stream",
      "Eliminates harmful oral bacteria and bio-film",
      "Mineral remineralization enamel glaze",
      "Recommended every 6 months for oral health"
    ],
    duration: "40 mins",
    priceFrom: "$95",
    iconName: "HeartPulse",
  },
  {
    id: "wisdom-teeth-surgery",
    title: "Gentle Oral & Wisdom Tooth Surgery",
    category: "surgery",
    shortDesc: "Atraumatic wisdom tooth removal and bone grafting performed with piezosurgery ultrasound for swift recovery.",
    fullDesc: "Our oral surgeons utilize ultrasonic piezosurgical instruments that only cut hard tissue while leaving sensitive nerves and soft tissue completely untouched, minimizing swelling.",
    benefits: [
      "Ultrasonic atraumatic extraction method",
      "PRP / PRF plasma healing accelerators",
      "Sedation / sleep dentistry options available",
      "Comfortable and fast recovery"
    ],
    duration: "30 - 45 mins",
    priceFrom: "$160",
    iconName: "Activity",
  },
  {
    id: "pediatric-dentistry",
    title: "Gentle Children's Dentistry",
    category: "pediatric",
    shortDesc: "Playful, stress-free dental visits for toddlers and children in a friendly, comfortable setting.",
    fullDesc: "We build positive dental memories for your little ones. Our pediatric specialists use child-friendly psychological approaches, flavored gels, and painless decay prevention.",
    benefits: [
      "Friendly game-like consultation and cartoon screens",
      "Fissure sealants and fluoridation protection",
      "Early bite check and gentle orthodontic advice",
      "Special bravery gifts for every young hero"
    ],
    duration: "30 mins",
    priceFrom: "$65",
    iconName: "Smile",
  }
];
