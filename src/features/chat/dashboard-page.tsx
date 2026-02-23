import { motion } from 'framer-motion';
import { MessageCircleMore, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlassPanel } from '../../components/ui/glass-panel';
import { useChatRooms } from './use-chat-rooms';

export function DashboardPage() {
  const { data } = useChatRooms();

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
      <GlassPanel className="h-full p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-zinc-400">Choose a room and continue the conversation.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {data?.map((room) => (
            <Link
              key={room.id}
              to={`/rooms/${room.id}`}
              className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5 transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08]"
            >
              <div className="mb-4 flex items-center justify-between">
                <MessageCircleMore className="h-5 w-5 text-zinc-200" />
                <span className="inline-flex items-center gap-1 text-xs text-zinc-400">
                  <Users className="h-3.5 w-3.5" />
                  {room.members}
                </span>
              </div>
              <h2 className="font-medium">#{room.name}</h2>
            </Link>
          ))}
        </div>
      </GlassPanel>
    </motion.div>
  );
}
