import express from 'express';
const router = express.Router();
import {ITodoList} from '../utils/definitions';

import { getAllTodos, getCompletedTodos, getUncompletedTodos } from '../controllers/getController';

// 모든 TODO 반환
router.post('/all', getAllTodos);
router.post('/completed', getCompletedTodos);
router.post('/uncompleted', getUncompletedTodos);


export default router;