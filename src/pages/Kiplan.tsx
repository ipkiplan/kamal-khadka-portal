import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DestinationCardProps {
  title: string;
  description: string;
  linkLabel: string;
  href: string;
  external?: boolean;
}

function DestinationCard({ title, description, linkLabel, href, external }: DestinationCardProps) {
  const linkClasses =
    'inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-gold-500 text-white text-sm hover:bg-gold-400 transition-colors group w-fit';

  return (
    <div className="bg-white/5 rounded-lg border border-white/10 p-6 md:p-8 flex flex-col h-full">
      <h3 className="font-serif text-h3 text-white mb-3">{title}</h3>
      <p className="text-sm text-white/65 leading-relaxed mb-6 flex-1">{description}</p>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
          {linkLabel}
          <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      ) : (
        <Link to={href} className={linkClasses}>
          {linkLabel}
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}

export function Kiplan() {
  return (
    <section className="section-padding pt-40 md:pt-48 pb-20 md:pb-28 relative overflow-hidden">
      <div className="container-custom relative">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-gold-400 block mb-2">KIPLAN</span>
          <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            Kathmandu IP Law &amp; Associates Nepal
          </span>
          <h1 className="font-serif text-h1 text-white mb-4">The KIPLAN Ecosystem</h1>
          <p className="text-white/65 text-sm md:text-base max-w-2xl mx-auto">
            Three areas of practice, each with its own dedicated home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <DestinationCard
            title="KIPLANScholar"
            description="A dedicated platform for scholarships, study opportunities, and educational guidance for Nepali students seeking to study abroad."
            linkLabel="Visit KIPLANScholar"
            href="https://kiplanscholar.com"
            external
          />

          <DestinationCard
            title="KIPLANLaw"
            description="Full-service legal practice covering corporate law, intellectual property, family law, property law, and litigation in Kathmandu, Nepal."
            linkLabel="Visit KIPLANLaw"
            href="https://kiplan.com.np"
            external
          />

          <DestinationCard
            title="KIPLANNotary"
            description="A dedicated KIPLANNotary portal is coming soon. In the meantime, notarial services — power of attorney, affidavits, attestation, translation, and apostille support — are available here."
            linkLabel="View Notarial Services"
            href="/services/notary"
          />
        </div>
      </div>
    </section>
  );
}