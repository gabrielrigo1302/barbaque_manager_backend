import express = require('express');

import barbequeRouter from './BarbequeRoutes';
import personRouter from './PersonRoutes';
import userRouter from './UserRoutes';

const routes = express.Router();

routes.use('/barbeque', barbequeRouter);
routes.use('/person', personRouter);
routes.use('/user', userRouter);

export default routes;
