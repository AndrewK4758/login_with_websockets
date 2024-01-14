import { io } from 'socket.io-client';

// const allowedOrigins = [
// 	'https://www.andrew-k.us',
// 	'https://www.login-server-131l.onrender.com:',
// 	'http://127.0.0.1:4443',
// ];

const URL = 'https://127.0.0.1:4443';

const socket = io(URL, { autoConnect: false });

export default socket;
