import { ProfessionalServices } from '../sections/ProfessionalServices';
import { useSEO } from '../hooks/useSEO';

// The real Professional Services page: Legal Services and Notarial
// Services content is reproduced verbatim from Kamal Khadka's existing
// KIPLAN Law & Notary site (notaryinnepal.com) per instruction. Digital
// Technology content is newly authored within the approved scope. See
// src/data/servicesContent.ts for the content and sourcing notes.
export function Services() {
  useSEO({
    title: 'Professional Services — Legal, Notary & Digital Technology | Kamal Khadka',
    description: "Explore Kamal Khadka's professional services: legal practice, notarial services, and digital and technology initiatives.",
  });

  return <ProfessionalServices />;
}