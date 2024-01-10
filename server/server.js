import httpServer from './websockets/socket.io.js';
import dotenv from 'dotenv';

const x = dotenv.config({ path: '../.env' });
console.log(x, 'server');

const PORT = process.env.PORT || 4200;

httpServer.listen(PORT, () => {
	console.log(`httpServer active on ${PORT}`);
});
