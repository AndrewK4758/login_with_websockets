import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as loginUser } from './src/routes/login_user.js';
import { router as registerUser } from './src/routes/register_user.js';

const x = dotenv.config({ path: './.env' });
console.log(x);
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.dirname('../client/dist/index.html')));

app.use('/', loginUser);
app.use('/', registerUser);

export default app;
