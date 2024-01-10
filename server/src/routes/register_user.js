import express from 'express';
import registerUser from '../controllers/register_user.js';
const router = express.Router();

router.post('/api/v1/register', registerUser);

export { router };
