import { useRef } from 'react';
import { ContainerItem } from '../data/containers';

type Props = {
  container: ContainerItem;
  onQuote: (source: string, containerType: string) => void;
  sourcePrefix: string;
};

function ContainerCard({ container, onQuote, sourcePrefix }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current && window.matchMedia('(hover: hover)').matches) {
      videoRef.current.play().catch(() => undefined);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && window.matchMedia('(hover: hover)').matches) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group snap-start overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
        {container.src ? (
          container.mediaType === 'video' ? (
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              poster={container.poster}
              src={container.src}
              autoPlay={!window.matchMedia('(hover: hover)').matches}
            />
          ) : (
            <img className="h-full w-full object-cover" src={container.src} alt={container.title} loading="lazy" />
          )
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.38),transparent_58%)]" />
        )}
      </div>
      <div className="space-y-4 p-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{container.title}</h3>
          <p className="mt-1 text-sm text-slate-300">{container.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {container.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-slate-200">
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => onQuote(`${sourcePrefix} > ${container.title}`, container.ctaKey)}
          className="w-full rounded-xl border border-ballast-300/40 bg-ballast-500/20 px-4 py-2 text-sm font-medium text-ballast-300 transition hover:border-ballast-300 hover:bg-ballast-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-ballast-300/60"
        >
          Get pricing
        </button>
      </div>
    </article>
  );
}

export default ContainerCard;
