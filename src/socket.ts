import io from "socket.io-client";

const socketUrl = PRODUCTION
  ? "https://roguelike.saunalanit.org"
  : "http://localhost:8080/";

export const connectSocket = () =>
  io(socketUrl, {
    reconnectionAttempts: 2,
    transports: ["websocket"],
  });
