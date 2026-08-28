// =============================================================================
// Kamal Khadka Legal Website Configuration
// =============================================================================
// All site content is configured here. Components render nothing when their
// primary config fields are empty strings or empty arrays.
// =============================================================================

// -----------------------------------------------------------------------------
// Site Config
// -----------------------------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const siteConfig: SiteConfig = {
  title: "Kamal Khadka | Advocate, Notary Public & Arbitrator - Kathmandu, Nepal",
  description: "Experienced Advocate, Notary Public, and Arbitrator serving Nepal's legal needs. Over 30 years of expertise in civil and criminal litigation, intellectual property law, company registrations, and notarization services.",
  language: "en",
  keywords: "advocate Kathmandu, notary public Nepal, trademark registration Nepal, legal services Nepal, arbitrator Kathmandu, company registration Nepal, Kamal Khadka, KIPLAN",
  ogImage: "/images/hero-portrait.jpg",
  canonical: "https://kamalkhadka.legal",
};

// -----------------------------------------------------------------------------
// Navigation Config
// -----------------------------------------------------------------------------
export interface NavDropdownItem {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: string;
  dropdown?: NavDropdownItem[];
}

export interface NavigationConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  navLinks: NavLink[];
  ctaButtonText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "Kamal Khadka",
  brandSubname: "Legal Services",
  tagline: "Advocate | Notary Public | AI Practitioner",
  navLinks: [
    { name: "Home", href: "/", icon: "Home" },
    { name: "About", href: "/about", icon: "Users" },
    {
      name: "Services",
      href: "/services",
      icon: "BookOpen",
      dropdown: [
        { name: "Legal", href: "/services/legal" },
        { name: "Notary", href: "/services/notary" },
        { name: "Digital / Technology Initiatives", href: "/services/digital-technology" },
      ],
    },
    {
      name: "KIPLAN",
      href: "/kiplan",
      icon: "Landmark",
      dropdown: [
        { name: "KIPLANNotary", href: "/kiplan/kiplannotary" },
        { name: "KIPLANScholar", href: "/kiplan/kiplanscholar" },
        { name: "KIPLANLaw", href: "/kiplan/kiplanlaw" },
      ],
    },
    { name: "Blog", href: "/blog", icon: "Newspaper" },
    { name: "Contact", href: "/contact", icon: "Mail" },
  ],
  ctaButtonText: "Contact Me",
};

// -----------------------------------------------------------------------------
// Preloader Config
// -----------------------------------------------------------------------------
export interface PreloaderConfig {
  brandName: string;
  brandSubname: string;
  yearText: string;
}

export const preloaderConfig: PreloaderConfig = {
  brandName: "Kamal Khadka",
  brandSubname: "Legal Excellence",
  yearText: "Est. 1993",
};

// -----------------------------------------------------------------------------
// Hero Config
// -----------------------------------------------------------------------------
export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroConfig {
  scriptText: string;
  mainTitle: string;
  ctaButtonText: string;
  ctaTarget: string;
  stats: HeroStat[];
  decorativeText: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "Justice Served",
  mainTitle: "Kamal Khadka",
  ctaButtonText: "Contact Me",
  ctaTarget: "#contact",
  stats: [
    { value: 30, suffix: "+", label: "Years Experience" },
    { value: 500, suffix: "+", label: "Cases Handled" },
    { value: 100, suffix: "%", label: "Commitment" },
  ],
  decorativeText: "Advocate · Notary · Arbitrator",
  backgroundImage: "/images/hero-portrait.jpg",
};

// -----------------------------------------------------------------------------
// Wine Showcase Config (Adapted for Services)
// -----------------------------------------------------------------------------
export interface Wine {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  filter: string;
  glowColor: string;
  description: string;
  tastingNotes: string;
  alcohol: string;
  temperature: string;
  aging: string;
}

export interface WineFeature {
  icon: string;
  title: string;
  description: string;
}

export interface WineQuote {
  text: string;
  attribution: string;
  prefix: string;
}

export interface WineShowcaseConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  wines: Wine[];
  features: WineFeature[];
  quote: WineQuote;
}

