import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChatHeader } from '../../components/chat/chat-header';
import { MessageComposer } from '../../components/chat/message-composer';
import { MessageList } from '../../components/chat/message-list';
import { GlassPanel } from '../../components/ui/glass-panel';
import { useAuthStore } from '../auth/use-auth-store';

export type Message = {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
};

const SEED_MESSAGES: Message[] = [
  { id: '1', sender: 'Luna', content: 'Refined the hero depth layers and reduced highlight saturation.', timestamp: '09:21' },
  { id: '2', sender: 'Noah', content: 'Perfect. Motion timing at 220ms feels balanced.', timestamp: '09:22' },
  { id: '3', sender: 'Ava', content: 'Let’s keep all active states with inner glow only.', timestamp: '09:23' }
];

export function ChatRoomPage() {
  const { roomId = 'design' } = useParams();
  const username = useAuthStore((state) => state.username) || 'You';
  const [messages, setMessages] = useState(SEED_MESSAGES);

  const roomLabel = useMemo(() => roomId.replace('-', ' '), [roomId]);

  const addMessage = (content: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: username,
        content,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <motion.div className="h-full" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
      <GlassPanel className="grid h-full grid-rows-[auto_1fr_auto] p-4">
        <ChatHeader roomName={roomLabel} members={16} />
        <MessageList messages={messages} currentUser={username} />
        <MessageComposer onSubmit={addMessage} />
      </GlassPanel>
    </motion.div>
  );
}
