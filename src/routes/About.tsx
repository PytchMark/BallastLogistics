import { useState } from 'react';
import Section from '../components/Section';
import QuickQuoteModal from '../components/QuickQuoteModal';

function About() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Section title="A calm, trust-first partner for container projects" subtitle="Ballast Logistics Ltd. serves Jamaica with practical guidance and transparent pricing support.">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
            <h3 className="text-lg font-semibold text-white">Our mission</h3>
            <p className="mt-2">Help people and businesses turn ideas into real, useful spaces. We keep the process simple, flexible, and respectful.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
            <h3 className="text-lg font-semibold text-white">How we support you</h3>
            <p className="mt-2">Container supply, financing direction, delivery guidance, and optional referrals to trusted professionals if you need them.</p>
          </article>
        </div>
        <button onClick={() => setOpen(true)} className="mt-6 rounded-xl bg-ballast-500 px-5 py-2.5 text-white transition hover:bg-ballast-300 hover:text-slate-950">Talk to Ballast on WhatsApp</button>
      </Section>

      <QuickQuoteModal isOpen={open} onClose={() => setOpen(false)} source="About > Primary CTA" />
    </>
  );
}

export default About;
