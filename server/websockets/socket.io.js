import app from '../app.js';
import { Server } from 'socket.io';
import { createServer } from 'http';

const httpServer = createServer(app);

const io = new Server(httpServer, {
	cors: {
		origin: 'https://login-server-131l.onrender.com',
	},
});

io.on('connection', (socket) => {
	console.log(socket.id);
	io.emit(socket.id);
});

export default httpServer;
