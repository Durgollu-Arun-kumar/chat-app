import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AppShell } from '../components/layout/app-shell';
import { ChatRoomPage } from '../features/chat/chat-room-page';
import { DashboardPage } from '../features/chat/dashboard-page';
import { LoginOverlay } from '../features/auth/login-overlay';
import { useAuthStore } from '../features/auth/use-auth-store';

export function AppRouter() {
  const location = useLocation();
  const username = useAuthStore((state) => state.username);

  return (
    <>
      <AppShell>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/rooms/:roomId" element={<ChatRoomPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </AppShell>
      {!username && <LoginOverlay />}
    </>
  );
}
