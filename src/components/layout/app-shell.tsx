import type { PropsWithChildren } from 'react';
import { TopNav } from './top-nav';
import { Sidebar } from './sidebar';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-[#0d0d11] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(121,92,255,0.18),transparent_35%),radial-gradient(circle_at_80%_85%,rgba(255,166,87,0.14),transparent_35%)]" />
      <div className="relative mx-auto grid min-h-screen max-w-[1800px] grid-cols-[280px_1fr] gap-5 p-5">
        <Sidebar />
        <main className="grid grid-rows-[auto_1fr] gap-5 overflow-hidden">
          <TopNav />
          <div className="min-h-0">{children}</div>
        </main>
      </div>
    </div>
  );
}
