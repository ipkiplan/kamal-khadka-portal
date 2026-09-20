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
  professionalIdentity: string;
  ctaButtonText: string;
  ctaTarget: string;
  stats: HeroStat[];
  decorativeText: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "Professional Practice · Innovation",
  mainTitle: "Kamal Khadka",
  professionalIdentity: "ADVOCATE · NOTARY PUBLIC · AI PRACTITIONER",
  ctaButtonText: "Explore My Work",
  ctaTarget: "#wines",
  stats: [
    { value: 20, suffix: "+", label: "Years of HR Professional Experience" },
    { value: 13, suffix: "+", label: "Years of Notarial Experience" },
    { value: 11, suffix: "+", label: "Years with KIPLAN" },
  ],
  decorativeText: "Advocate · Notary Public · AI Practitioner",
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
  ctaText: string;
  ctaHref: string;
  ctaExternal: boolean;
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
  mainTitle: "Professional Services",
  wines: [
    {
      id: "hr",
      name: "HR & Development",
      subtitle: "Human Resources & International Development",
      year: "",
      image: "/images/portfolio-2.jpg",
      filter: "brightness(1.1) hue-rotate(-10deg)",
      glowColor: "bg-emerald-900/20",
      description: "My early professional career developed in Human Resources, an experience that shaped my understanding of people, organizations and professional development. After completing my bachelor's degree in law, I initially tried to pursue law and HR in parallel before choosing HR as my primary professional path. I later pursued professional HR education in Australia through the Federal Government of Australia. After returning to Nepal in 2010, I continued my work in the international development sector. In 2012–2013, I served as Technical Advisor/National HR Officer supporting the Ministry of Health and Population, working with both public and private employers. I helped organize workshops that brought different employers and stakeholders together to discuss human-resource challenges and needs. I also contributed to the development of a Country Profile, Human Resources for Health (HRH) Strategy and Workforce Plan. That experience continues to influence my interest in education, opportunity and human development, including through KIPLANScholar, which seeks to help Nepali students and other opportunity seekers find pathways for education, research and professional growth.",
      tastingNotes: "",
      ctaText: "Explore KIPLANScholar",
      ctaHref: "https://kiplanscholar.com/",
      ctaExternal: true,
    },
    {
      id: "notary",
      name: "Notary Services",
      subtitle: "Attestation & Certification",
      year: "",
      image: "/images/portfolio-4.jpg",
      filter: "brightness(1.15) sepia(0.2)",
      glowColor: "bg-amber-600/20",
      description: "Notarial practice has become an important part of my professional life and continues to be an area in which accuracy, responsibility and public trust matter greatly. My notarial experience spans more than a decade and has involved supporting individuals, businesses and professionals with document-related needs. Notarial work often sits at an important point where documents, identity, transactions and formal procedures come together. For that reason, careful examination and responsible handling of documents are essential. I aim to provide services in a practical and professional manner while helping people understand what is required of them. My experience in law also provides a useful foundation for understanding the legal context surrounding many notarial matters. At the same time, I recognize that clients often value clarity and convenience as much as technical accuracy. The Notary Services page provides more information about the services and the ways in which I can assist.",
      tastingNotes: "",
      ctaText: "Explore Notary Services",
      ctaHref: "/services/notary",
      ctaExternal: false,
    },
    {
      id: "legal",
      name: "Legal Services",
      subtitle: "Civil & Professional Practice",
      year: "",
      image: "/images/portfolio-1.jpg",
      filter: "",
      glowColor: "bg-blue-900/20",
      description: "Law remains an important foundation of my professional practice and continues to shape the way I approach professional problems and decisions. Legal issues can arise in personal matters, business activities, property transactions, intellectual property and disputes. People and organizations often need more than a formal legal answer; they need to understand what their options are and what those options may mean in practice. My approach is therefore to provide practical legal guidance that helps clients make informed decisions. Experience across different professional environments has also taught me to look at legal questions in their wider human and organizational context. Where appropriate, legal advice should help prevent problems as well as respond to them after they arise. Good legal practice is not only about resolving problems; it is about helping people understand their rights, responsibilities and choices. The detailed Legal Services page provides further information about the areas of practice and the support available.",
      tastingNotes: "\u201cGood legal practice is not only about resolving problems; it is about helping people understand their rights, responsibilities and choices.\u201d",
      ctaText: "Explore Legal Services",
      ctaHref: "/services",
      ctaExternal: false,
    },
    {
      id: "ai",
      name: "AI Practice",
      subtitle: "Digital Technology & Innovation",
      year: "",
      image: "/images/portfolio-3.jpg",
      filter: "brightness(1.2) hue-rotate(20deg)",
      glowColor: "bg-purple-900/20",
      description: "My professional interests are increasingly moving toward artificial intelligence, digital technology, education and practical innovation. I am interested not simply in learning about technology, but in understanding how it can become useful in professional and everyday life. Contemporary technology is already available to most people through devices such as mobile phones, computers and online services. The real opportunity is to help people understand what these tools can do and how they can use them confidently and responsibly. I am particularly interested in bringing AI into professional practice rather than treating it only as an abstract or technical subject. Different people will need different approaches, whether they are students, researchers, professionals, entrepreneurs or ordinary users seeking greater convenience and capability. This emerging work will gradually include practical projects, AI classes, training, workshops, videos, podcasts and other forms of knowledge sharing. My broader aim is to help people make practical use of contemporary technology so that it supports learning, work, creativity, productivity and meaningful human opportunity.",
      tastingNotes: "",
      ctaText: "Explore Digital & Technology",
      ctaHref: "/services/digital-technology",
      ctaExternal: false,
    },
  ],
  features: [],
  quote: {
    text: "",
    attribution: "",
    prefix: "",
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
  ctaText: string;
  ctaHref: string;
}

