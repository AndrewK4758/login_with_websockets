import { io } from 'socket.io-client';

const URL = 'https://www.andrew-k.us';

const socket = io(URL, { autoConnect: false });

export default socket;
