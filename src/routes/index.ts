import express = require('express');

import barbequeRouter from './BarbequeRoutes';
import personRouter from './PersonRoutes';
import userRouter from './UserRoutes';
import foodRouter from './FoodRoutes';

const routes = express.Router();

routes.use('/barbeque', barbequeRouter);
routes.use('/person', personRouter);
routes.use('/user', userRouter);
routes.use('/food', foodRouter);

export default routes;
