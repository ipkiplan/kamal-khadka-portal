import { notarialServices } from '../data/servicesContent';
import { ServiceCard } from '../sections/ServiceCard';

export function ServicesNotary() {
  return (
    <section className="section-padding pt-40 md:pt-48 pb-20 md:pb-28 relative overflow-hidden">
      <div className="container-custom relative">
        <div className="text-center mb-4">
          <span className="font-script text-3xl text-gold-400 block mb-2">What I Offer</span>
          <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            Notary Public
          </span>
          <h1 className="font-serif text-h1 text-white mb-4">
            Notarial Services Kathmandu - Quick &amp; Reliable
          </h1>
          <p className="text-white/60 text-sm md:text-base">
            Same-Day/Quick Notary Service in Kathmandu │ Online Options Available
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {notarialServices.map((card) => (
            <ServiceCard key={card.title} card={card} />
          ))}
        </div>

        <p className="text-center text-white/50 text-sm mt-12">
          Looking for "notary near me Kathmandu"?
        </p>
      </div>
    </section>
  );
}