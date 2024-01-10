import httpServer from './websockets/socket.io.js';

const PORT = process.env.PORT || 4200;

httpServer.listen(PORT, () => {
	console.log(`httpServer active on ${PORT}`);
});
