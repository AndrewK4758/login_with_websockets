import express from 'express';
import landing_page from '../controllers/landing_page.js';
import sessionUserLogin from '../controllers/session_user_login.js';

const router = express.Router();

router.get('/', sessionUserLogin, landing_page);

export { router };
