import { useState } from 'react';
import Section from '../components/Section';
import QuickQuoteModal from '../components/QuickQuoteModal';

function About() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Section title="A calm, trust-first partner for container projects" subtitle="Ballast Logistics Ltd. serves Jamaica with practical guidance and transparent pricing support.">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-6 text-slate-200 shadow-[0_16px_38px_rgba(2,6,23,0.45),inset_0_1px_0_rgba(255,255,255,0.22)]">
            <h3 className="text-lg font-semibold text-white">Our mission</h3>
            <p className="mt-2">Help people and businesses turn ideas into real, useful spaces. We keep the process simple, flexible, and respectful.</p>
          </article>
          <article className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-6 text-slate-200 shadow-[0_16px_38px_rgba(2,6,23,0.45),inset_0_1px_0_rgba(255,255,255,0.22)]">
            <h3 className="text-lg font-semibold text-white">How we support you</h3>
            <p className="mt-2">Container supply, financing direction, delivery guidance, and optional referrals to trusted professionals if you need them.</p>
          </article>
        </div>
        <button onClick={() => setOpen(true)} className="mt-6 rounded-xl border border-ballast-300/60 bg-gradient-to-b from-ballast-300 to-ballast-600 px-5 py-2.5 text-white shadow-[0_12px_30px_rgba(14,116,255,0.42),inset_0_1px_0_rgba(255,255,255,0.45)] transition hover:from-ballast-200 hover:to-ballast-500 hover:text-slate-950">Talk to Ballast on WhatsApp</button>
      </Section>

      <QuickQuoteModal isOpen={open} onClose={() => setOpen(false)} source="About > Primary CTA" />
    </>
  );
}

export default About;
