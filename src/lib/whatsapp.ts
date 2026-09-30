/**
 * WhatsApp utility helper for Evrika Dent clinic
 */

export const CLINIC_CONFIG = {
  name: "Evrika Dent",
  tagline: "Dentistry of the future where technology meets care",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "1234567890",
  phoneDisplay: process.env.NEXT_PUBLIC_CLINIC_PHONE || "+1 (234) 567-890",
  phoneRaw: "+1234567890",
  secondaryPhone: "+1 (234) 567-891",
  email: "care@evrikadent.com",
  address: "742 Evergreen Medical Plaza, Suite 300, New York, NY 10001",
  workingHours: {
    weekdays: "Mon - Fri: 8:00 AM - 8:00 PM",
    saturday: "Saturday: 9:00 AM - 5:00 PM",
    sunday: "Sunday: Closed (Emergency on-call)",
  },
  socials: {
    whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "1234567890"}`,
    telegram: "https://t.me/evrikadent",
    instagram: "https://instagram.com/evrikadent",
  },
  stats: {
    yearsExperience: 17,
    patientsTreated: "10,000+",
    satisfactionRate: "99.4%",
    googleRating: "4.9",
    googleReviewsCount: 380,
  }
};

export interface AppointmentData {
  fullName: string;
  phone: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
  patientType?: "New Patient" | "Existing Patient";
  message?: string;
}

/**
 * Generates an encoded WhatsApp URL with structured message
 */
export function createWhatsAppUrl(data?: AppointmentData | string): string {
  const phone = (CLINIC_CONFIG.whatsappNumber || "1234567890").replace(/\D/g, "");

  if (!data) {
    const defaultMsg = `Hello ${CLINIC_CONFIG.name}, I would like to inquire about booking an appointment. Could you please share available dates and times?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(defaultMsg)}`;
  }

  if (typeof data === "string") {
    return `https://wa.me/${phone}?text=${encodeURIComponent(data)}`;
  }

  const lines: string[] = [
    `🦷 *Appointment Request - ${CLINIC_CONFIG.name}*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `👤 *Name:* ${data.fullName || "Not provided"}`,
    `📱 *Phone:* ${data.phone || "Not provided"}`,
  ];

  if (data.patientType) {
    lines.push(`📋 *Patient Status:* ${data.patientType}`);
  }

  if (data.service) {
    lines.push(`✨ *Interested Service:* ${data.service}`);
  }

  if (data.preferredDate) {
    lines.push(`📅 *Preferred Date:* ${data.preferredDate}`);
  }

  if (data.preferredTime) {
    lines.push(`⏰ *Preferred Time:* ${data.preferredTime}`);
  }

  if (data.message && data.message.trim()) {
    lines.push(`💬 *Notes/Question:* ${data.message.trim()}`);
  }

  lines.push(`━━━━━━━━━━━━━━━━━━━━`);
  lines.push(`_Sent via ${CLINIC_CONFIG.name} Online Booking_`);

  const messageText = lines.join("\n");
  return `https://wa.me/${phone}?text=${encodeURIComponent(messageText)}`;
}

/**
 * Direct WhatsApp link for a specific treatment
 */
export function getServiceWhatsAppUrl(serviceTitle: string): string {
  const message = `Hello ${CLINIC_CONFIG.name}! I am interested in *${serviceTitle}*. Could you please provide more details about this treatment and next available consultation slots?`;
  return createWhatsAppUrl(message);
}

/**
 * Direct WhatsApp link for a specific doctor
 */
export function getDoctorWhatsAppUrl(doctorName: string, role: string): string {
  const message = `Hello ${CLINIC_CONFIG.name}! I would like to book a dental consultation with *${doctorName}* (${role}). Please let me know the upcoming available schedule.`;
  return createWhatsAppUrl(message);
}
