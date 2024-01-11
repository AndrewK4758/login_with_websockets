import { io } from 'socket.io-client';

const URL = 'https://login-server-131l.onrender.com';

const socket = io(URL, { autoConnect: false });

export default socket;