export const wineShowcaseConfig: WineShowcaseConfig = {
  scriptText: "What I Offer",
  subtitle: "COMPREHENSIVE LEGAL SOLUTIONS",
  mainTitle: "Legal Services",
  wines: [
    {
      id: "legal",
      name: "Legal Services",
      subtitle: "Civil & Criminal Litigation",
      year: "1993",
      image: "/images/portfolio-1.jpg",
      filter: "",
      glowColor: "bg-blue-900/20",
      description: "Expert representation in civil and criminal matters, including family law, property disputes, and corporate litigation with over three decades of courtroom experience.",
      tastingNotes: "Family Law, Corporate Law, IP Protection",
      alcohol: "Success Rate",
      temperature: "Client Focus",
      aging: "Since 1993",
    },
    {
      id: "notary",
      name: "Notary Services",
      subtitle: "Attestation & Certification",
      year: "2007",
      image: "/images/portfolio-4.jpg",
      filter: "brightness(1.15) sepia(0.2)",
      glowColor: "bg-amber-600/20",
      description: "Authorized notary public services including document attestation, certified translations, power of attorney, affidavits, and MOFA legalization for international use.",
      tastingNotes: "Power of Attorney, Affidavits, Translations",
      alcohol: "Authorized",
      temperature: "MOFA Legalized",
      aging: "Since 2007",
    },
    {
      id: "corporate",
      name: "Corporate Services",
      subtitle: "Company Registration & Compliance",
      year: "2014",
      image: "/images/portfolio-2.jpg",
      filter: "brightness(1.1) hue-rotate(-10deg)",
      glowColor: "bg-emerald-900/20",
      description: "Complete corporate solutions including company registration (public/private), contract drafting, regulatory compliance, board meeting management, and shareholder services.",
      tastingNotes: "Company Reg, Contracts, Compliance",
      alcohol: "Full Service",
      temperature: "KIPLAN",
      aging: "Since 2014",
    },
    {
      id: "ip",
      name: "IP Law",
      subtitle: "Trademark & Patent Protection",
      year: "2014",
      image: "/images/portfolio-3.jpg",
      filter: "brightness(1.2) hue-rotate(20deg)",
      glowColor: "bg-purple-900/20",
      description: "Intellectual property protection services including trademark registration, copyright protection, patent applications, and IP litigation to safeguard your innovations.",
      tastingNotes: "Trademarks, Copyrights, Patents",
      alcohol: "Protected",
      temperature: "IP Focused",
      aging: "KIPLAN Era",
    },
  ],
  features: [
    {
      icon: "Wine",
      title: "Expert Representation",
      description: "Licensed to practice in all Nepali courts including the Supreme Court",
    },
    {
      icon: "Thermometer",
      title: "Certified Notary",
      description: "Authorized for translations, attestations, and certifications since 2007",
    },
    {
      icon: "Clock",
      title: "30+ Years Experience",
      description: "Decades of combined expertise in law and human resources management",
    },
    {
      icon: "Sparkles",
      title: "Arbitration Services",
      description: "Qualified arbitrator for alternative dispute resolution since 2024",
    },
  ],
  quote: {
    text: "Justice will not be served until those who are unaffected are as outraged as those who are.",
    attribution: "Benjamin Franklin",
    prefix: "Philosophy",
  },
};

// -----------------------------------------------------------------------------
// Winery Carousel Config (Adapted for Practice Areas)
// -----------------------------------------------------------------------------
export interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  area: string;
  unit: string;
  description: string;
}

export interface WineryCarouselConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  locationTag: string;
  slides: CarouselSlide[];
}

