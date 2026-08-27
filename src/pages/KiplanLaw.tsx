import { ArrowUpRight } from 'lucide-react';

const KIPLANLAW_SERVICES_URL = 'https://kiplan.com.np/ourr-services/';

interface LawAreaCardProps {
  title: string;
  description: string;
}

// All cards currently link to KIPLANLaw's confirmed, real Services page.
// Individual practice areas were verified as genuinely offered by the
// live site, but no distinct per-area URL could be confirmed for any of
// them, so each card points to the one verified real destination rather
// than an invented specific page.
function LawAreaCard({ title, description }: LawAreaCardProps) {
  return (
    <div className="bg-white/5 rounded-lg border border-white/10 p-6 flex flex-col h-full">
      <h3 className="font-serif text-lg text-white mb-3">{title}</h3>
      <p className="text-sm text-white/65 leading-relaxed mb-6 flex-1">{description}</p>
      <a
        href={KIPLANLAW_SERVICES_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-gold-400 text-sm hover:text-gold-300 transition-colors group w-fit"
      >
        Read more
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
}

export function KiplanLaw() {
  return (
    <section className="section-padding pt-40 md:pt-48 pb-20 md:pb-28 relative overflow-hidden">
      <div className="container-custom relative">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-gold-400 block mb-2">KIPLAN</span>
          <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            Legal &amp; Professional Services
          </span>
          <h1 className="font-serif text-h1 text-white mb-4">KIPLANLaw</h1>
          <p className="text-white/65 text-sm md:text-base max-w-2xl mx-auto">
            When legal questions, obligations, transactions, or disputes arise, appropriate legal
            guidance can help people and organizations make informed decisions and protect their
            interests. KIPLANLaw provides that guidance across several core areas of practice.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <LawAreaCard
            title="Corporate &amp; Business Law"
            description="From registering a new company to navigating day-to-day compliance, businesses face legal questions at every stage. Whether you're an individual founder, a growing SME, or a larger organization, having sound corporate legal guidance helps you make decisions with confidence rather than guesswork."
          />
          <LawAreaCard
            title="Intellectual Property"
            description="Ideas, brands, and creative work often represent real, protectable value. Intellectual property guidance helps individuals and businesses understand what can be protected and how — relevant to anyone building something worth safeguarding."
          />
          <LawAreaCard
            title="Family Law"
            description="Family legal matters are often personal and can be difficult to navigate alone. Whether the situation involves marriage, separation, or other family circumstances, informed legal guidance can help people understand their options and move forward with clarity."
          />
          <LawAreaCard
            title="Property Law"
            description="Property transactions and disputes carry real financial and personal stakes. Legal guidance in this area helps individuals and organizations understand their position, whether they're buying, selling, or resolving a disagreement over property."
          />
          <LawAreaCard
            title="Immigration"
            description="Immigration matters involve procedures and requirements that can be difficult to navigate without guidance. Legal support here is aimed at helping individuals understand and work through the relevant processes with clarity."
          />
          <LawAreaCard
            title="Dispute Resolution &amp; Litigation"
            description="Not every disagreement needs to end in a courtroom, but when disputes do arise — civil, criminal, or commercial — having experienced legal representation matters. This area covers guidance and representation across the range of disputes individuals and businesses may face."
          />
        </div>
      </div>
    </section>
  );
}