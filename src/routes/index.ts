import express from 'express';
const router = express.Router();

import getRoute from './getRoute';
import newRoute from './newRoute';
import editRoute from './editRoute';
import deleteRoute from './deleteRoute';

router.use('/get', getRoute);
router.use('/new', newRoute);
router.use('/edit', editRoute);
router.use('/delete', deleteRoute);

export default router;