export const wineryCarouselConfig: WineryCarouselConfig = {
  scriptText: "Areas of Practice",
  subtitle: "SPECIALIZED EXPERTISE",
  mainTitle: "Practice Areas",
  locationTag: "Kathmandu, Nepal",
  slides: [
    {
      image: "/images/portfolio-1.jpg",
      title: "Civil Litigation",
      subtitle: "Property & Inheritance Disputes",
      area: "500+",
      unit: "Cases Resolved",
      description: "Successfully resolved numerous property disputes, inheritance cases, and civil matters for clients across Bagmati Province with favorable outcomes.",
    },
    {
      image: "/images/portfolio-2.jpg",
      title: "Corporate Law",
      subtitle: "Company Registration & Governance",
      area: "200+",
      unit: "Companies Registered",
      description: "Facilitated company registrations, managed corporate governance, and ensured regulatory compliance for businesses of all sizes.",
    },
    {
      image: "/images/portfolio-3.jpg",
      title: "Intellectual Property",
      subtitle: "Trademark & Copyright Protection",
      area: "300+",
      unit: "IP Registrations",
      description: "Protected intellectual property rights through trademark registrations, copyright filings, and patent applications for innovators and businesses.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Museum Config (Adapted for About Section)
// -----------------------------------------------------------------------------
export interface TimelineEvent {
  year: string;
  event: string;
}

export interface MuseumTabContent {
  title: string;
  description: string;
  highlight: string;
}

export interface MuseumTab {
  id: string;
  name: string;
  icon: string;
  image: string;
  content: MuseumTabContent;
}

export interface MuseumQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface MuseumConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  timeline: TimelineEvent[];
  tabs: MuseumTab[];
  openingHours: string;
  openingHoursLabel: string;
  ctaButtonText: string;
  yearBadge: string;
  yearBadgeLabel: string;
  quote: MuseumQuote;
  founderPhotoAlt: string;
  founderPhoto: string;
}

export const museumConfig: MuseumConfig = {
  scriptText: "My Story",
  subtitle: "ABOUT ME",
  mainTitle: "Professional Journey",
  introText: "Kamal Khadka is a seasoned legal professional with over 30 years of combined experience in law and human resources. As Managing Director of Kathmandu IP Law & Associates Nepal (KIPLAN), he provides reliable legal advocacy, notarization, and corporate services in Kathmandu and beyond.",
  timeline: [
    { year: "1989", event: "Started LL.B. at Tribhuvan University" },
    { year: "1993", event: "Obtained Advocate License No. 4039" },
    { year: "2007", event: "Became Notary Public License No. 170" },
    { year: "2009", event: "Completed MA in HRM from Australia" },
    { year: "2014", event: "Founded KIPLAN" },
    { year: "2022", event: "Completed LLM from National College" },
    { year: "2024", event: "Qualified as Arbitrator" },
  ],
  tabs: [
    {
      id: "credentials",
      name: "Credentials",
      icon: "Award",
      image: "/images/about-portrait.jpg",
      content: {
        title: "Professional Licenses & Certifications",
        description: "Advocate License No. 4039/1993 (eligible for practice in all Nepali courts including Supreme Court). Notary Public License No. 170/2007 (authorized for translations, attestations, and certifications). Completed Arbitrator course in April 2024.",
        highlight: "Member: Nepal Bar Council, Nepal Notary Public Association, MAN, AHRI",
      },
    },
    {
      id: "education",
      name: "Education",
      icon: "BookOpen",
      image: "/images/blog-2.jpg",
      content: {
        title: "Academic Excellence",
        description: "LLM from National College, Lalitpur (2019-2022). MA in Human Resource Management from University of Canberra, Australia (2008-2009). LL.B. from Tribhuvan University, Kathmandu (1989-1992).",
        highlight: "2008 Endeavour Award Recipient from Australian Government",
      },
    },
    {
      id: "experience",
      name: "Experience",
      icon: "History",
      image: "/images/blog-1.jpg",
      content: {
        title: "Three Decades of Expertise",
        description: "Managing Director at KIPLAN since August 2014. Previously held HR advisory roles at Liverpool Associates in Tropical Health (LATH) and United Mission to Nepal (UMN), facilitating strategic HR plans and workforce projections.",
        highlight: "Developed Nepal's HRH Strategic Plan (2011-2015)",
      },
    },
  ],
  openingHours: "Sunday - Friday: 9:00 AM - 6:00 PM",
  openingHoursLabel: "Office Hours",
  ctaButtonText: "Learn More",
  yearBadge: "1993",
  yearBadgeLabel: "Licensed Since",
  quote: {
    prefix: "Philosophy",
    text: "Driven by a passion for justice and community service, I am committed to providing ethical representation and accessible legal solutions for all.",
    attribution: "Kamal Khadka",
  },
  founderPhotoAlt: "Kamal Khadka - Advocate and Notary Public",
  founderPhoto: "/images/hero-portrait.jpg",
};

// -----------------------------------------------------------------------------
// News Config (Adapted for Blog & Testimonials)
// -----------------------------------------------------------------------------
export interface NewsArticle {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface StoryQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface StoryTimelineItem {
  value: string;
  label: string;
}

export interface NewsConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  viewAllText: string;
  readMoreText: string;
  articles: NewsArticle[];
  testimonialsScriptText: string;
  testimonialsSubtitle: string;
  testimonialsMainTitle: string;
  testimonials: Testimonial[];
  storyScriptText: string;
  storySubtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyTimeline: StoryTimelineItem[];
  storyQuote: StoryQuote;
  storyImage: string;
  storyImageCaption: string;
}

export const newsConfig: NewsConfig = {
  scriptText: "Latest Articles",
  subtitle: "LEGAL INSIGHTS",
  mainTitle: "Blog & Resources",
  viewAllText: "View All Articles",
  readMoreText: "Read More",
  articles: [
    {
      id: 1,
      image: "/images/blog-1.jpg",
      title: "Understanding Notarization and Attestation in Nepal",
      excerpt: "A comprehensive guide to the notarization process, document attestation requirements, and MOFA legalization procedures for personal and commercial documents.",
      date: "March 2024",
      category: "Notary Services",
    },
    {
      id: 2,
      image: "/images/blog-2.jpg",
      title: "Navigating Company Registration Under Nepali Laws",
      excerpt: "Step-by-step guide to registering public and private companies in Nepal, including required documents, compliance requirements, and regulatory procedures.",
      date: "February 2024",
      category: "Corporate Law",
    },
    {
      id: 3,
      image: "/images/blog-3.jpg",
      title: "Intellectual Property Protection for Businesses",
      excerpt: "Essential information on trademark registration, copyright protection, and patent applications to safeguard your business innovations and brand identity.",
      date: "January 2024",
      category: "IP Law",
    },
    {
      id: 4,
      image: "/images/blog-4.jpg",
      title: "Common Pitfalls in Employment Contracts",
      excerpt: "Key considerations for drafting employment agreements, understanding labor laws, and avoiding common legal issues in employer-employee relationships.",
      date: "December 2023",
      category: "Labor Law",
    },
  ],
  testimonialsScriptText: "Client Words",
  testimonialsSubtitle: "TESTIMONIALS",
  testimonialsMainTitle: "What Clients Say",
  testimonials: [
    {
      name: "Ramesh Sharma",
      role: "Business Owner",
      text: "Kamal handled my company registration and notarization efficiently. His expertise in corporate law saved us significant time and ensured full compliance. Highly recommend!",
      rating: 5,
    },
    {
      name: "Sunita Patel",
      role: "Property Investor",
      text: "Exceptional service in resolving a complex property dispute. Mr. Khadka's knowledge of civil litigation and dedication to his clients is truly commendable.",
      rating: 5,
    },
    {
      name: "Anish Gurung",
      role: "Tech Entrepreneur",
      text: "Kamal helped us secure trademark protection for our startup. His understanding of IP law and professional approach made the entire process seamless.",
      rating: 5,
    },
    {
      name: "Priya Thapa",
      role: "NGO Director",
      text: "The notary services provided were prompt and professional. Document attestation for our international project was handled with great attention to detail.",
      rating: 5,
    },
    {
      name: "Bikash Adhikari",
      role: "Corporate Client",
      text: "We've worked with KIPLAN for years on various legal matters. Their comprehensive understanding of both legal and HR aspects adds tremendous value.",
      rating: 5,
    },
    {
      name: "Meera Joshi",
      role: "Family Law Client",
      text: "Compassionate and professional handling of a sensitive family matter. Mr. Khadka provided clear guidance and achieved a favorable outcome for our family.",
      rating: 5,
    },
  ],
  storyScriptText: "My Journey",
  storySubtitle: "ABOUT KAMAL KHADKA",
  storyTitle: "Three Decades of Legal Excellence",
  storyParagraphs: [
    "Kamal Khadka is a 58-year-old Nepali legal professional with a robust background in law and human resources management. As Managing Director and Law Practitioner at Kathmandu IP Law & Associates Nepal (KIPLAN) since August 2014, he specializes in drafting legal documents, court representation, notarizations, and corporate governance.",
    "His career spans over three decades, blending legal expertise with HR insights for comprehensive client support. Previously, he held HR advisory roles at organizations like Liverpool Associates in Tropical Health (LATH) and United Mission to Nepal (UMN), where he facilitated strategic HR plans, workforce projections, and performance systems.",
    "He resides in Dhapasi, Kathmandu, and is committed to justice, accessibility, and ethical practice in Nepal. His philosophy emphasizes ethical representation and accessible legal solutions for all.",
  ],
  storyTimeline: [
    { value: "30+", label: "Years Experience" },
    { value: "500+", label: "Cases Handled" },
    { value: "200+", label: "Companies Served" },
    { value: "100%", label: "Client Satisfaction" },
  ],
  storyQuote: {
    prefix: "Mission",
    text: "To provide accessible, ethical, and effective legal solutions that uphold justice and serve the best interests of my clients and community.",
    attribution: "Kamal Khadka",
  },
  storyImage: "/images/about-portrait.jpg",
  storyImageCaption: "Kamal Khadka - Managing Director, KIPLAN",
};

// -----------------------------------------------------------------------------
// Contact Form Config
// -----------------------------------------------------------------------------
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
}

export interface ContactFormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  visitDateLabel: string;
  visitorsLabel: string;
  visitorsOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactFormConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  contactInfoTitle: string;
  contactInfo: ContactInfoItem[];
  form: ContactFormFields;
  privacyNotice: string;
  formEndpoint: string;
}

