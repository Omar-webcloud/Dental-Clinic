export interface TransformationItem {
  id: string;
  category: "all" | "implants" | "veneers" | "whitening" | "aligners";
  title: string;
  doctor: string;
  duration: string;
  description: string;
  beforeStats: string;
  afterStats: string;
  patientAge: string;
}

export const TRANSFORMATIONS_DATA: TransformationItem[] = [
  {
    id: "case-1",
    category: "veneers",
    title: "10 Upper E.max Ceramic Veneers",
    doctor: "Dr. Sarah Jenkins",
    duration: "2 visits (7 days)",
    description: "Correction of enamel chipping, tetracycline staining, and uneven smile arc. Designed with Digital Smile Design for natural brightness and texture.",
    beforeStats: "Chipped enamel & yellow undertone",
    afterStats: "Bleach-2 shade, flawless symmetry",
    patientAge: "32 years old"
  },
  {
    id: "case-2",
    category: "implants",
    title: "Single Front Tooth Straumann Implant & Zirconia Crown",
    doctor: "Dr. Michael Vance",
    duration: "Same-day immediate crown",
    description: "Traumatic fracture of central incisor restored with immediate computer-guided implant placement and individual custom gum former.",
    beforeStats: "Fractured non-restorable incisor",
    afterStats: "100% natural gum contour & stability",
    patientAge: "28 years old"
  },
  {
    id: "case-3",
    category: "whitening",
    title: "In-Clinic Laser Whitening + AirFlow Clean",
    doctor: "Dr. Elena Rostova",
    duration: "45 minutes",
    description: "Deep stubborn coffee and tea stains eliminated with gentle cold-light LED activation and mineral protection.",
    beforeStats: "Shade A3.5 with coffee stains",
    afterStats: "Shade B1 (+8 shades brighter)",
    patientAge: "41 years old"
  },
  {
    id: "case-4",
    category: "aligners",
    title: "Invisible Clear Aligners for Severe Crowding",
    doctor: "Dr. Sarah Jenkins",
    duration: "9 months",
    description: "Non-extraction treatment of lower and upper crowding with digital 3D aligner tracking.",
    beforeStats: "Severe front overlap & crossbite",
    afterStats: "Perfect parabolic arch alignment",
    patientAge: "25 years old"
  }
];
