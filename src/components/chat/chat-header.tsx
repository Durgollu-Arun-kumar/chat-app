import { Users } from 'lucide-react';

type ChatHeaderProps = {
  roomName: string;
  members: number;
};

export function ChatHeader({ roomName, members }: ChatHeaderProps) {
  return (
    <header className="sticky top-0 z-10 mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-md">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Room</p>
        <h2 className="text-lg font-semibold">#{roomName}</h2>
      </div>
      <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
        <Users className="h-4 w-4" />
        {members} members
      </div>
    </header>
  );
}
