import express from 'express';
const router = express.Router();

import {signIn, signUp} from '../controllers/authController';

router.post('/signin', signIn);
router.post('/signup', signUp);

export default router;