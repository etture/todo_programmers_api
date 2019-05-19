import express from 'express';
const router = express.Router();

import newRoute from './newRoute';
import editRoute from './editRoute';
import deleteRoute from './deleteRoute';

router.use('/new', newRoute);
router.use('/edit', editRoute);
router.use('/delete', deleteRoute);

export default router;