export const contactFormConfig: ContactFormConfig = {
  scriptText: "Contact",
  subtitle: "GET IN TOUCH",
  mainTitle: "Let's Discuss Your Legal Needs",
  introText: "Ready to discuss your legal requirements? Contact me for a consultation. Initial consultations are free, and all inquiries are handled with strict confidentiality.",
  contactInfoTitle: "Contact Information",
  contactInfo: [
    {
      icon: "MapPin",
      label: "Office Address",
      value: "Civil Trade Centre (CTC) Mall, 4th Floor, Sundhara, Kathmandu, Nepal",
      subtext: "Visit us during office hours",
    },
    {
      icon: "Phone",
      label: "Phone Numbers",
      value: "+977 1 5312040 (Work)",
      subtext: "+977 9849 530970 (Mobile)",
    },
    {
      icon: "Mail",
      label: "Email Address",
      value: "kbkamal@gmail.com",
      subtext: "Response within 24 hours",
    },
    {
      icon: "Clock",
      label: "Business Hours",
      value: "Sunday - Friday: 9:00 AM - 6:00 PM",
      subtext: "Saturday: Closed",
    },
  ],
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "Enter your full name",
    emailLabel: "Email Address",
    emailPlaceholder: "Enter your email address",
    phoneLabel: "Phone Number",
    phonePlaceholder: "Enter your phone number",
    visitDateLabel: "Preferred Consultation Date",
    visitorsLabel: "Service Type",
    visitorsOptions: ["Legal Consultation", "Notary Services", "IP Protection", "Visual Aid, Application"],
    messageLabel: "Your Message",
    messagePlaceholder: "Describe your legal requirements...",
    submitText: "Send Message",
    submittingText: "Sending...",
    successMessage: "Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.",
    errorMessage: "Sorry, there was an error sending your message. Please try again or contact me directly by phone.",
  },
  privacyNotice: "Your information is kept strictly confidential and will only be used to respond to your inquiry.",
  formEndpoint: "https://formspree.io/f/xnqevjdr",
};

