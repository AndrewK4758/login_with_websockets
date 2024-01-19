import session from 'express-session';
import { sessionStore } from '../database/db.js';

const sessionData = session({
	name: 'Login with Websockets',
	secret: process.env.SESSION_SEC,
	cookie: {
		secure: true,
		sameSite: false,
		maxAge: 1000 * 60 * 60 * 24 * 7,
	},
	store: sessionStore,
	resave: false,
	saveUninitialized: false,
});
export { sessionData };
