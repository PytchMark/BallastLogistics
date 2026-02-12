import { ReactNode } from 'react';
import { cn } from '../utils/classnames';

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16', className)}>
      {(title || subtitle) && (
        <div className="mb-8 max-w-3xl">
          {title && <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>}
          {subtitle && <p className="mt-3 text-slate-300">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

export default Section;
