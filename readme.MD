
# Dental Clinic Website

## 1. Product Overview

**Product:** Modern Dental Clinic Website
**Platform:** Next.js
**Architecture:** Static/SSR website with no database and no authentication
**Primary Conversion:** WhatsApp appointment/contact
**Secondary Conversion:** Phone call
**Form Behavior:** Form submissions are converted into a pre-filled WhatsApp message rather than stored in a database.

### Core Objective

Build a modern, trustworthy, fast-loading dental clinic website that turns visitors into **WhatsApp appointment inquiries**.

The website should make it immediately clear:

* Who the clinic is
* What dental services they provide
* Why patients should trust them
* Where they are located
* How much/what type of treatment they offer
* How quickly a visitor can contact the clinic

---

# 2. Business Goals

### Primary Goals

1. Generate appointment inquiries through WhatsApp.
2. Establish trust with new patients.
3. Clearly communicate dental services.
4. Improve local search visibility.
5. Provide an excellent mobile experience.
6. Reduce friction between discovering the clinic and contacting it.

### Secondary Goals

* Increase phone inquiries.
* Rank for local dental-related searches.
* Showcase doctors and clinic facilities.
* Answer common patient questions.
* Improve perceived professionalism of the clinic.

---

# 3. Target Audience

### Primary

**Local patients looking for dental treatment**

Examples:

* People experiencing tooth pain
* Patients looking for routine dental checkups
* People searching for cosmetic dentistry
* Parents looking for children's dental care
* Patients looking for dental implants
* Patients looking for emergency dental treatment

### Secondary

* Existing patients looking for clinic information
* Patients comparing nearby dental clinics
* People researching a specific treatment before booking

---

# 4. Primary User Journey

```text
Google / Social Media / Referral
              ↓
        Landing Page
              ↓
   Trust + Services + Benefits
              ↓
        Treatment Details
              ↓
       Doctor / Clinic Proof
              ↓
       Patient Testimonials
              ↓
       WhatsApp CTA
              ↓
      Appointment Inquiry
```

### Ideal conversion flow

```text
User clicks "Book Appointment"
            ↓
WhatsApp opens
            ↓
Pre-filled message
            ↓
User sends message
            ↓
Clinic responds
            ↓
Appointment confirmed manually
```

---

# 5. Website Structure

Recommended sitemap:

```text
/
├── About
├── Services
│   ├── General Dentistry
│   ├── Dental Implants
│   ├── Teeth Whitening
│   ├── Root Canal Treatment
│   ├── Orthodontics
│   ├── Cosmetic Dentistry
│   └── Children's Dentistry
├── Doctors
├── Patient Information
├── FAQ
├── Contact
└── Privacy Policy
```

Not every service needs to be a separate page initially.

For an MVP, the recommended structure is:

```text
Home
Services
About
Doctors
FAQ
Contact
Privacy Policy
```

Individual service pages can be added later for SEO.

---

# 6. Homepage PRD

## Section 1 — Header

### Desktop

Logo:

**[Dental Clinic Logo]**

Navigation:

* Home
* About
* Services
* Doctors
* FAQ
* Contact

Primary CTA:

**Book Appointment → WhatsApp**

Secondary:

**Call Now**

### Mobile

```text
Logo                         ☰
```

Sticky bottom CTA:

```text
[ WhatsApp Us ] [ Call Now ]
```

The WhatsApp button should remain easily accessible on mobile.

---

# 7. Hero Section

The hero is the most important conversion section.

### Recommended structure

**Eyebrow**

> YOUR SMILE, OUR PRIORITY

**Headline**

> Modern Dental Care for a Healthier, Confident Smile

**Supporting copy**

> Comprehensive dental care delivered by experienced professionals in a comfortable and welcoming environment.

### CTA

**Book an Appointment on WhatsApp**

Secondary CTA:

**Explore Our Services**

### Trust indicators

Under the CTA:

```text
✓ Experienced Dentists
✓ Modern Equipment
✓ Patient-Centered Care
✓ Convenient Appointments
```

### Hero visual

High-quality image showing:

* Dentist with patient
* Modern dental treatment room
* Smiling patient
* Clean clinical environment

Avoid generic stock imagery where possible.

---

# 8. Trust / Social Proof Strip

Immediately below hero.

Example:

```text
10+ Years Experience     5,000+ Patients
Modern Equipment         Patient-Focused Care
```

Actual numbers should only be used if supplied by the clinic.

If statistics aren't available, use non-numeric trust points.

---

# 9. Services Section

### Heading

> Complete Dental Care Under One Roof

### Description

Brief explanation of the clinic's treatment capabilities.

### Service cards

Each card should contain:

* Icon/image
* Service name
* 1–2 sentence description
* Learn More

