export interface ServiceItem {
  id: string;
  title: string;
  priceTag: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  duration: string;
  benefits: string[];
  procedureSteps: string[];
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  service: string;
  date: string;
  initials: string;
}

export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  experience: string;
  specialties: string[];
  rating: string;
  reviewCount: number;
}

export const CLINIC_CONTACT = {
  name: "DENTORA",
  tagline: "Your Family Dental Clinic",
  phone: "+91 82927 89639",
  phoneRaw: "+918292789639",
  email: "hello@dentoraclinic.com",
  address: "1240 Northwest 10th Ave, Portland, OR 97209",
  hours: {
    weekdays: "Mon - Fri: 8:00am - 7:00pm",
    saturday: "Saturday: 9:00am - 5:00pm",
    sunday: "Sunday: Emergency only",
    emergency: "24/7 Emergency Line: +91 82927 89639"
  }
};

export const PROCESS_STRIP = [
  { step: "01", label: "Consultation", desc: "Detailed discussion of your oral health goals and comfort needs." },
  { step: "02", label: "Care Planning", desc: "3D imaging and personalized care map with 100% upfront pricing." },
  { step: "03", label: "Treatment Process", desc: "Gentle, stress-free clinical care utilizing modern sedation if requested." },
  { step: "04", label: "Dental Maintenance", desc: "Ongoing prevention plans and preventive checks to protect your smile." }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "check-up",
    title: "Dental Check-Up",
    priceTag: "FROM $80",
    category: "Preventive Care",
    shortDesc: "Comprehensive examination of your teeth, gums, and jaw. Includes digital X-rays and a full treatment plan.",
    fullDesc: "Our thorough comprehensive oral examination employs gentle tactile evaluation alongside ultra-low-radiation digital radiography and high-definition intraoral camera diagnostics. We evaluate enamel integrity, periodontal depth, TMJ alignment, and early oral pathology before symptoms arise.",
    image: "/src/assets/images/treatment_checkup_1791759909626.jpg",
    duration: "45 - 60 minutes",
    benefits: [
      "Low-radiation HD digital X-rays",
      "Full periodontal health charting",
      "Oral cancer screening included",
      "Transparent preventative action plan"
    ],
    procedureSteps: [
      "Review of medical history and patient comfort preferences",
      "HD digital intraoral photography & bitewing scans",
      "Gentle periodontal pocket measurement",
      "One-on-one visual review with Dr. Daniel Carter"
    ]
  },
  {
    id: "cleaning",
    title: "Teeth Cleaning",
    priceTag: "FROM $120",
    category: "Hygiene & Prevention",
    shortDesc: "Professional scaling and polishing to remove plaque, tartar, and surface stains for a healthier smile.",
    fullDesc: "Our advanced ultrasonic hygiene therapy gently breaks down hardened calculus and stubborn staining without scratching delicate enamel. Finished with micro-fine prophy polishing and an optional remineralizing fluoride varnish.",
    image: "/src/assets/images/hero_dentist_patient_1791759869815.jpg",
    duration: "45 minutes",
    benefits: [
      "Gentle ultrasonic calculus removal",
      "Fresh breath restoration & stain removal",
      "Gingival inflammation reduction",
      "Fluoride enamel strengthening treatment"
    ],
    procedureSteps: [
      "Surface plaque assessment with visual disclosing",
      "Ultrasonic cavitation scaling for hardened tartar",
      "Hand instrumentation for precise micro-smoothing",
      "Prophylaxis paste polishing & remineralizing rinse"
    ]
  },
  {
    id: "whitening",
    title: "Tooth Whitening",
    priceTag: "FROM $299",
    category: "Cosmetic Dentistry",
    shortDesc: "Professional in-office or at-home whitening to brighten your smile by up to 8 shades.",
    fullDesc: "Experience safe, clinically calibrated tooth whitening utilizing advanced blue-spectrum LED activation and medical-grade hydrogen peroxide gels formulated with potassium nitrate to eradicate dental sensitivity.",
    image: "/src/assets/images/dental_operatory_room_1791759898022.jpg",
    duration: "60 minutes",
    benefits: [
      "Up to 8 shades brighter in a single session",
      "Anti-sensitivity desensitizing formulation",
      "Enamel-safe pH balanced ingredients",
      "Custom take-home maintenance trays included"
    ],
    procedureSteps: [
      "Shade baseline recording and photography",
      "Gingival barrier isolation to safeguard gums",
      "Triple 15-minute LED light activation rounds",
      "Post-treatment fluoride seal & shade comparison"
    ]
  },
  {
    id: "implants",
    title: "Dental Implants",
    priceTag: "FROM $1,800",
    category: "Restorative Care",
    shortDesc: "Permanent, natural-looking replacements for missing teeth — surgically placed and built to last a lifetime.",
    fullDesc: "The premier standard in missing tooth restoration. Using 3D computer-guided surgical navigation, biocompatible medical titanium or zirconia roots are integrated into the bone, capped with bespoke porcelain crowns matching your natural smile.",
    image: "/src/assets/images/banner_consultation_1791759920910.jpg",
    duration: "60 - 90 minutes",
    benefits: [
      "Preserves facial bone volume and jaw structure",
      "Permanent solution with 98.4% long-term success",
      "Functions and chews identically to natural teeth",
      "No adjacent tooth reduction needed"
    ],
    procedureSteps: [
      "3D Cone Beam CT scan and surgical virtual guide",
      "Minimally invasive implant fixture placement",
      "Healing period with temporary aesthetic crown",
      "Final custom milled porcelain crown insertion"
    ]
  },
  {
    id: "veneers",
    title: "Veneers & Crowns",
    priceTag: "FROM $650",
    category: "Aesthetic Restoration",
    shortDesc: "Custom-crafted porcelain shells and crowns to restore shape, color, and strength to damaged teeth.",
    fullDesc: "Artfully sculpted ultra-thin porcelain veneers and monolithic zirconia crowns hand-crafted by master dental ceramists. Correct chips, misalignments, gaps, and severe internal discoloration with timeless natural luster.",
    image: "/src/assets/images/dental_team_scrubs_1791759884833.jpg",
    duration: "2 visits (90 mins each)",
    benefits: [
      "Hand-layered lifelike translucency",
      "Extreme resistance to coffee and wine staining",
      "Reinforces structural integrity of compromised teeth",
      "Custom shade-matching to your facial aesthetics"
    ],
    procedureSteps: [
      "Aesthetic wax-up and smile proportion trial",
      "Micro-conservative enamel preparation",
      "Digital intraoral optical scanning (no goopy impressions)",
      "Precision bonding with resin cement"
    ]
  },
  {
    id: "emergency",
    title: "Emergency Care",
    priceTag: "SAME DAY",
    category: "Urgent Relief",
    shortDesc: "Same-day emergency appointments for toothaches, broken teeth, lost fillings, and dental pain. Call anytime.",
    fullDesc: "Dental emergencies cannot wait. Our clinic reserves dedicated daily emergency buffer slots for acute toothache, knocked-out teeth, fractured restorations, abscesses, or facial swelling. Immediate pain relief is our priority.",
    image: "/src/assets/images/treatment_checkup_1791759909626.jpg",
    duration: "30 - 60 minutes",
    benefits: [
      "Guaranteed same-day triage and appointments",
      "Rapid pain alleviation protocols",
      "Emergency digital radiography on-site",
      "Direct after-hours dentist communication line"
    ],
    procedureSteps: [
      "Immediate triage & acute symptom evaluation",
      "Targeted digital X-ray of problematic quadrant",
      "Instant local anesthesia or pain stabilization",
      "Same-day definitive repair or relief dressing"
    ]
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: "01",
    badge: "1. Book Online",
    title: "Book Online",
    description: "Fill out our quick form or call us — we'll confirm your appointment within the hour.",
    iconName: "Calendar"
  },
  {
    number: "02",
    badge: "2. Welcome Visit",
    title: "Welcome Visit",
    description: "Arrive at your scheduled time, meet your dentist, and we'll go over your dental history.",
    iconName: "UserCheck"
  },
  {
    number: "03",
    badge: "3. Smile Assessment",
    title: "Smile Assessment",
    description: "Digital X-rays, full examination, and a transparent care plan with pricing before we start.",
    iconName: "Scan"
  },
  {
    number: "04",
    badge: "4. Treatment & Care",
    title: "Treatment & Care",
    description: "Treatment completed, results reviewed, aftercare explained. We follow up to make sure you're happy.",
    iconName: "HeartHandshake"
  }
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: "rev-1",
    name: "Emily K.",
    role: "Verified Google Review",
    rating: 5,
    quote: "I've been going to Dentora for two years and I won't go anywhere else. They explained every step of my treatment clearly and I never felt pressured. Best dental experience I've had.",
    service: "Preventive Care & Cleaning",
    date: "2 weeks ago",
    initials: "EK"
  },
  {
    id: "rev-2",
    name: "Marcus T.",
    role: "Verified Google Review",
    rating: 5,
    quote: "As someone who used to dread the dentist, Dentora completely changed my experience. Painless, quick, and the results were incredible. My smile has never looked better.",
    service: "Dental Implants & Whitening",
    date: "1 month ago",
    initials: "MT"
  },
  {
    id: "rev-3",
    name: "Sarah L.",
    role: "Verified Google Review",
    rating: 5,
    quote: "Brought my whole family here after a recommendation. The team is patient and gentle with my kids, which means everything. We're Dentora patients for life.",
    service: "Family Dentistry",
    date: "3 weeks ago",
    initials: "SL"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Daniel Carter",
    role: "Lead Dental Specialist & Clinic Director",
    credentials: "DDS, FAGD — University of Washington",
    bio: "With over 14 years of clinical experience, Dr. Carter specializes in minimally invasive restorative dentistry and implant rehabilitation. Known for his calm bedside manner and dedication to patient comfort.",
    experience: "14+ Years",
    specialties: ["Implants", "Cosmetic Dentistry", "Oral Surgery"],
    rating: "4.9",
    reviewCount: 450
  },
  {
    name: "Dr. Sarah Chen",
    role: "Cosmetic & Restorative Dentist",
    credentials: "DMD — OHSU School of Dentistry",
    bio: "Dr. Chen focuses on porcelain veneers, conservative smile design, and advanced clear aligner therapies, combining scientific precision with artistic facial harmony.",
    experience: "10+ Years",
    specialties: ["Veneers", "Clear Aligners", "Smile Aesthetics"],
    rating: "5.0",
    reviewCount: 320
  },
  {
    name: "Dr. Marcus Vance",
    role: "Periodontal & Preventive Care Lead",
    credentials: "DDS, MS — UCSF School of Dentistry",
    bio: "Passionate about gentle preventative therapies and long-term gum health, Dr. Vance ensures each patient enjoys stress-free, painless routine dental visits.",
    experience: "8+ Years",
    specialties: ["Periodontal Therapy", "Sedation Care", "Preventative Health"],
    rating: "4.9",
    reviewCount: 290
  }
];
