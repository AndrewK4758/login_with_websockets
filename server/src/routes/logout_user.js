import express from 'express';
import logoutUser from '../controllers/logout_user.js';

const router = express.Router();

router.get('/api/v1/logout', logoutUser);

export { router };
