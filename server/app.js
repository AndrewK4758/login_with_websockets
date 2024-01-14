import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';
import session from 'express-session';

const app = express();

import { router as loginUser } from './src/routes/login_user.js';
import { router as registerUser } from './src/routes/register_user.js';
import { router as sessionUserLogin } from './src/routes/session_user_login.js';

const sessionMiddle = session({
	secret: process.env.SESSION_SEC,
	resave: false,
	saveUninitialized: false,
	cookie: {
		sameSite: 'lax',
	},
});

app.use(cors());
app.use(sessionMiddle);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.dirname('../client/dist/index.html')));

app.use('/', loginUser);
app.use('/', registerUser);
app.use('/', sessionUserLogin);

export default app;
