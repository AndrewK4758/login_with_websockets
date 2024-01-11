import app from '../app.js';
import { Server } from 'socket.io';
import { createServer } from 'https';
import fs from 'fs';

const options = {
	key: fs.readFileSync('../server/ssl/andrew-k.us_key.key'),
	cert: fs.readFileSync('../server/ssl/cert.pem'),
	requestCert: false,
	rejectUnauthorized: false,
};

const httpsServer = createServer(options, app);

const io = new Server(httpsServer, {
	cors: {
		origin: 'https://login-server-131l.onrender.com',
	},
});

io.on('connection', (socket) => {
	console.log(socket.id);
	io.emit(socket.id);
});

export default httpsServer;
