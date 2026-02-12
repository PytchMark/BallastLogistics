import { useState } from 'react';
import Section from '../components/Section';
import ContainerRail from '../components/ContainerRail';
import QuickQuoteModal from '../components/QuickQuoteModal';
import { containers } from '../data/containers';

function Containers() {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState('Containers > Rail');
  const [containerType, setContainerType] = useState<string>();

  return (
    <>
      <Section title="Container types built for Jamaican projects" subtitle="From compact footprints to high-cube conversions, choose the option that fits your plan.">
        <ContainerRail
          items={containers}
          sourcePrefix="Containers > Rail"
          onQuote={(nextSource, type) => {
            setSource(nextSource);
            setContainerType(type);
            setOpen(true);
          }}
        />
      </Section>

      <Section title="Container opportunities worth exploring" subtitle="Container builds are not only practical—they can become premium, income-generating assets.">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-5 shadow-[0_16px_40px_rgba(2,6,23,0.48),inset_0_1px_0_rgba(255,255,255,0.2)]">
            <h3 className="font-semibold text-white">Residential projects</h3>
            <p className="mt-2 text-sm text-slate-300">Create modern homes, guest suites, or backyard units with a faster path from concept to completion.</p>
          </article>
          <article className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-5 shadow-[0_16px_40px_rgba(2,6,23,0.48),inset_0_1px_0_rgba(255,255,255,0.2)]">
            <h3 className="font-semibold text-white">Business and retail</h3>
            <p className="mt-2 text-sm text-slate-300">Launch cafés, offices, pop-ups, and storefronts with distinctive design and practical footprint control.</p>
          </article>
          <article className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-5 shadow-[0_16px_40px_rgba(2,6,23,0.48),inset_0_1px_0_rgba(255,255,255,0.2)]">
            <h3 className="font-semibold text-white">Rental and hospitality</h3>
            <p className="mt-2 text-sm text-slate-300">Develop short-term rentals and unique stays with scalable layouts that can expand over time.</p>
          </article>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-6 text-slate-200 shadow-[0_18px_42px_rgba(2,6,23,0.46),inset_0_1px_0_rgba(255,255,255,0.2)]">
          <h3 className="text-lg font-semibold text-white">Need direction first?</h3>
          <p className="mt-2">Tell us what you want to build and we'll suggest container types, delivery approach, and financing pathways.</p>
          <button onClick={() => { setSource('Containers > Consultation CTA'); setOpen(true); }} className="mt-4 rounded-xl border border-ballast-300/60 bg-gradient-to-b from-ballast-300 to-ballast-600 px-4 py-2 text-white shadow-[0_12px_30px_rgba(14,116,255,0.42),inset_0_1px_0_rgba(255,255,255,0.45)] transition hover:from-ballast-200 hover:to-ballast-500 hover:text-slate-950">Plan my project</button>
        </div>
      </Section>

      <QuickQuoteModal isOpen={open} onClose={() => setOpen(false)} source={source} defaultContainerType={containerType} />
    </>
  );
}

export default Containers;
