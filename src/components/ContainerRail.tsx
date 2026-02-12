import { ContainerItem } from '../data/containers';
import ContainerCard from './ContainerCard';

type Props = {
  items: ContainerItem[];
  sourcePrefix: string;
  onQuote: (source: string, containerType?: string) => void;
};

function ContainerRail({ items, onQuote, sourcePrefix }: Props) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-ballast-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-ballast-950 to-transparent" />
      <div
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pr-2 scroll-smooth [scrollbar-color:rgba(148,163,184,0.3)_transparent] [scrollbar-width:thin]"
        role="region"
        aria-label="Container options rail"
      >
        {items.map((container) => (
          <div key={container.id} className="min-w-[85vw] max-w-[420px] flex-1 sm:min-w-[320px]">
            <ContainerCard container={container} onQuote={onQuote} sourcePrefix={sourcePrefix} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContainerRail;
