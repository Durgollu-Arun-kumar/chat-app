import { useQuery } from '@tanstack/react-query';

export type ChatRoom = {
  id: string;
  name: string;
  members: number;
};

const ROOMS: ChatRoom[] = [
  { id: 'design', name: 'design-lab', members: 16 },
  { id: 'frontend', name: 'frontend-core', members: 12 },
  { id: 'product', name: 'product-sync', members: 9 },
  { id: 'random', name: 'random', members: 27 }
];

export function useChatRooms() {
  return useQuery({
    queryKey: ['rooms'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 120));
      return ROOMS;
    },
    initialData: ROOMS
  });
}
