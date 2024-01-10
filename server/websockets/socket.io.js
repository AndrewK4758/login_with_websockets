import app from '../app.js';
import { Server } from 'socket.io';
import { createServer } from 'http';

const httpServer = createServer(app);

const io = new Server(httpServer);

io.on('connection', (socket) => {
	socket.emit(socket.id);
});

export default httpServer;
