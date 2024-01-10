import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import cors from 'cors';
import { router as loginUser } from './src/routes/login_user.js';
import { router as registerUser } from './src/routes/register_user.js';

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.dirname('../client/dist/index.html')));

app.use('/', loginUser);
app.use('/', registerUser);

export default app;
