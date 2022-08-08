import { io } from "socket.io-client";

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection(messages) {
    this.socket = io("http://10.6.237.6:4001/");
    this.socket.on("message", (message) => {
      messages.push(message);
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  sendMessage(message) {
    if (this.socket) {
      this.socket.emit("message", message);
    }
  }
}

export default new SocketioService();