Example:

### General Dentistry

Routine examinations, cleanings, fillings and preventive dental care.

### Dental Implants

Long-lasting tooth replacement solutions designed to restore function and confidence.

### Teeth Whitening

Professional whitening treatments for a brighter, more confident smile.

### Root Canal Treatment

Comfort-focused treatment to save damaged or infected teeth.

### Orthodontics

Treatment options designed to improve tooth alignment and your bite.

### Cosmetic Dentistry

Smile-enhancing treatments tailored to your aesthetic goals.

CTA:

**View All Services**

---

# 10. Why Choose Us

This section should answer:

**"Why should I choose this clinic instead of another dentist?"**

### Example

> Dental Care Built Around You

Cards:

**Experienced Professionals**
Care delivered by qualified dental professionals.

**Modern Technology**
Contemporary equipment and treatment techniques.

**Comfortable Environment**
A welcoming clinic designed to make your visit more comfortable.

**Personalized Treatment**
Treatment recommendations based on your individual dental needs.

**Transparent Communication**
Clear explanations before proceeding with treatment.

**Convenient Booking**
Contact our clinic directly through WhatsApp to arrange an appointment.

---

# 11. About the Clinic

Two-column layout.

### Left

Clinic image.

### Right

**About [Clinic Name]**

> At [Clinic Name], we believe dental care should be professional, comfortable and accessible.

Explain:

* Clinic history
* Philosophy
* Experience
* Treatment approach
* Patient care

CTA:

**Meet Our Doctors**

---

# 12. Doctors Section

### Heading

> Meet Our Dental Team

Each doctor card:

```text
[Doctor Photo]

Dr. [Name]
[Specialization]

[Short credentials]

[View Profile]
```

Optional:

* Qualification
* Years of experience
* Specialization
* Professional memberships

Avoid overwhelming visitors with long CVs.

---

# 13. Treatment Process

A simple 4-step section.

```text
01
Book Your Visit
        ↓
02
Dental Consultation
        ↓
03
Personalized Treatment Plan
        ↓
04
Begin Your Treatment
```

This is particularly useful for first-time patients.

---

# 14. Before & After

If the clinic has legitimate patient-approved treatment photos, create:

### Heading

> Real Results, Real Smiles

Display:

```text
Before              After
[Image]             [Image]
```

Categories:

* Whitening
* Veneers
* Orthodontics
* Implants
* Cosmetic treatment

Important: only use genuine clinic results with appropriate patient consent.

---

# 15. Testimonials

### Heading

> What Our Patients Say

Cards:

```text
★★★★★

"Short testimonial from a real patient..."

— Patient Name
```

Prefer:

* Google reviews
* Verified patient testimonials
* First name + initial where appropriate

Do not fabricate testimonials.

---

# 16. Emergency CTA

A strong conversion section.

### Heading

> Need Dental Care?

### Copy

> Whether you need a routine checkup or urgent dental care, our team is here to help.

Buttons:

**WhatsApp the Clinic**

**Call Now**

---

# 17. FAQ

Important for both conversion and SEO.

Suggested questions:

### Do I need to book an appointment?

Answer based on the clinic's actual policy.

### How do I book an appointment?

> You can contact our clinic through WhatsApp and our team will help arrange a convenient appointment.

### What dental treatments do you provide?

List major services.

### Do you treat children?

Clinic-specific answer.

### Do you provide emergency dental treatment?

Clinic-specific answer.

### How long does a dental appointment take?

Explain that duration varies by treatment.

### How much does dental treatment cost?

Avoid fake pricing.

> Treatment costs depend on your individual needs. Contact us through WhatsApp for more information.

---

# 18. Contact Section

### Heading

> Visit Our Dental Clinic

Information:

```text
Address
Phone
WhatsApp
Opening Hours
Email
```

### Map

Embed Google Maps.

No custom map backend is required.

### CTA

**Get Directions**

**WhatsApp Us**

---

# 19. Appointment Form

The form should **not save anything to a database**.

### Fields

```text
Full Name *
Phone Number *
Preferred Date
Preferred Time
Service
Message
```

Optional:

```text
New Patient / Existing Patient
```

### Submit button

**Request Appointment via WhatsApp**

---

# 20. WhatsApp Form Logic

When the user submits:

```text
Full Name:
John Smith

Phone:
+123456789

Preferred Date:
15 October

Preferred Time:
3:00 PM

Service:
Dental Cleaning

Message:
I would like to book a consultation.
```

JavaScript constructs:

```text
Hello, I would like to book an appointment.

Name: John Smith
Phone: +123456789
Preferred Date: 15 October
Preferred Time: 3:00 PM
Service: Dental Cleaning

Message:
I would like to book a consultation.
```

