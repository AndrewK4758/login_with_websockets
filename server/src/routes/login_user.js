import express from 'express';
import loginUser from '../controllers/login_user.js';
import sessionUserLogin from '../controllers/session_user_login.js';

const router = express.Router();

router.get('/api/v1/login', sessionUserLogin);

router.post('/api/v1/login', loginUser);

export { router };
