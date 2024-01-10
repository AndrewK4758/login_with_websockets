import app from '../app.js';
import { Server } from 'socket.io';
import { createServer } from 'http';

const httpServer = createServer(app);

const io = new Server(httpServer, {
	cors: {
		origin: 'https://login-server-131l.onrender.com:4200',
	},
});

io.on('connection', (socket) => {
	io.emit(socket.id);
});

export default httpServer;
