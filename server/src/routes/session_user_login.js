import express from 'express';
const router = express.Router();

import sessionUserLogin from '../controllers/session_user_login.js';

router.get('/api/v1/session', sessionUserLogin);

export { router };
