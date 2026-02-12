import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import ContainerRail from '../components/ContainerRail';
import WhatToBuildTiles from '../components/WhatToBuildTiles';
import QuickQuoteModal from '../components/QuickQuoteModal';
import { containers } from '../data/containers';

function Home() {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState('Home > Hero CTA');
  const [defaultUseCase, setDefaultUseCase] = useState<string>();
  const [defaultContainer, setDefaultContainer] = useState<string>();

  const openQuote = (nextSource: string, useCase?: string, containerType?: string) => {
    setSource(nextSource);
    setDefaultUseCase(useCase);
    setDefaultContainer(containerType);
    setOpen(true);
  };

  return (
    <>
      <Section className="pt-20">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-ballast-300">Ballast Logistics Ltd. · Jamaica</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">Turn your idea into real space — fast.</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-200">We supply quality shipping containers at great rates, with financing options available. Build it your way — and if you need a builder or designer, we can connect you with trusted professionals.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => openQuote('Home > Hero CTA')} className="rounded-xl bg-ballast-500 px-5 py-3 font-medium text-white transition hover:scale-[1.01] hover:bg-ballast-300 hover:text-slate-950">Get container pricing</button>
            <button onClick={() => openQuote('Home > Hero Secondary CTA', 'Other')} className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-medium text-slate-100 transition hover:bg-white/10">I have an idea to build</button>
          </div>
          <ul className="mt-8 grid gap-2 text-sm text-slate-200 md:grid-cols-2">
            <li>• Competitive rates on containers</li>
            <li>• Financing options available</li>
            <li>• Delivery guidance</li>
            <li>• Build your way (no pressure)</li>
            <li className="md:col-span-2">• Optional connections to recommended professionals (architects/builders)</li>
          </ul>
        </motion.div>
      </Section>

      <Section title="What do you want to build?" subtitle="Start with your concept first. We'll help match the right container and next steps.">
        <WhatToBuildTiles onChoose={(choice) => openQuote(`Home > WhatToBuild Tile: ${choice}`, choice)} />
      </Section>

      <Section title="Container Rail" subtitle="Explore available container types. Tap any card to get current rates and delivery options.">
        <ContainerRail items={containers} sourcePrefix="Home > Container Rail" onQuote={(nextSource, type) => openQuote(nextSource, undefined, type)} />
      </Section>

      <QuickQuoteModal
        isOpen={open}
        onClose={() => setOpen(false)}
        source={source}
        defaultUseCase={defaultUseCase}
        defaultContainerType={defaultContainer}
      />
    </>
  );
}

export default Home;
