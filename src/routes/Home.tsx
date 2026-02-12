import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import ContainerRail from '../components/ContainerRail';
import WhatToBuildTiles from '../components/WhatToBuildTiles';
import QuickQuoteModal from '../components/QuickQuoteModal';
import { containers } from '../data/containers';

const LOGO_URL =
  'https://res.cloudinary.com/dd8pjjxsm/image/upload/v1770938110/file_00000000310c71f5ad848645d26b2c61_kvk5fo.png';

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
                Turn your idea into <span className="text-ballast-300">real space</span> — fast.
              </h1>
              <p className="mt-5 max-w-3xl text-lg text-slate-200">
                We supply quality shipping containers at great rates, with financing options available. Build it your way
                — and if you need a builder or designer, we can connect you with trusted professionals so you can move from
                plan to project with confidence.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => openQuote('Home > Hero CTA')}
                  className="rounded-xl border border-ballast-300/60 bg-gradient-to-b from-ballast-300 to-ballast-600 px-5 py-3 font-medium text-white shadow-[0_14px_35px_rgba(14,116,255,0.42),inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-8px_16px_rgba(15,23,42,0.28)] transition hover:scale-[1.01] hover:from-ballast-200 hover:to-ballast-500 hover:text-slate-950"
                >
                  Get container pricing
                </button>
                <button
                  onClick={() => openQuote('Home > Hero Secondary CTA', 'Other')}
                  className="rounded-xl border border-white/35 bg-gradient-to-b from-white/20 to-white/5 px-5 py-3 font-medium text-slate-100 shadow-[0_10px_28px_rgba(2,6,23,0.4),inset_0_1px_0_rgba(255,255,255,0.22)] transition hover:bg-white/10"
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

            <div className="mx-auto w-full max-w-sm lg:max-w-md">
              <img
                src={LOGO_URL}
                alt="Ballast Logistics Ltd. logo"
                className="mx-auto w-full max-w-[320px] drop-shadow-[0_0_30px_rgba(96,165,250,0.45)]"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </Section>

      <Section title="What do you want to build?" subtitle="Start with your concept first. We'll help match the right container and next steps.">
        <WhatToBuildTiles onChoose={(choice) => openQuote(`Home > WhatToBuild Tile: ${choice}`, choice)} />
      </Section>

      <Section
        title="Why container builds are winning in Jamaica"
        subtitle="Smart buyers are choosing container spaces for speed, control, and long-term value."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-6 shadow-[0_16px_40px_rgba(2,6,23,0.45),inset_0_1px_0_rgba(255,255,255,0.22)]">
            <h3 className="text-lg font-semibold text-white">Faster <span className="text-ballast-300">project timelines</span></h3>
            <p className="mt-2 text-sm text-slate-200">
              Container shells are already built, so your team can spend less time on structural framing and more time
              on finishes, utilities, and launch readiness.
            </p>
          </article>
          <article className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-6 shadow-[0_16px_40px_rgba(2,6,23,0.45),inset_0_1px_0_rgba(255,255,255,0.22)]">
            <h3 className="text-lg font-semibold text-white">More <span className="text-ballast-300">predictable costs</span></h3>
            <p className="mt-2 text-sm text-slate-200">
              With a clear base unit and practical financing options, you can stage your build and protect cash flow
              while still creating premium, functional space.
            </p>
          </article>
          <article className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-6 shadow-[0_16px_40px_rgba(2,6,23,0.45),inset_0_1px_0_rgba(255,255,255,0.22)]">
            <h3 className="text-lg font-semibold text-white">Flexible <span className="text-ballast-300">design potential</span></h3>
            <p className="mt-2 text-sm text-slate-200">
              From modern residences to compact storefronts and rental units, container builds can be configured to
              match your land, brand, and future expansion goals.
            </p>
          </article>
        </div>
      </Section>

      <Section title="Container Rail" subtitle="Explore available container types. Tap any card to get current rates and delivery options.">
        <ContainerRail items={containers} sourcePrefix="Home > Container Rail" onQuote={(nextSource, type) => openQuote(nextSource, undefined, type)} />
      </Section>

      <Section
        title="Plan your container project in 3 simple moves"
        subtitle="Use these pages to move from inspiration to pricing and financing in one guided path."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            to="/containers"
            className="group rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-5 shadow-[0_18px_42px_rgba(2,6,23,0.44),inset_0_1px_0_rgba(255,255,255,0.2)] transition hover:-translate-y-1"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-ballast-300">Step 1</p>
            <h3 className="mt-2 text-lg font-semibold text-white">Choose your container type</h3>
            <p className="mt-2 text-sm text-slate-200">
              Compare sizes and specs to match your timeline and intended use.
            </p>
            <p className="mt-3 text-sm font-medium text-ballast-300 group-hover:text-ballast-200">Explore containers →</p>
          </Link>
          <Link
            to="/financing"
            className="group rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-5 shadow-[0_18px_42px_rgba(2,6,23,0.44),inset_0_1px_0_rgba(255,255,255,0.2)] transition hover:-translate-y-1"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-ballast-300">Step 2</p>
            <h3 className="mt-2 text-lg font-semibold text-white">Review financing pathways</h3>
            <p className="mt-2 text-sm text-slate-200">
              Find a practical payment route that keeps your build moving without pressure.
            </p>
            <p className="mt-3 text-sm font-medium text-ballast-300 group-hover:text-ballast-200">View financing options →</p>
          </Link>
          <button
            onClick={() => openQuote('Home > 3 Steps CTA', 'Other')}
            className="group rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-5 text-left shadow-[0_18px_42px_rgba(2,6,23,0.44),inset_0_1px_0_rgba(255,255,255,0.2)] transition hover:-translate-y-1"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-ballast-300">Step 3</p>
            <h3 className="mt-2 text-lg font-semibold text-white">Start your build conversation</h3>
            <p className="mt-2 text-sm text-slate-200">
              Share your idea and get personalized recommendations for container type, delivery, and next steps.
            </p>
            <p className="mt-3 text-sm font-medium text-ballast-300 group-hover:text-ballast-200">Get a guided quote →</p>
          </button>
        </div>
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
