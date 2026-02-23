import { motion } from 'framer-motion';
import type { Message } from '../../features/chat/chat-room-page';

type MessageListProps = {
  messages: Message[];
  currentUser: string;
};

export function MessageList({ messages, currentUser }: MessageListProps) {
  return (
    <div className="min-h-0 space-y-3 overflow-y-auto px-2 pb-4">
      {messages.map((message) => {
        const isSelf = message.sender === currentUser;
        return (
          <motion.article
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`max-w-[70%] rounded-[20px] border px-4 py-3 ${
              isSelf
                ? 'ml-auto border-zinc-400/25 bg-gradient-to-br from-zinc-700/45 to-black/40 shadow-[inset_0_0_24px_rgba(255,255,255,0.08)]'
                : 'border-white/10 bg-white/[0.04]'
            }`}
          >
            <div className="mb-1 flex items-center justify-between gap-3 text-xs text-zinc-400">
              <span>{message.sender}</span>
              <span>{message.timestamp}</span>
            </div>
            <p className="text-sm text-zinc-200">{message.content}</p>
          </motion.article>
        );
      })}
    </div>
  );
}
