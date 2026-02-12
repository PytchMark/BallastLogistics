import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import ContainerRail from '../components/ContainerRail';
import WhatToBuildTiles from '../components/WhatToBuildTiles';
import QuickQuoteModal from '../components/QuickQuoteModal';
import { containers } from '../data/containers';

const LOGO_URL =
  'https://res.cloudinary.com/dd8pjjxsm/image/upload/v1770936131/file_0000000093bc722fb5dbd2bbdb627859_i57or8.png';

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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-8"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-ballast-300">Ballast Logistics Ltd. · Jamaica</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
                Turn your idea into real space — fast.
              </h1>
              <p className="mt-5 max-w-3xl text-lg text-slate-200">
                We supply quality shipping containers at great rates, with financing options available. Build it your way
                — and if you need a builder or designer, we can connect you with trusted professionals.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => openQuote('Home > Hero CTA')}
                  className="rounded-xl bg-ballast-500 px-5 py-3 font-medium text-white transition hover:scale-[1.01] hover:bg-ballast-300 hover:text-slate-950"
                >
                  Get container pricing
                </button>
                <button
                  onClick={() => openQuote('Home > Hero Secondary CTA', 'Other')}
                  className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-medium text-slate-100 transition hover:bg-white/10"
                >
                  I have an idea to build
                </button>
              </div>
              <ul className="mt-8 grid gap-2 text-sm text-slate-200 md:grid-cols-2">
                <li>• Competitive rates on containers</li>
                <li>• Financing options available</li>
                <li>• Delivery guidance</li>
                <li>• Build your way (no pressure)</li>
                <li className="md:col-span-2">• Optional connections to recommended professionals (architects/builders)</li>
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-slate-900/70 to-slate-950/70 p-6 shadow-[0_20px_50px_rgba(2,6,23,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-xl">
                <div className="logo-shimmer pointer-events-none absolute inset-0" />
                <img
                  src={LOGO_URL}
                  alt="Ballast Logistics Ltd. logo"
                  className="relative z-10 mx-auto w-full max-w-[280px] mix-blend-multiply brightness-110 contrast-110 drop-shadow-[0_0_30px_rgba(96,165,250,0.45)]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
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
