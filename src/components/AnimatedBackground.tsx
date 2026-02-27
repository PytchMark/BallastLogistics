import { useEffect, useState } from 'react';

const BACKGROUND_VIDEO =
  'https://res.cloudinary.com/dd8pjjxsm/video/upload/v1772210298/From_Main_Klickpin_CF-_Pinterest_Video_-_7AXvxxxdi_qqaixq.mp4';

function AnimatedBackground() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * 12;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        src={BACKGROUND_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-slate-950/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(61,126,255,0.26),transparent_55%)]" />
      <div
        className="absolute -left-16 top-12 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl animate-float"
        style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
      />
      <div
        className="absolute right-4 top-1/3 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl animate-float-slow"
        style={{ transform: `translate3d(${-offset.x}px, ${-offset.y}px, 0)` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:46px_46px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] animate-grid-pan" />
    </div>
  );
}

export default AnimatedBackground;
