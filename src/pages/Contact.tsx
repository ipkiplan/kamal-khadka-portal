import { ContactForm } from '../sections/ContactForm';
import { useSEO } from '../hooks/useSEO';

export function Contact() {
  useSEO({
    title: 'Contact Kamal Khadka — Advocate & Notary Public',
    description: 'Get in touch with Kamal Khadka for legal consultations, notarial services, or professional enquiries.',
  });

  return <ContactForm />;
}