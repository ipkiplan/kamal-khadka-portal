import { useSEO } from '../hooks/useSEO';

interface LegalSection {
  title: string;
  body: React.ReactNode;
}

function LegalCard({ title, body }: LegalSection) {
  return (
    <div className="bg-white/5 rounded-lg border border-white/10 p-6 md:p-8">
      <h2 className="font-serif text-lg text-white mb-3">{title}</h2>
      <div className="text-sm text-white/70 leading-relaxed space-y-3">{body}</div>
    </div>
  );
}

export function TermsOfUse() {
  useSEO({
    title: 'Terms of Use | Kamal Khadka',
    description: "These Terms of Use explain the terms governing use of Kamal Khadka's professional portal.",
  });
  const sections: LegalSection[] = [
    {
      title: '1. About This Website',
      body: (
        <p>
          This website is the personal professional portal of Kamal Khadka, Advocate, Notary Public
          and AI Practitioner, based in Kathmandu, Nepal. It provides information about legal
          practice, notarial services, professional and HR background, AI/technology practice, and
          the wider KIPLAN initiatives, including KIPLANScholar, KIPLANLaw and KIPLANNotary.
        </p>
      ),
    },
    {
      title: '2. Acceptance of These Terms',
      body: (
        <p>
          By accessing or using this website, you agree to these Terms of Use. If you do not agree
          with any part of these terms, please discontinue use of this website.
        </p>
      ),
    },
    {
      title: '3. Information Purpose Only',
      body: (
        <p>
          The content on this website — including descriptions of legal services, notarial services,
          professional experience, and AI/technology work — is provided for general informational
          purposes. It is intended to help visitors understand the areas of practice and background
          of Kamal Khadka, and does not itself constitute a service being delivered to you.
        </p>
      ),
    },
    {
      title: '4. No Professional-Client Relationship',
      body: (
        <p>
          Browsing this website, reading its content, or submitting the Contact form does not, by
          itself, create a lawyer-client, notarial-client, or other professional-client relationship.
          Such a relationship is only established through a direct, mutual professional engagement,
          agreed separately.
        </p>
      ),
    },
    {
      title: '5. Limitation of Liability',
      body: (
        <p>
          While every effort is made to keep the information on this website accurate and current,
          Kamal Khadka makes no warranty as to its completeness or accuracy, and shall not be liable
          for any direct or indirect loss arising from reliance on website content, technical
          interruptions, or errors. Use of this website is at your own discretion.
        </p>
      ),
    },
    {
      title: '6. Third-Party and External KIPLAN Links',
      body: (
        <p>
          This website contains links to external, related properties — including KIPLANScholar
          (kiplanscholar.com), KIPLANLaw (kiplan.com.np), and notarial-service resources. These are
          separate websites, operated independently, and this website has no control over their
          content, availability, or policies.
        </p>
      ),
    },
    {
      title: '7. Intellectual Property',
      body: (
        <p>
          Unless otherwise stated, the content, design, and written material on this website belong
          to Kamal Khadka. Material should not be copied or redistributed without permission.
        </p>
      ),
    },
    {
      title: '8. Changes to These Terms',
      body: (
        <p>
          These Terms of Use may be updated from time to time. Continued use of this website after
          changes are posted indicates acceptance of the updated terms.
        </p>
      ),
    },
    {
      title: '9. Governing Jurisdiction',
      body: (
        <p>
          These terms are intended to be read in the context of the laws of Nepal, where Kamal
          Khadka's professional practice is based.
        </p>
      ),
    },
    {
      title: '10. Contact Information',
      body: (
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-white/80 font-medium mb-1">Address</p>
            <p>Civil Trade Centre (CTC) Mall, 4th Floor, Sundhara, Kathmandu, Nepal</p>
          </div>
          <div>
            <p className="text-white/80 font-medium mb-1">Direct Contact</p>
            <p>
              Email:{' '}
              <a href="mailto:kbkamal@gmail.com" className="text-gold-400 hover:text-gold-300 transition-colors">
                kbkamal@gmail.com
              </a>
            </p>
            <p>
              Phone: <a href="tel:+97715312040" className="hover:text-gold-300 transition-colors">+977 1 5312040</a>
            </p>
            <p>
              <a href="tel:+9779849530970" className="hover:text-gold-300 transition-colors">+977 9849 530970</a>
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="section-padding pt-40 md:pt-48 pb-20 md:pb-28 relative overflow-hidden">
      <div className="container-custom relative max-w-3xl">
        <div className="text-center mb-12">
          <span className="font-script text-3xl text-gold-400 block mb-2">Legal Information</span>
          <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            Please Read Before Using This Website
          </span>
          <h1 className="font-serif text-h1 text-white mb-4">Terms of Use</h1>
          <p className="text-white/50 text-sm">Last updated: August 2026</p>
        </div>

        <div className="space-y-5">
          {sections.map((s) => (
            <LegalCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}