export interface WineryCarouselConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  locationTag: string;
  slides: CarouselSlide[];
}

export const wineryCarouselConfig: WineryCarouselConfig = {
  scriptText: "Years of Practice",
  subtitle: "LEGAL EXPERIENCE",
  mainTitle: "Legal Practice",
  locationTag: "Kathmandu, Nepal",
  slides: [
    {
      image: "/images/portfolio-1.jpg",
      title: "Civil Litigation & Dispute Resolution",
      subtitle: "Practical Resolution & Representation",
      area: "",
      unit: "",
      description: "Disagreements can arise between individuals, businesses, organizations and other parties for many different reasons. Not every dispute needs to proceed immediately to a courtroom, and early understanding of the issues can sometimes help parties find a practical solution. Where litigation becomes necessary, careful preparation and effective legal representation are essential. Civil disputes may involve contracts, property, business relationships, personal matters or other legal rights and obligations. My approach is to help clients understand the nature of the dispute, the available options and the possible consequences of each course of action. The objective is to pursue a practical and responsible resolution while protecting the client's legal interests.",
      ctaText: "Explore Legal Services",
      ctaHref: "/services",
    },
    {
      image: "/images/portfolio-2.jpg",
      title: "Corporate & Business Law",
      subtitle: "Governance, Contracts & Compliance",
      area: "",
      unit: "",
      description: "Corporate and business matters form an important part of legal practice, from establishing an enterprise to managing its continuing legal responsibilities. Businesses regularly encounter questions involving governance, contracts, compliance, transactions and relationships with others. Practical legal guidance can help owners and organizations understand their obligations and make informed decisions. The objective is not simply to complete a legal procedure, but to help clients understand the legal consequences of important business decisions. Sound legal advice can also help identify and address potential problems before they become disputes. My approach is to provide practical guidance that supports responsible and informed business decisions.",
      ctaText: "Explore Legal Services",
      ctaHref: "/services",
    },
    {
      image: "/images/portfolio-3.jpg",
      title: "Intellectual Property",
      subtitle: "Protecting Ideas & Innovation",
      area: "",
      unit: "",
      description: "Ideas, brands, creative works and innovations can represent significant personal and commercial value. Intellectual property law helps individuals and organizations understand how those assets may be protected and used. Businesses increasingly need to consider intellectual property when developing brands, creating content, building products or introducing new ideas. Appropriate legal guidance can help identify what may be protectable and what steps may be appropriate to safeguard those interests. It can also help people understand the importance of respecting the intellectual property rights of others. My aim is to provide practical guidance so that valuable ideas and creative work can be developed and protected with greater confidence.",
      ctaText: "Explore Legal Services",
      ctaHref: "/services",
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
  scriptText: "My Journey",
  subtitle: "ABOUT ME",
  mainTitle: "My Journey",
  introText: "My journey began with a law degree and an Advocate licence in 1993, but my professional path soon expanded beyond legal practice. I began my career in Human Resources and later worked with INGOs and international organizations in different professional capacities. My HR career took me to Australia for further professional education, and after returning to Nepal I continued working in the international development sector. In 2012\u20132013, I contributed to national Human Resources for Health work while supporting the Ministry of Health and Population. The 2015 earthquake further changed my perspective on professional purpose and community service. I later returned to law and notarial practice, bringing with me experience from HR, international development and organizational work. Today, my journey is evolving again toward artificial intelligence, digital technology, education and practical innovation.",
  timeline: [
    { year: "1993", event: "Advocate Licence" },
    { year: "2010", event: "Returned to Nepal" },
    { year: "2012", event: "Liverpool Associates (Tropical Health)" },
    { year: "2013", event: "National HR Contribution" },
  ],
  tabs: [
    {
      id: "credentials",
      name: "Credentials",
      icon: "Award",
      image: "/images/journey-portrait.png",
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
      image: "/images/journey-portrait.png",
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
      image: "/images/journey-portrait.png",
      content: {
        title: "Three Decades of Expertise",
        description: "Managing Director at KIPLAN since August 2014. Previously held HR advisory roles at Liverpool Associates in Tropical Health (LATH) and United Mission to Nepal (UMN), facilitating strategic HR plans and workforce projections.",
        highlight: "Developed Nepal's HRH Strategic Plan (2011-2015)",
      },
    },
  ],
  openingHours: "Sunday - Friday: 9:00 AM - 6:00 PM",
  openingHoursLabel: "Office Hours",
  ctaButtonText: "Read My Journey",
  yearBadge: "1993",
  yearBadgeLabel: "Advocate Licence",
  quote: {
    prefix: "Philosophy",
    text: "Driven by a passion for justice and community service, I am committed to providing ethical representation and accessible legal solutions for all.",
    attribution: "Kamal Khadka",
  },
  founderPhotoAlt: "Kamal Khadka - Advocate and Notary Public",
  founderPhoto: "/images/journey-portrait.png",
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
  formEndpoint: "https://formspree.io/f/xzebzgpz",
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

interface EcosystemLink {
  name: string;
  href: string;
  external: boolean;
  description: string;
}

export interface LegalLink {
  name: string;
  href: string;
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
  legalLinks: LegalLink[];
  icpText: string;
  backToTopText: string;
  developerAttribution: string;
}

export const footerConfig: FooterConfig = {
  brandName: "Kamal Khadka",
  tagline: "Legal Excellence Since 1993",
  description: "Advocate, Notary Public and AI Practitioner",

  socialLinks: [
    {
  icon: "Facebook",
  label: "Facebook",
  href: "https://www.facebook.com/kbkamalfb/",
},
    {
      icon: "Twitter",
      label: "Twitter",
      href: "YOUR_TWITTER_PROFILE_URL",
    },
    {
      icon: "Youtube",
      label: "YouTube",
      href: "YOUR_YOUTUBE_CHANNEL_URL",
    },
    {
      icon: "Linkedin",
      label: "LinkedIn",
      href: "https://np.linkedin.com/in/kamal-khadka-6465b19",
    },
    {
      icon: "Instagram",
      label: "Instagram",
      href: "YOUR_INSTAGRAM_PROFILE_URL",
    },
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
  {
    name: "KIPLAN Scholar",
    href: "https://kiplanscholar.com/",
    external: true,
    description:
      "Created for students, researchers and entrepreneurs seeking opportunities beyond borders. Explore scholarships, fellowships and grants from around the world—because an opportunity discovered today may become a turning point in your life.",
  },
  {
    name: "KIPLAN Law",
    href: "https://kiplan.com.np/",
    external: true,
    description:
      "Law is part of everyday life, protecting property, rights, security, liberty, business and family interests. Visit KIPLAN Law to learn more about legal services and the role of law in our lives.",
  },
  {
    name: "KIPLAN Notary",
    href: "https://kiplannotary.vercel.app",
    external: true,
    description:
      "Notarial services are an important part of modern personal, educational, business and international transactions. Visit KIPLAN Notary to learn more about document certification, attestation and translation.",
  },
],
  copyrightText: "© 2024 Kamal Khadka. All rights reserved.",
  legalLinks: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms-of-use" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
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