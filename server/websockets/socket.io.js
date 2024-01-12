import app from '../app.js';
import { Server } from 'socket.io';
import { createServer } from 'http';
// import fs from 'fs';

/** FOR HTTPS SERVER
const options = {
	key: fs.readFileSync('../server/ssl/andrew-k.us.key'),
	cert: fs.readFileSync('../server/ssl/andrew-k_us.crt'),
	ca: fs.readFileSync('../server/ssl/andrew-k_us.ca-bundle'),
};
*/

const allowedOrigins = [
	'https://www.andrew-k.us',
	'https://www.login-server-131l.onrender.com:',
	'http://127.0.0.1:4443',
	'http://localhost:5173',
];

const httpServer = createServer(options, app);

const io = new Server(httpServer, {
	cors: {
		origin: allowedOrigins,
		methods: ['GET', 'POST'],
	},
});

io.on('connection', (socket) => {
	console.log(socket.id);
	io.emit('new-user', socket.id);
});

export default httpServer;
 