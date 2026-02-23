import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import { useAuthStore } from './use-auth-store';

export function LoginOverlay() {
  const [username, setUsername] = useState('');
  const setStoreUsername = useAuthStore((state) => state.setUsername);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username.trim()) return;
    setStoreUsername(username.trim());
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 backdrop-blur-sm">
      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="w-full max-w-md rounded-[28px] border border-white/10 bg-white/10 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
      >
        <p className="mb-1 text-xs uppercase tracking-[0.2em] text-zinc-400">Enter Workspace</p>
        <h2 className="mb-5 text-2xl font-semibold">Choose your username</h2>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="@username"
          className="mb-4 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-zinc-400/45"
        />
        <button
          type="submit"
          className="w-full rounded-2xl border border-zinc-400/25 bg-gradient-to-r from-zinc-700/70 to-black/80 px-4 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5"
        >
          Continue
        </button>
      </motion.form>
    </div>
  );
}
