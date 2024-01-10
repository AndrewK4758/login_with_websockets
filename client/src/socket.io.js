import { io } from 'socket.io-client';

const URL = process.env.WS || 'https://login-server-131l.onrender.com:4200';

const socket = io(URL, { autoConnect: false });

export default socket;
