import express from 'express';
const router = express.Router();

import {
	editTodoContent,
	editTodoCompleted
} from '../controllers/editController';

// TODO 항목 제목/내용/우선순위/마감기한 변경
router.put('/content', editTodoContent);
// TODO 항목 완료처리
router.put('/completed', editTodoCompleted);

export default router;