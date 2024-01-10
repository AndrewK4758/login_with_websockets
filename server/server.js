import httpServer from './websockets/socket.io.js';

const PORT = process.env.PORT;

httpServer.listen(PORT, () => {
	console.log(`httpServer active on ${PORT}`);
});