Then redirects to:

```text
https://wa.me/CLINIC_NUMBER?text=ENCODED_MESSAGE
```

The clinic receives the request directly in WhatsApp.

### Important

The phone number should be stored in an environment variable rather than hardcoded throughout the application.

Example:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=...
```

---

# 21. Global WhatsApp CTA

WhatsApp should be the website's primary conversion mechanism.

### Desktop

Floating button:

```text
[ WhatsApp ] 
```

Bottom-right.

### Mobile

Fixed bottom bar:

```text
┌─────────────────────────────────────┐
│  WhatsApp Us        Call Now        │
└─────────────────────────────────────┘
```

### CTA wording

Prefer action-oriented wording:

* Book via WhatsApp
* WhatsApp Us
* Request an Appointment
* Chat With Our Team

Avoid generic:

* Submit
* Contact
* Click Here

---

# 22. WhatsApp CTA Message

Direct CTA should open WhatsApp with:

> Hello, I would like to book an appointment at [Clinic Name]. Could you please provide me with the available dates and times?

Different pages can have different messages.

### Service page

For example:

> Hello, I'm interested in Dental Implants. I would like to know more about the treatment and available appointments.

This gives the clinic useful context immediately.

---

# 23. Footer

Footer structure:

### Column 1

Logo + short description.

### Column 2

**Quick Links**

* Home
* About
* Services
* Doctors
* FAQ
* Contact

### Column 3

**Services**

* General Dentistry
* Dental Implants
* Teeth Whitening
* Root Canal
* Orthodontics

### Column 4

**Contact**

* Phone
* WhatsApp
* Address
* Opening hours

Bottom:

```text
© 2026 [Clinic Name]. All rights reserved.

Privacy Policy
```

---

# 24. Technical Requirements

## Framework

**Next.js**

Recommended:

```text
Next.js
TypeScript
Tailwind CSS
ESLint
```

Optional:

```text
Lucide React
```

for interface icons.

---

# 25. Architecture

Because there is no database or authentication:

```text
Browser
   ↓
Next.js
   ↓
Static/SSR Content
   ↓
WhatsApp
```

No:

```text
Database
Authentication
User accounts
Admin dashboard
Backend API
CMS
```

unless added later.

---

# 26. Content Management

For MVP, content can be stored directly in TypeScript data files.

Example:

```text
src/
├── app/
├── components/
├── data/
│   ├── services.ts
│   ├── doctors.ts
│   ├── testimonials.ts
│   └── faq.ts
├── lib/
│   └── whatsapp.ts
└── public/
    └── images/
