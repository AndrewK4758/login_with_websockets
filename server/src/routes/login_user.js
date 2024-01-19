import express from 'express';
import loginUser from '../controllers/login_user.js';

const router = express.Router();

router.post('/api/v1/login', loginUser);

export { router };
