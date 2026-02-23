import type { PropsWithChildren } from 'react';
import { cn } from '../../lib/cn';

type GlassPanelProps = PropsWithChildren<{
  className?: string;
}>;

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <section
      className={cn(
        'rounded-[24px] border border-white/10 bg-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl',
        'before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-white/10 before:opacity-40',
        'relative overflow-hidden',
        className
      )}
    >
      {children}
    </section>
  );
}
