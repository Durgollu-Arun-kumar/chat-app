import { motion } from 'framer-motion';
import { Hash, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { GlassPanel } from '../ui/glass-panel';
import { useChatRooms } from '../../features/chat/use-chat-rooms';

export function Sidebar() {
  const { data } = useChatRooms();

  return (
    <GlassPanel className="p-4">
      <div className="mb-5 flex items-center gap-3 rounded-2xl bg-gradient-to-br from-violet-500/20 to-orange-300/10 p-4">
        <div className="h-9 w-9 rounded-xl bg-white/10" />
        <div>
          <p className="text-sm font-semibold">Glass Chat</p>
          <p className="text-xs text-zinc-400">Web Workspace</p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="px-2 text-xs uppercase tracking-[0.2em] text-zinc-500">Rooms</p>
        {data?.map((room, idx) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.03, ease: 'easeOut' }}
          >
            <NavLink
              to={`/rooms/${room.id}`}
              className={({ isActive }) =>
                `group flex items-center justify-between rounded-2xl px-3 py-2 text-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 ${
                  isActive ? 'bg-white/10 text-white shadow-[inset_0_0_20px_rgba(186,156,255,0.15)]' : 'text-zinc-300'
                }`
              }
            >
              <span className="flex items-center gap-2">
                <Hash className="h-4 w-4 text-zinc-500" />
                {room.name}
              </span>
              <span className="text-xs text-zinc-500">{room.members}</span>
            </NavLink>
          </motion.div>
        ))}
      </div>

      <button className="mt-6 flex w-full items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-zinc-300 transition duration-200 hover:bg-white/10">
        <Settings className="h-4 w-4" />
        Settings
      </button>
    </GlassPanel>
  );
}
