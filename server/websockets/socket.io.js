import app from '../app.js';
import { Server } from 'socket.io';
import { createServer } from 'https';
import fs from 'fs';

const options = {
	key: fs.readFileSync('../server/ssl/pubkey.txt'),
	cert: fs.readFileSync('../server/ssl/andrew-k.us.crt'),
};

console.log(options.key);
console.log(options.cert);

const httpServer = createServer(options, app);

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
