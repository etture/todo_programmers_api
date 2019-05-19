import express from 'express';
const router = express.Router();

import {
	editTodoContent,
	editTodoPriority,
	editTodoDeadline,
	editTodoCompleted
} from '../controllers/editController';

// TODO 항목 제목/내용 수정
router.put('/content', editTodoContent);
// TODO 항목 우선순위 변경
router.put('/priority', editTodoPriority);
// TODO 항목 마감기한 변경
router.put('/deadline', editTodoDeadline);
// TODO 항목 완료처리
router.put('/completed', editTodoCompleted);

export default router;