```

This makes the site easy to maintain without introducing a CMS.

---

# 27. Suggested Component Architecture

```text
components/
│
├── Header
├── MobileMenu
├── WhatsAppButton
├── MobileCTA
├── Hero
├── TrustBar
├── Services
├── ServiceCard
├── WhyChooseUs
├── AboutClinic
├── Doctors
├── DoctorCard
├── TreatmentProcess
├── BeforeAfter
├── Testimonials
├── FAQ
├── AppointmentForm
├── Contact
├── Map
└── Footer
```

---

# 28. SEO Requirements

The website should be built with local SEO in mind.

### Every page needs

* Unique `<title>`
* Unique meta description
* Canonical URL
* Open Graph metadata
* Semantic headings
* Optimized images
* Descriptive alt text
* Internal linking

### Example homepage title

> [Clinic Name] | Dentist in [City] | Dental Care & Treatment

### Example description

> [Clinic Name] provides professional dental care in [City], including general dentistry, implants, cosmetic dentistry and more. Book your appointment via WhatsApp.

---

# 29. Structured Data

Implement appropriate Schema.org structured data.

Recommended:

```text
Dentist
LocalBusiness
MedicalBusiness
FAQPage
BreadcrumbList
```

Where applicable.

Example information:

```text
Clinic Name
Address
Phone
Opening Hours
Geo Coordinates
Website
Services
```

Only include information that is accurate and actually visible/relevant to the clinic.

---

# 30. Performance Requirements

Target:

### Lighthouse

```text
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
```

### Requirements

* Next.js Image optimization
* WebP/AVIF where appropriate
* Lazy loading
* Minimal JavaScript
* Avoid unnecessary libraries
* Proper font loading
* Responsive images
* No autoplay video unless necessary
* Avoid large hero assets

---

# 31. Responsive Design

The website must be designed mobile-first.

### Breakpoints

```text
Mobile
Tablet
Desktop
Large Desktop
```

The mobile experience is especially important because WhatsApp will likely be the primary conversion channel.

---

# 32. Accessibility

Requirements:

* WCAG-conscious color contrast
* Keyboard navigation
* Visible focus states
* Semantic HTML
* Proper form labels
* Accessible mobile menu
* `aria-label` where necessary
* Meaningful image alt text
* No information conveyed by color alone

---

# 33. Security & Privacy

Since there is no database:

* No patient information is stored by the website.
* No user accounts.
* No passwords.
* No authentication system.

The appointment form should only construct a WhatsApp message in the browser.

The website should still include:

* Privacy Policy
* Cookie information if analytics/cookies are used
* Appropriate consent mechanisms where legally required

---

# 34. Analytics

Optional but recommended.

Use a lightweight analytics solution to track:

```text
Page views
WhatsApp CTA clicks
Phone CTA clicks
Appointment form submissions
Service page visits
Traffic sources
```

Important:

**Do not track or store sensitive dental/medical information unnecessarily.**

For example, analytics should track:

```text
whatsapp_click
```

rather than storing:

```text
patient_name
medical_condition
treatment_details
```

---

# 35. Conversion Tracking

Define key events:

```text
whatsapp_click
appointment_form_start
appointment_form_submit
phone_click
directions_click
service_view
```

Primary KPI:

> Number of WhatsApp appointment inquiries generated.

Secondary KPIs:

* WhatsApp CTA conversion rate
* Form completion rate
* Phone clicks
* Organic traffic
* Service page engagement

---

# 36. Visual Direction

Recommended design:

### Style

**Premium + Clean + Medical + Warm**

Avoid the typical overly clinical blue/white template.

Potential design language:

```text
White / Off-white
Soft neutral backgrounds
One strong brand accent
Dark typography
Subtle shadows
Rounded cards
Large whitespace
High-quality photography
```

The design should communicate:

**Professional → Trustworthy → Comfortable → Modern**

rather than:

**Cold → Hospital-like → Corporate**

---

# 37. CMS / Database Decision

### MVP intentionally excludes:

```text
❌ Database
❌ Authentication
❌ Admin panel
❌ Patient portal
❌ Appointment management system
❌ Online payment
❌ Booking calendar
```

### Instead:

```text
Next.js
   +
Static content
   +
WhatsApp
   +
Optional analytics
```

This keeps the website:

* Cheap to host
* Fast
* Simple
* Secure
* Easy to deploy
* Easy to maintain

---

# 38. Future Roadmap

The MVP can later evolve into a full dental platform.

### Phase 2

```text
CMS
Appointment calendar
Doctor availability
Online booking
Email notifications
```

### Phase 3

```text
Patient accounts
Patient portal
Treatment history
Appointment management
Online payments
```

### Phase 4

```text
CRM
Automated WhatsApp follow-ups
Lead management
Appointment reminders
Marketing automation
```

These should **not** be included in the initial MVP.

---

# 39. MVP Acceptance Criteria

The website is considered complete when:

### Design

* [ ] Responsive on mobile, tablet and desktop
* [ ] Professional dental-clinic visual design
* [ ] Consistent typography and spacing
* [ ] High-quality optimized imagery

### Conversion

* [ ] WhatsApp CTA available globally
* [ ] Floating WhatsApp button works
* [ ] Mobile sticky CTA works
* [ ] Appointment form works
* [ ] Form redirects to WhatsApp
* [ ] WhatsApp message contains submitted information
* [ ] Phone CTA works
* [ ] Contact information is easily accessible

### Technical

* [ ] Built with Next.js
* [ ] TypeScript
* [ ] No database
* [ ] No authentication
* [ ] No unnecessary backend
* [ ] Environment variable for WhatsApp number
* [ ] Production build succeeds
* [ ] No console errors

### SEO

* [ ] Metadata configured
* [ ] Sitemap
* [ ] Robots.txt
* [ ] Structured data
* [ ] Semantic HTML
* [ ] Optimized images
* [ ] Local SEO information

### Performance

* [ ] Lighthouse Performance target 90+
* [ ] Fast mobile load
* [ ] Images optimized
* [ ] Minimal client-side JavaScript

---

# 40. Final Product Definition

The finished product should feel like:

> **A premium local dental clinic website designed primarily to turn visitors into WhatsApp conversations.**

The key architecture is intentionally simple:

```text
                    ┌───────────────┐
                    │    Visitor    │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │    Next.js    │
                    │    Website    │
                    └───────┬───────┘
                            │
              ┌─────────────┼─────────────┐
              │             │             │
              ▼             ▼             ▼
         WhatsApp        Phone Call    Directions
              │
              ▼
       Appointment Chat
```

**Core principle:** don't build a complex booking system when the clinic already wants to handle appointments through WhatsApp. Make the website excellent at getting the right patient information into WhatsApp with as few clicks as possible.
