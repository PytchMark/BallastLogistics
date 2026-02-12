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
      <Section title="Financing that keeps your build moving" subtitle="Ballast helps you access containers at competitive rates with financing options available.">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-slate-200">Share your timeline and location, and we'll walk you through rates, delivery options, and practical financing pathways without pressure.</p>
          <button onClick={() => { setSource('Financing > Hero CTA'); setOpen(true); }} className="mt-4 rounded-xl bg-ballast-500 px-4 py-2 text-white transition hover:bg-ballast-300 hover:text-slate-950">Check financing options</button>
        </div>
      </Section>

      <Section title="Financing FAQs">
        <div className="grid gap-4 md:grid-cols-3">
          {faqs.map((faq) => (
            <article key={faq.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
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
