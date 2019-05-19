import express from 'express';
const router = express.Router();

import { createNewTodo } from '../controllers/newController';

// 새로운 TODO 작성 (선택에 따라 마감기한/우선순위 설정)
router.post('/', createNewTodo);

export default router;