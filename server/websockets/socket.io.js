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
	'http://localhost:4200',
	'https://localhost:5173',
];

const httpServer = createServer(app);

const io = new Server(httpServer, {
	cors: {
		origin: allowedOrigins,
		methods: ['GET', 'POST', 'DELETE', 'PUT', 'PUSH'],
	},
});

io.on('connection', (socket) => {
	console.log(socket.id);
	io.emit('new-user', socket.id);
});

export default httpServer;
 