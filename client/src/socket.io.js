import { io } from 'socket.io-client';

const URL = process.env.WS || 'https://login-server-g7i8.onrender.com:4200';

const socket = io(URL, { autoConnect: false });

export default socket;
