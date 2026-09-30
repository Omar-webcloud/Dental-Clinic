export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experienceYears: number;
  education: string;
  image: string;
  bio: string;
  badges: string[];
  certifications: string[];
  keyTreatments: string[];
}

export const DOCTORS_DATA: Doctor[] = [
  {
    id: "dr-michael-vance",
    name: "Dr. Michael Vance, DDS",
    role: "Chief Dental Surgeon & Implantologist",
    specialty: "Surgical Implantology & 3D Bone Reconstruction",
    experienceYears: 17,
    education: "Columbia University College of Dental Medicine • ITI Fellow",
    image: "/images/doctor-1.jpg",
    bio: "With over 17 years in complex implant restorations, Dr. Vance has placed over 6,500 implants with a 99.2% documented osseointegration rate. Certified international trainer in computer-guided microsurgery.",
    badges: ["17+ Years Experience", "6,500+ Implants", "ITI Fellow"],
    certifications: [
      "International Team for Implantology (ITI) Fellow",
      "Straumann Computer-Guided Surgery Master",
      "Advanced Bone Augmentation & Piezosurgery Certified"
    ],
    keyTreatments: ["All-on-4 / All-on-6", "3D Navigated Implants", "Sinus Lift & Bone Grafting"]
  },
  {
    id: "dr-sarah-jenkins",
    name: "Dr. Sarah Jenkins, DMD",
    role: "Lead Aesthetic & Restorative Dentist",
    specialty: "Digital Smile Design & Ceramic Veneers",
    experienceYears: 12,
    education: "University of Pennsylvania School of Dental Medicine • AACD Member",
    image: "/images/doctor-2.jpg",
    bio: "Dr. Jenkins blends fine art aesthetics with digital dentistry. She is renowned for creating hyper-natural ceramic veneers and seamless smile makeovers that enhance each patient's natural facial harmony.",
    badges: ["12+ Years Experience", "AACD Member", "Smile Design Expert"],
    certifications: [
      "American Academy of Cosmetic Dentistry (AACD)",
      "Digital Smile Design (DSD) Certified Master",
      "Invisalign Diamond Provider"
    ],
    keyTreatments: ["E.max Ceramic Veneers", "Digital Smile Makeovers", "Clear Aligner Orthodontics"]
  },
  {
    id: "dr-elena-rostova",
    name: "Dr. Elena Rostova, DDS",
    role: "Microscopic Endodontist & Restorative Specialist",
    specialty: "Microscope Root Canal Therapy & Tooth Preservation",
    experienceYears: 9,
    education: "European Dental Academy • Specialist Endodontics Board",
    image: "/images/doctor-3.jpg",
    bio: "Dr. Rostova specializes in saving damaged teeth under high-powered Carl Zeiss microscopes. Her gentle technique and pain-free computerized anesthesia make even root canals feel completely effortless.",
    badges: ["9+ Years Experience", "Zeiss Micro-Endo", "98.8% Preservation Rate"],
    certifications: [
      "European Society of Endodontology Certified",
      "Carl Zeiss Optical Microsurgery Certified",
      "Painless Computerized Wand Anesthesia Expert"
    ],
    keyTreatments: ["Microscope Root Canals", "Biological Enamel Inlays", "Tooth Preservation Therapy"]
  }
];
