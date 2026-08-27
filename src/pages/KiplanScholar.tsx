import { ArrowUpRight } from 'lucide-react';

const KIPLANSCHOLAR_URL = 'https://kiplanscholar.com/';

interface ScholarAreaCardProps {
  title: string;
  description: string;
}

// All six areas currently link to the same destination address.
// KIPLANScholar's live site navigates via internal application state
// rather than distinct URL routes, so there is no separate address for
// "Opportunities", "My Eligibility", etc. to link to individually —
// verified directly against the live site rather than assumed.
function ScholarAreaCard({ title, description }: ScholarAreaCardProps) {
  return (
    <div className="bg-white/5 rounded-lg border border-white/10 p-6 flex flex-col h-full">
      <h3 className="font-serif text-lg text-white mb-3">{title}</h3>
      <p className="text-sm text-white/65 leading-relaxed mb-6 flex-1">{description}</p>
      <a
        href={KIPLANSCHOLAR_URL}
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

export function KiplanScholar() {
  return (
    <section className="section-padding pt-40 md:pt-48 pb-20 md:pb-28 relative overflow-hidden">
      <div className="container-custom relative">
        <div className="text-center mb-16">
          <span className="font-script text-3xl text-gold-400 block mb-2">KIPLAN</span>
          <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            Opportunity &amp; Guidance Platform
          </span>
          <h1 className="font-serif text-h1 text-white mb-4">KIPLANScholar</h1>
          <p className="text-white/65 text-sm md:text-base max-w-2xl mx-auto">
            KIPLANScholar helps people discover opportunities, understand whether those
            opportunities may be a fit, find the resources to prepare, and take the next step —
            because the right opportunity can sometimes become a turning point in a person's life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScholarAreaCard
            title="Home"
            description="KIPLANScholar is not simply a list of scholarships — it's a platform built around the idea of opportunity itself. Students, researchers, working professionals, entrepreneurs, and people at very different stages of life all arrive here looking for the same thing: a genuine next step forward. Sometimes that step turns out to matter more than expected."
          />
          <ScholarAreaCard
            title="Opportunities"
            description="This is where discovery begins — scholarships, and other educational, research, and professional development opportunities gathered in one place. The real question worth sitting with as you browse isn't just 'what's available,' but 'could this one change my future?'"
          />
          <ScholarAreaCard
            title="My Eligibility"
            description="Finding an opportunity is only the first step. Understanding whether it actually fits you — your background, education, and experience — is just as important, and worth knowing before investing real time and effort. My Eligibility exists to help answer one honest question: am I eligible?"
          />
          <ScholarAreaCard
            title="Resources"
            description="Opportunities tell you what exists. My Eligibility helps you understand whether it may fit you. Resources help you prepare — the practical knowledge and guidance that turns an opportunity you've found into one you're genuinely ready to pursue."
          />
          <ScholarAreaCard
            title="About"
            description="Behind KIPLANScholar is a personal story — a founder's own journey through education, challenge, and exposure to opportunity and technology, and the vision that grew out of it. The About page is where that story, and the reasoning behind building something to help others, is shared directly."
          />
          <ScholarAreaCard
            title="My Workspace"
            description="This is where the journey moves from information toward action — discover, assess, prepare, act. My Workspace is the place where you begin actually shaping your next step, not just reading about it."
          />
        </div>
      </div>
    </section>
  );
}