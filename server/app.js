import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

import { router as loginUser } from './src/routes/login_user.js';
import { router as registerUser } from './src/routes/register_user.js';

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.dirname('../client/dist/index.html')));

app.use('/', loginUser);
app.use('/', registerUser);

export default app;
