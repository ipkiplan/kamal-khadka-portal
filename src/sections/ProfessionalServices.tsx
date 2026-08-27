import { useEffect, useRef } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { legalServices, notarialServices, digitalServices } from '../data/servicesContent';
import { ServiceCard } from './ServiceCard';

// A future KIPLAN property that isn't live yet — shown as a clearly
// non-functional, muted badge rather than a clickable/broken link.
function FutureDestinationBadge({ domain }: { domain: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-white/15 text-white/45 text-sm cursor-default select-none"
      title="Not yet live"
    >
      <ExternalLink className="w-3.5 h-3.5" />
      Coming soon at {domain}
    </span>
  );
}

export function ProfessionalServices() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Intro */}
      <section className="section-padding pt-40 md:pt-48 pb-16 md:pb-20 relative overflow-hidden">
        <div className="container-custom relative text-center">
          <span className="font-script text-3xl text-gold-400 block mb-2 fade-up">What I Offer</span>
          <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block fade-up">
            Comprehensive Professional Solutions
          </span>
          <h1 className="font-serif text-h1 text-white mb-6 fade-up">Professional Services</h1>
          <p className="text-white/65 text-sm md:text-base max-w-2xl mx-auto fade-up">
            Legal advocacy, notarial services, and practical digital technology work — three
            areas of professional practice, each growing into a dedicated home of its own
            within the broader KIPLAN ecosystem.
          </p>
        </div>
      </section>

      {/* Legal Services */}
      <section className="pb-20 md:pb-28 relative overflow-hidden">
        <div className="container-custom relative">
          <div className="fade-up text-center mb-12">
            <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">Legal Practice</span>
            <h2 className="font-serif text-h2 text-white">Legal Services</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {legalServices.map((card) => (
              <ServiceCard key={card.title} card={card} />
            ))}
          </div>

          <div className="fade-up flex flex-col items-center gap-3 text-center">
            <p className="text-white/50 text-sm">Detailed legal services are moving to a dedicated home</p>
            <FutureDestinationBadge domain="KIPLANLaw.com" />
          </div>
        </div>
      </section>

      {/* Notarial Services */}
      <section className="pb-20 md:pb-28 relative overflow-hidden">
        <div className="container-custom relative">
          <div className="fade-up text-center mb-3">
            <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">Notary Public</span>
            <h2 className="font-serif text-h2 text-white">Notarial Services</h2>
          </div>
          <p className="fade-up text-center text-white/50 text-sm mb-12">
            Same-Day/Quick Notary Service in Kathmandu — online options available
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {notarialServices.map((card) => (
              <ServiceCard key={card.title} card={card} />
            ))}
          </div>

          <div className="fade-up flex flex-col items-center gap-3 text-center">
            <p className="text-white/50 text-sm">Detailed notarial services are moving to a dedicated home</p>
            <FutureDestinationBadge domain="KIPLANNotary.com" />
          </div>
        </div>
      </section>

      {/* Digital Technology */}
      <section className="pb-20 md:pb-28 relative overflow-hidden">
        <div className="container-custom relative">
          <div className="fade-up text-center mb-12">
            <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
              AI Practitioner | HRM Specialist
            </span>
            <h2 className="font-serif text-h2 text-white">Digital Technology</h2>
            <p className="text-white/65 text-sm md:text-base max-w-2xl mx-auto mt-4">
              Practical application of digital technology and AI to professional work,
              organizations, productivity, information access, and problem-solving.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {digitalServices.map((card) => (
              <ServiceCard key={card.title} card={card} />
            ))}
          </div>

          <div className="fade-up flex flex-col items-center gap-3 text-center">
            <p className="text-white/50 text-sm">The broader KIPLAN digital-technology ecosystem lives at</p>
            <FutureDestinationBadge domain="KIPLAN.com.np" />
          </div>
        </div>
      </section>

      {/* KIPLAN ecosystem gateway */}
      <section className="pb-24 md:pb-32 relative overflow-hidden">
        <div className="container-custom relative">
          <div className="fade-up bg-white/5 border border-white/10 rounded-lg p-8 md:p-12 text-center">
            <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">The KIPLAN Ecosystem</span>
            <h2 className="font-serif text-h3 text-white mb-4">One Portal, Growing Into Dedicated Properties</h2>
            <p className="text-white/60 text-sm max-w-2xl mx-auto mb-8">
              This portal is the gateway. Legal, notarial, and digital-technology work are each
              growing into their own dedicated destination within the KIPLAN ecosystem.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <FutureDestinationBadge domain="KIPLANLaw.com" />
              <FutureDestinationBadge domain="KIPLANNotary.com" />
              <FutureDestinationBadge domain="KIPLAN.com.np" />
              <Link
                to="/kiplan/kiplanscholar"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-gold-500 text-white text-sm hover:bg-gold-400 transition-colors group"
              >
                Visit KIPLANScholar
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}