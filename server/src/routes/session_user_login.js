import express from 'express';
import sessionUserLogin from '../controllers/session_user_login.js';
const router = express.Router();


router.get('/api/v1/session', sessionUserLogin);

export { router };
