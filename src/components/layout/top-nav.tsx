import { Bell, Search, Sparkles } from 'lucide-react';
import { GlassPanel } from '../ui/glass-panel';

export function TopNav() {
  return (
    <GlassPanel className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <Sparkles className="h-4 w-4 text-zinc-200" />
        <p className="text-sm text-zinc-300">Depth Glass Realtime Workspace</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="rounded-2xl border border-white/10 bg-black/20 p-2 text-zinc-300 transition duration-200 hover:-translate-y-0.5 hover:bg-white/10">
          <Search className="h-4 w-4" />
        </button>
        <button className="rounded-2xl border border-white/10 bg-black/20 p-2 text-zinc-300 transition duration-200 hover:-translate-y-0.5 hover:bg-white/10">
          <Bell className="h-4 w-4" />
        </button>
      </div>
    </GlassPanel>
  );
}
