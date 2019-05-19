import express from 'express';
const router = express.Router();

import newRoute from './newRoute';
import editRoute from './editRoute';
import deleteRoute from './deleteRoute';


// TODO 목록 보기
// TODO 항목 제목/내용 수정
// TODO 항목 삭제
// TODO 항목 우선순위 변경
// TODO 항목 마감기한 변경
// TODO 항목 완료처리

router.use('/new', newRoute);
router.use('./edit', editRoute);
router.use('./delete', deleteRoute);

export default router;