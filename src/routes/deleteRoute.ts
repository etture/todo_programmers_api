import express from 'express';
const router = express.Router();

import { deleteTodo } from '../controllers/deleteController';

// TODO 항목 삭제
router.delete('/', deleteTodo);

export default router;