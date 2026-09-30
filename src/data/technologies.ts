export interface TechnologyItem {
  id: string;
  title: string;
  brand: string;
  description: string;
  benefit: string;
  badge: string;
  iconName: string;
}

export const TECHNOLOGIES_DATA: TechnologyItem[] = [
  {
    id: "zeiss-microscope",
    title: "Carl Zeiss Optical Operating Microscopes",
    brand: "Carl Zeiss (Germany)",
    description: "Provides up to 25x crystal magnification and surgical LED fiber optics to detect micro-structures invisible to the naked eye.",
    benefit: "Saves teeth that would otherwise be pulled and ensures 100% thorough root disinfection.",
    badge: "25x Optical Zoom",
    iconName: "Eye"
  },
  {
    id: "digital-milling",
    title: "In-House CAD/CAM Digital Milling Center",
    brand: "Dentsply Sirona (Germany)",
    description: "Our in-house 5-axis robotic milling lab cuts ultra-precise ceramic crowns and veneers from solid zirconia and E.max blocks in hours.",
    benefit: "Same-day permanent ceramic crowns without messy putty impressions or weeks of temporary teeth.",
    badge: "5-Axis Precision",
    iconName: "Cpu"
  },
  {
    id: "3d-ct-scanner",
    title: "Low-Dose 3D Cone Beam CT Scanner",
    brand: "Planmeca (Finland)",
    description: "Ultra-low radiation 3D volumetric imaging delivering sub-millimeter anatomical bone mapping for 100% safe surgical planning.",
    benefit: "Eliminates guesswork, prevents nerve damage, and allows virtual implant simulation before surgery.",
    badge: "Ultra-Low Radiation",
    iconName: "Scan"
  },
  {
    id: "pain-free-anesthesia",
    title: "Computerized STA Wand Anesthesia",
    brand: "Milestone Scientific (USA)",
    description: "Microprocessor-controlled pressure injection that delivers anesthetic below the pain-perception threshold.",
    benefit: "Completely painless numbing with no numb lips or face drooping after the appointment.",
    badge: "100% Pain-Free",
    iconName: "Shield"
  }
];

export interface PricingCategory {
  category: string;
  description: string;
  items: {
    service: string;
    details: string;
    price: string;
    unit?: string;
  }[];
}

export const PRICING_DATA: PricingCategory[] = [
  {
    category: "Diagnostics & Prevention",
    description: "Comprehensive initial diagnostics with 3D digital imaging",
    items: [
      { service: "Comprehensive Consultation + 3D Oral Scan", details: "Includes doctor examination & personalized plan", price: "Free with treatment", unit: "/ session" },
      { service: "3D Cone Beam Computed Tomography (CBCT)", details: "Full jaw 3D high-resolution scan", price: "$65", unit: "/ scan" },
      { service: "Swiss AirFlow Spa Hygiene & Tartar Removal", details: "Heated water + fine erythritol remineralization", price: "$95", unit: "/ session" },
    ]
  },
  {
    category: "Implantology & Surgery",
    description: "Permanent replacement with Swiss titanium/zirconia systems",
    items: [
      { service: "Premium Swiss Titanium Implant (Straumann)", details: "Includes surgical guide + healing abutment", price: "from $750", unit: "/ unit" },
      { service: "All-on-4 Full Arch Restoration", details: "Full jaw teeth in 1 day with fixed bridge", price: "from $3,800", unit: "/ jaw" },
      { service: "Atraumatic Piezosurgery Wisdom Extraction", details: "Ultrasonic nerve-safe removal", price: "from $160", unit: "/ tooth" },
    ]
  },
  {
    category: "Aesthetics & Orthodontics",
    description: "Flawless smiles designed around your natural facial features",
    items: [
      { service: "E.max Ultra-Thin Porcelain Veneer", details: "Custom crafted in our in-house milling lab", price: "from $420", unit: "/ tooth" },
      { service: "Laser Teeth Whitening (Cold LED)", details: "Up to 8 shades lighter in 45 mins", price: "$180", unit: "/ session" },
      { service: "Clear Invisible Orthodontic Aligners", details: "Includes 3D outcome simulation video", price: "from $1,200", unit: "/ full course" },
    ]
  },
  {
    category: "Therapy & Tooth Preservation",
    description: "Microscopic precision root canals and aesthetic biological restorations",
    items: [
      { service: "Carl Zeiss Microscope Root Canal Therapy", details: "3D warm gutta-percha hermetic sealing", price: "from $220", unit: "/ tooth" },
      { service: "Aesthetic Composite Enamel Restoration", details: "Multi-layered natural light shading", price: "from $85", unit: "/ surface" },
      { service: "Ceramic Inlay / Onlay Restorative Crown", details: "Digitally milled monolithic E.max", price: "from $340", unit: "/ tooth" },
    ]
  }
];
