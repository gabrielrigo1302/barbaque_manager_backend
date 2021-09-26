import express = require('express');
import controllers from '../controllers';

const personRouter = express.Router();
const personController = new controllers.PersonController();

personRouter.get('/:id', personController.get);

export default personRouter;
