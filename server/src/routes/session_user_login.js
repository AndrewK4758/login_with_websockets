import express from 'express';
import sessionUserLogin from '../controllers/session_user_login.js';
import landing_page from '../controllers/landing_page.js';
const router = express.Router();

router.get('/api/v1/session', sessionUserLogin, landing_page);

export { router };
