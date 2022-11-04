import express = require('express');

import esp from './EspRoutes';
const routes = express.Router();

routes.use('/esp', esp);

export default routes;
