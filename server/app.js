import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';
import { sessionData } from './session/session_setup.js';

const app = express();

import { router as loginUser } from './src/routes/login_user.js';
import { router as registerUser } from './src/routes/register_user.js';
import { router as sessionUserLogin } from './src/routes/session_user_login.js';
import { router as logoutUser } from './src/routes/logout_user.js';

app.use(sessionData);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
	cors({
		origin: ['*'],
		methods: ['POST', 'GET', 'PATCH', 'PUT', 'DELETE'],
		credentials: true,
		allowedHeaders: ['*'],
		exposedHeaders: ['Set-Cookie'],
	})
);

app.use(express.static(path.dirname('../client/dist/index.html')));

app.use('/', loginUser);
app.use('/', registerUser);
app.use('/', sessionUserLogin);
app.use('/', logoutUser);

export default app;
	