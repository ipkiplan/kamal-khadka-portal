/**
 * Professional Services content.
 *
 * SOURCE FOR LEGAL & NOTARIAL SECTIONS: https://www.notaryinnepal.com/
 * (KIPLAN Law & Notary Office — Kamal Khadka's own existing site).
 * Card headings, descriptions, and service-item wording below are
 * reproduced verbatim from that site, as instructed. Do not shorten,
 * paraphrase, or "improve" this text without an explicit editorial pass.
 *
 * DIGITAL TECHNOLOGY: no existing source content to preserve — authored
 * fresh, scoped to what's already been approved for this section (AI
 * application/integration work, digital transformation, practical
 * professional/organizational technology use). No specific products,
 * clients, or certifications are claimed.
 */

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  items: string[];
}

export const legalServices: ServiceCard[] = [
  {
    icon: "Users",
    title: "Family Law",
    description:
      "Expert divorce lawyer Nepal services, court marriage registration, inheritance disputes, and child custody matters.",
    items: ["Divorce Proceedings", "Court Marriage Registration Nepal", "Inheritance Disputes", "Child Custody"],
  },
  {
    icon: "Building2",
    title: "Corporate & Business Law",
    description:
      "Leading corporate lawyer Kathmandu services for business formation, compliance, and commercial disputes.",
    items: ["Company Registration", "Contract Drafting & Review", "Commercial Litigation", "Regulatory Compliance"],
  },
  {
    icon: "Lightbulb",
    title: "Intellectual Property Law",
    description:
      "Premier intellectual property lawyer Nepal for trademark registration Nepal, copyright, and patent protection.",
    items: ["Trademark Registration", "Copyright Protection", "Patent Applications", "IP Litigation"],
  },
  {
    icon: "Scale",
    title: "Litigation & Dispute Resolution",
    description:
      "Comprehensive litigation services Nepal including civil, criminal, and commercial disputes.",
    items: ["Civil Litigation", "Criminal Defense", "Commercial Disputes", "Alternative Dispute Resolution"],
  },
  {
    icon: "Home",
    title: "Land & Property Disputes",
    description:
      "Expert land dispute lawyer Nepal for property transactions, boundary disputes, and real estate litigation.",
    items: ["Property Transactions", "Boundary Disputes", "Land Registration", "Real Estate Litigation"],
  },
  {
    icon: "Briefcase",
    title: "Labor & Employment Law",
    description:
      "Comprehensive employment law services for both employers and employees in Nepal.",
    items: ["Employment Contracts", "Workplace Disputes", "Termination Issues", "Labour Court Representation"],
  },
];

export const notarialServices: ServiceCard[] = [
  {
    icon: "FileText",
    title: "Power of Attorney Nepal",
    description:
      "Professional power of attorney Nepal drafting and attestation services for all legal purposes.",
    items: ["General Power of Attorney", "Special Power of Attorney", "Property POA", "International POA"],
  },
  {
    icon: "PenLine",
    title: "Affidavit & Declaration",
    description:
      "Expert affidavit drafting Nepal for various legal purposes with proper notarization.",
    items: ["Affidavit of Support", "Declaration of Name", "Affidavit of Single Status", "Custom Affidavits"],
  },
  {
    icon: "CheckCircle",
    title: "Document Attestation Kathmandu",
    description:
      "Complete document attestation Kathmandu including MOFA attestation Nepal.",
    items: ["Educational Documents", "Personal Documents", "Commercial Documents", "MOFA Legalization"],
  },
  {
    icon: "Globe",
    title: "Official Document Translation Nepal",
    description:
      "Certified official document translation Nepal with notarization for international use.",
    items: ["Legal Document Translation", "Academic Translation", "Business Translation", "Certified Translation"],
  },
  {
    icon: "FileCheck",
    title: "Certificate Attestation",
    description:
      "Complete attestation services for citizenship, marriage, and birth certificates.",
    items: ["Citizenship Certificate", "Marriage Certificate", "Birth Certificate", "Death Certificate"],
  },
  {
    icon: "Stamp",
    title: "Apostille Service Nepal",
    description:
      "Guidance on apostille service Nepal and document legalization process for international use.",
    items: ["Document Legalization", "Embassy Attestation", "International Recognition", "Consular Services"],
  },
];

export const digitalServices: ServiceCard[] = [
  {
    icon: "Brain",
    title: "AI-Assisted Legal & Professional Workflows",
    description:
      "Practical use of AI tools to support legal research, document drafting, and day-to-day professional workflows — applied with human review at every step.",
    items: ["AI-Assisted Research", "Document Drafting Support", "Workflow Automation", "Professional Productivity Tools"],
  },
  {
    icon: "Cpu",
    title: "Digital Transformation & Technology Adoption",
    description:
      "Helping organizations and professionals adopt practical digital tools and processes suited to their actual needs, rather than technology for its own sake.",
    items: ["Process Digitization", "Technology Adoption Planning", "Digital Systems Setup", "Organizational Training"],
  },
  {
    icon: "Sparkles",
    title: "AI Application & Integration",
    description:
      "Hands-on AI application development and integration work, connecting practical AI tools into existing professional and organizational workflows.",
    items: ["AI Application Development", "AI Integration into Existing Systems", "Information Access Tools", "Problem-Solving Support"],
  },
];