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

      <Section>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
          <h3 className="text-lg font-semibold text-white">Need direction first?</h3>
          <p className="mt-2">Tell us what you want to build and we'll suggest container types, delivery approach, and financing pathways.</p>
          <button onClick={() => { setSource('Containers > Consultation CTA'); setOpen(true); }} className="mt-4 rounded-xl bg-ballast-500 px-4 py-2 text-white transition hover:bg-ballast-300 hover:text-slate-950">Plan my project</button>
        </div>
      </Section>

      <QuickQuoteModal isOpen={open} onClose={() => setOpen(false)} source={source} defaultContainerType={containerType} />
    </>
  );
}

export default Containers;
