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

export function PrivacyPolicy() {
  useSEO({
    title: 'Privacy Policy | Kamal Khadka',
    description: "This Privacy Policy explains what information Kamal Khadka's professional portal collects and how it is used.",
  });
  const sections: LegalSection[] = [
    {
      title: '1. About This Website',
      body: (
        <p>
          This website is the personal professional portal of Kamal Khadka, covering legal practice,
          notarial services, HR and professional experience, and AI/technology practice, along with
          information about the wider KIPLAN initiatives. This Privacy Policy explains what
          information this website collects, how it is used, and your choices regarding that
          information.
        </p>
      ),
    },
    {
      title: '2. Information We Collect',
      body: (
        <>
          <p>
            This website does not require you to create an account, and it does not maintain a
            database of registered users. The only information collected is what you choose to
            provide directly, primarily through the Contact form on the Home page. That form may
            collect:
          </p>
          <ul className="space-y-1.5 list-disc list-inside">
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Preferred consultation date</li>
            <li>Service type selected</li>
            <li>The message or enquiry you write</li>
          </ul>
          <p>
            Providing this information is entirely voluntary and is only used to respond to your
            enquiry.
          </p>
        </>
      ),
    },
    {
      title: '3. How We Use Information',
      body: (
        <p>
          Information submitted through the Contact form is used solely to respond to your enquiry,
          arrange a consultation, or otherwise communicate with you about the service you have asked
          about. It is not used for marketing, profiling, or any purpose unrelated to your enquiry,
          and it is not sold or shared with third parties for their own marketing purposes.
        </p>
      ),
    },
    {
      title: '4. How Contact Form Submissions Are Handled',
      body: (
        <p>
          Contact form submissions are sent over a secure, encrypted (HTTPS) connection and processed
          using Formspree, a third-party form-processing service, which delivers the submission to
          Kamal Khadka. Formspree's own handling of that data is governed by Formspree's privacy
          policy.
        </p>
      ),
    },
    {
      title: '5. Cookies and Tracking',
      body: (
        <p>
          This website does not use cookies for advertising, tracking, or analytics, and it does not
          run third-party analytics or advertising scripts. The site is hosted on Vercel, whose
          hosting infrastructure may process standard technical server logs as part of normal web
          hosting; this is not used by this website for tracking individual visitors.
        </p>
      ),
    },
    {
      title: '6. External KIPLAN Properties',
      body: (
        <p>
          This website links to related KIPLAN properties, including KIPLANScholar
          (kiplanscholar.com) and KIPLANLaw (kiplan.com.np). These are separate websites with their
          own, independent privacy practices. This Privacy Policy applies only to this portal
          (kamalkhadka.vercel.app) and does not cover those other properties.
        </p>
      ),
    },
    {
      title: '7. Your Choices',
      body: (
        <p>
          You may choose not to submit the Contact form, in which case no information is collected
          from you. If you have already submitted an enquiry and would like to know what information
          was received, or would like it deleted, you can contact Kamal Khadka directly using the
          details below.
        </p>
      ),
    },
    {
      title: '8. Changes to This Policy',
      body: (
        <p>
          This Privacy Policy may be updated from time to time to reflect changes to this website or
          its practices. The version shown here is the current version.
        </p>
      ),
    },
  ];

  return (
    <section className="section-padding pt-40 md:pt-48 pb-20 md:pb-28 relative overflow-hidden">
      <div className="container-custom relative max-w-3xl">
        <div className="text-center mb-12">
          <span className="font-script text-3xl text-gold-400 block mb-2">Legal Information</span>
          <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            How Your Information Is Handled
          </span>
          <h1 className="font-serif text-h1 text-white mb-4">Privacy Policy</h1>
          <p className="text-white/50 text-sm">Last updated: August 2026</p>
        </div>

        <div className="space-y-5">
          {sections.map((s) => (
            <LegalCard key={s.title} {...s} />
          ))}
        </div>

        <div className="mt-10 p-6 bg-white/5 rounded-lg border border-white/10 text-center">
          <p className="text-white/70 text-sm">
            Questions about this policy? Contact{' '}
            <a href="mailto:kbkamal@gmail.com" className="text-gold-400 hover:text-gold-300 transition-colors">
              kbkamal@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}