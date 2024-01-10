import httpServer from './websockets/socket.io.js';
import cors from 'cors';
const PORT = process.env.PORT;

httpServer.use(cors());
httpServer.listen(PORT, () => {
	console.log(`httpServer active on ${PORT}`);
});
