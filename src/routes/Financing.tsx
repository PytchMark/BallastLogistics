import { useState } from 'react';
import Section from '../components/Section';
import QuickQuoteModal from '../components/QuickQuoteModal';

const faqs = [
  {
    q: 'Can I get financing even if I am just starting?',
    a: 'Yes. Financing options are available to help you begin with confidence and clear next steps.',
  },
  {
    q: 'Do you support delivery planning?',
    a: 'Absolutely. We provide guidance on logistics, site access, and practical delivery options.',
  },
  {
    q: 'What if I do not have a builder or designer yet?',
    a: 'No problem. We can connect you with trusted architects and builders in Jamaica.',
  },
];

function Financing() {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState('Financing > Hero CTA');

  return (
    <>
      <Section
        title="Financing that keeps your build moving"
        subtitle="Ballast helps you access containers at competitive rates with financing options available."
      >
        <div className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-6 shadow-[0_18px_44px_rgba(2,6,23,0.5),inset_0_1px_0_rgba(255,255,255,0.22)]">
          <p className="text-slate-200">
            Share your timeline and location, and we'll walk you through rates, delivery options, and practical financing
            pathways without pressure.
          </p>
          <p className="mt-3 text-slate-300">
            Whether you are planning a retail unit, rental conversion, office space, or home expansion, the goal is to
            give you a clear structure so you can move from quote to action with confidence.
          </p>
          <button
            onClick={() => {
              setSource('Financing > Hero CTA');
              setOpen(true);
            }}
            className="mt-5 rounded-xl border border-ballast-300/60 bg-gradient-to-b from-ballast-300 to-ballast-600 px-4 py-2 text-white shadow-[0_12px_30px_rgba(14,116,255,0.42),inset_0_1px_0_rgba(255,255,255,0.45)] transition hover:from-ballast-200 hover:to-ballast-500 hover:text-slate-950"
          >
            Check financing options
          </button>
        </div>
      </Section>

      <Section title="Why financing matters for container projects" subtitle="A good payment strategy can turn a great idea into an executable plan.">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-5 shadow-[0_16px_36px_rgba(2,6,23,0.45),inset_0_1px_0_rgba(255,255,255,0.2)]">
            <h3 className="font-semibold text-white">Protect working capital</h3>
            <p className="mt-2 text-sm text-slate-300">Stage spending so you can handle site prep, utility work, and interior finishes without overextending.</p>
          </article>
          <article className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-5 shadow-[0_16px_36px_rgba(2,6,23,0.45),inset_0_1px_0_rgba(255,255,255,0.2)]">
            <h3 className="font-semibold text-white">Launch sooner</h3>
            <p className="mt-2 text-sm text-slate-300">Secure your unit and delivery schedule early while your design and fit-out activities progress in parallel.</p>
          </article>
          <article className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-5 shadow-[0_16px_36px_rgba(2,6,23,0.45),inset_0_1px_0_rgba(255,255,255,0.2)]">
            <h3 className="font-semibold text-white">Build with less stress</h3>
            <p className="mt-2 text-sm text-slate-300">Understand realistic payment pathways up front so every decision is grounded in confidence and clarity.</p>
          </article>
        </div>
      </Section>

      <Section title="Financing FAQs">
        <div className="grid gap-4 md:grid-cols-3">
          {faqs.map((faq) => (
            <article key={faq.q} className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-5 shadow-[0_16px_36px_rgba(2,6,23,0.45),inset_0_1px_0_rgba(255,255,255,0.2)]">
              <h3 className="font-semibold text-white">{faq.q}</h3>
              <p className="mt-2 text-sm text-slate-300">{faq.a}</p>
              <button onClick={() => { setSource(`Financing > FAQ CTA`); setOpen(true); }} className="mt-4 text-sm text-ballast-300 hover:text-ballast-200">Ask on WhatsApp →</button>
            </article>
          ))}
        </div>
      </Section>

      <QuickQuoteModal isOpen={open} onClose={() => setOpen(false)} source={source} />
    </>
  );
}

export default Financing;
