import { FormEvent, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { buildWhatsAppLink } from '../utils/whatsapp';

const useCaseOptions = ['Business', 'Home Add-on', 'Storage', 'Office', 'Rental Unit', 'Other'];
const typeOptions = ['Not sure yet', '20ft Standard', '40ft Standard', '40ft High Cube', '20ft Office/Modified', '40ft Reefer'];
const timelineOptions = ['ASAP', '2–4 weeks', '1–2 months', '3+ months'];
const builderOptions = ['Yes', 'No', 'Not sure'];
const budgetOptions = ['Just pricing', 'Under JMD (entry range)', 'Mid range', 'Flexible'];

type Props = {
  isOpen: boolean;
  onClose: () => void;
  source: string;
  defaultUseCase?: string;
  defaultContainerType?: string;
};

function QuickQuoteModal({ isOpen, onClose, source, defaultUseCase, defaultContainerType }: Props) {
  const [useCase, setUseCase] = useState(defaultUseCase || 'Business');
  const [containerType, setContainerType] = useState(defaultContainerType || 'Not sure yet');
  const [location, setLocation] = useState('');
  const [timeline, setTimeline] = useState('ASAP');
  const [builderStatus, setBuilderStatus] = useState('No');
  const [budgetRange, setBudgetRange] = useState('Just pricing');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setUseCase(defaultUseCase || 'Business');
      setContainerType(defaultContainerType || 'Not sure yet');
      setError('');
    }
  }, [isOpen, defaultUseCase, defaultContainerType]);

  const phone = import.meta.env.VITE_WA_PHONE as string | undefined;
  const waLink = useMemo(
    () =>
      buildWhatsAppLink({
        phoneE164: phone || '18760000000',
        source,
        useCase,
        containerType: containerType === 'Not sure yet' ? undefined : containerType,
        location,
        timeline,
        builderStatus,
        budgetRange,
        name,
      }),
    [phone, source, useCase, containerType, location, timeline, builderStatus, budgetRange, name],
  );

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!useCase || !location.trim() || !timeline || !builderStatus) {
      setError('Please fill use case, location, timeline, and builder/designer status.');
      return;
    }
    window.open(waLink, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const fieldClass =
    'w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-ballast-300 focus:ring-2 focus:ring-ballast-300/40';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/75 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.form
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            onSubmit={onSubmit}
            className="w-full max-w-xl rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl backdrop-blur"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Quick Quote</h3>
              <button type="button" onClick={onClose} className="text-slate-400 hover:text-white">Close</button>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <label className="text-sm text-slate-300">What are you building?
                <select className={fieldClass} value={useCase} onChange={(e) => setUseCase(e.target.value)}>{useCaseOptions.map((option) => <option key={option}>{option}</option>)}</select>
              </label>
              <label className="text-sm text-slate-300">Preferred container type
                <select className={fieldClass} value={containerType} onChange={(e) => setContainerType(e.target.value)}>{typeOptions.map((option) => <option key={option}>{option}</option>)}</select>
              </label>
              <label className="text-sm text-slate-300 md:col-span-2">Parish / Location
                <input className={fieldClass} value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. St. Catherine" />
              </label>
              <label className="text-sm text-slate-300">Timeline
                <select className={fieldClass} value={timeline} onChange={(e) => setTimeline(e.target.value)}>{timelineOptions.map((option) => <option key={option}>{option}</option>)}</select>
              </label>
              <label className="text-sm text-slate-300">Builder / Designer ready?
                <select className={fieldClass} value={builderStatus} onChange={(e) => setBuilderStatus(e.target.value)}>{builderOptions.map((option) => <option key={option}>{option}</option>)}</select>
              </label>
              <label className="text-sm text-slate-300">Budget range
                <select className={fieldClass} value={budgetRange} onChange={(e) => setBudgetRange(e.target.value)}>{budgetOptions.map((option) => <option key={option}>{option}</option>)}</select>
              </label>
              <label className="text-sm text-slate-300">Name (optional)
                <input className={fieldClass} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
              </label>
            </div>
            {error && <p className="mt-3 text-sm text-rose-300">{error}</p>}
            <button
              type="submit"
              className="mt-5 w-full rounded-xl bg-ballast-500 px-4 py-2.5 font-medium text-white transition hover:scale-[1.01] hover:bg-ballast-300 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-ballast-300/60"
            >
              Open WhatsApp
            </button>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default QuickQuoteModal;
