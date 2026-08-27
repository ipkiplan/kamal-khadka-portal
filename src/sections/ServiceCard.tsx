import {
  Users, Building2, Lightbulb, Scale, Home, Briefcase,
  FileText, PenLine, CheckCircle, Globe, FileCheck, Stamp,
  Brain, Cpu, Sparkles, Check,
} from 'lucide-react';
import type { ServiceCard as ServiceCardData } from '../data/servicesContent';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users, Building2, Lightbulb, Scale, Home, Briefcase,
  FileText, PenLine, CheckCircle, Globe, FileCheck, Stamp,
  Brain, Cpu, Sparkles,
};

export function ServiceCard({ card }: { card: ServiceCardData }) {
  const IconComponent = iconMap[card.icon] || FileText;

  return (
    <div className="bg-white/5 rounded-lg border border-white/10 p-6 h-full flex flex-col">
      <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mb-4">
        <IconComponent className="w-5 h-5 text-gold-500" />
      </div>
      <h3 className="font-serif text-lg text-white mb-2">{card.title}</h3>
      <p className="text-sm text-white/65 leading-relaxed mb-4">{card.description}</p>
      <ul className="space-y-2 mt-auto pt-2">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-white/60">
            <Check className="w-3.5 h-3.5 text-gold-500 mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}