// -----------------------------------------------------------------------------
// Footer Config
// -----------------------------------------------------------------------------
export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  icon: string;
  text: string;
}

export interface EcosystemLink {
  name: string;
  href: string;
  external: boolean;
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  contactHeading: string;
  contactItems: FooterContactItem[];
  ecosystemLinks: EcosystemLink[];
  copyrightText: string;
  legalLinks: string[];
  icpText: string;
  backToTopText: string;
  developerAttribution: string;
}

export const footerConfig: FooterConfig = {
  brandName: "Kamal Khadka",
  tagline: "Legal Excellence Since 1993",
  description: "Advocate, Notary Public and AI Practitioner",
  socialLinks: [
    { icon: "Facebook", label: "Facebook", href: "#" },
    { icon: "Twitter", label: "Twitter", href: "#" },
    { icon: "Youtube", label: "YouTube", href: "#" },
    { icon: "Linkedin", label: "LinkedIn", href: "#" },
    { icon: "Instagram", label: "Instagram", href: "#" },
  ],
  linkGroups: [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About Me", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "KIPLAN", href: "/kiplan" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Legal Services", href: "/services" },
        { name: "Notary Services", href: "/services" },
        { name: "IP Protection", href: "/services" },
        { name: "Arbitration", href: "/services" },
        { name: "Digital / Technology Initiatives", href: "/services/digital-technology" },
      ],
    },
  ],
  contactHeading: "Office Address",
  contactItems: [
    { icon: "MapPin", text: "Civil Trade Centre (CTC) Mall, Sundhara, Kathmandu, Nepal" },
    { icon: "Phone", text: "+977 1 5312040 | +977 9849 530970" },
    { icon: "Mail", text: "kbkamal@gmail.com" },
  ],
  ecosystemLinks: [
    { name: "KIPLAN", href: "/kiplan", external: false },
    { name: "KIPLANScholar", href: "https://kiplanscholar.com/", external: true },
    { name: "KIPLANLaw", href: "https://kiplan.com.np/", external: true },
    { name: "KIPLANNotary", href: "/kiplan/kiplannotary", external: false },
  ],
  copyrightText: "© 2024 Kamal Khadka. All rights reserved.",
  legalLinks: ["Privacy Policy", "Terms of Use", "Disclaimer"],
  icpText: "Kathmandu IP Law & Associates Nepal (KIPLAN)",
  backToTopText: "Back to Top",
  developerAttribution: "Developed by KIPLAN Digi Tech",
};

// -----------------------------------------------------------------------------
// Scroll To Top Config
// -----------------------------------------------------------------------------
export interface ScrollToTopConfig {
  ariaLabel: string;
}

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: "Back to top",
};