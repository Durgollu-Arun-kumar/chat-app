import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export function initSocket(username: string) {
  if (!socket) {
    socket = io('http://localhost:3001', {
      autoConnect: false,
      auth: { username }
    });
  }

  if (!socket.connected) {
    socket.auth = { username };
    socket.connect();
  }

  return socket;
}
