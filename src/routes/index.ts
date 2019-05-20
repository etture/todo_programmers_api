import express from 'express';
const router = express.Router();

import getRoute from './getRoute';
import newRoute from './newRoute';
import editRoute from './editRoute';
import deleteRoute from './deleteRoute';
import authRoute from './authRoute';

router.use('/get', getRoute);
router.use('/new', newRoute);
router.use('/edit', editRoute);
router.use('/delete', deleteRoute);
router.use('/auth', authRoute);

export default router;