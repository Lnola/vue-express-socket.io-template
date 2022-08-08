import { io } from "socket.io-client";

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io("http://localhost:4001");
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();
