import { legalServices } from '../data/servicesContent';
import { ServiceCard } from '../sections/ServiceCard';

export function ServicesLegal() {
  return (
    <section className="section-padding pt-40 md:pt-48 pb-20 md:pb-28 relative overflow-hidden">
      <div className="container-custom relative">
        <div className="text-center mb-12">
          <span className="font-script text-3xl text-gold-400 block mb-2">What I Offer</span>
          <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            Legal Services
          </span>
          <h1 className="font-serif text-h1 text-white">Legal</h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {legalServices.map((card) => (
            <ServiceCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}