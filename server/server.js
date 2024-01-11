import httpServer from './websockets/socket.io.js';

const PORT = process.env.PORT || 4200;

httpServer.listen(PORT, '127.0.0.1', () => {
	console.log(`httpServer active on ${PORT}`);
});
