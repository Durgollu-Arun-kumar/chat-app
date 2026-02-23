import { SendHorizontal } from 'lucide-react';
import { FormEvent, useState } from 'react';

type MessageComposerProps = {
  onSubmit: (value: string) => void;
};

export function MessageComposer({ onSubmit }: MessageComposerProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="sticky bottom-0 mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-3 backdrop-blur-md">
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Send a message..."
        className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-zinc-400/40"
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-xl border border-zinc-400/25 bg-zinc-700/35 px-4 py-2.5 text-sm text-zinc-100 transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-600/45"
      >
        Send
        <SendHorizontal className="h-4 w-4" />
      </button>
    </form>
  );
}
