import app from '../app.js';
import { Server } from 'socket.io';
import { createServer } from 'http';
// import fs from 'fs';

/**
 * FOR HTTPS SERVER 
const options = {
	key: fs.readFileSync('../server/ssl/andrew-k.us.key'),
	cert: fs.readFileSync('../server/ssl/andrew-k_us.crt'),
	ca: fs.readFileSync('../server/ssl/andrew-k_us.ca-bundle'),
};
*/

const allowedOrigins = [
	'https://www.andrew-k.us',
	'https://www.login-server-131l.onrender.com:',
];

const httpServer = createServer(app);

const io = new Server(httpServer, {
	cors: {
		origin: allowedOrigins,
		methods: ['GET', 'POST'],
	},
});

io.on('connection', (socket) => {
	console.log(socket.id);
	io.emit(socket.id);
});

export default httpServer;
