import httpsServer from './websockets/socket.io.js';

const PORT = process.env.PORT || 4200;

httpsServer.listen(PORT, () => {
	console.log(`httpServer active on ${PORT}`);
});
