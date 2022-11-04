import express = require('express');
import controllers from '../controllers';
const espRouter = express.Router();

const espController = new controllers.EspController();
espRouter.get('/', espController.getAll);
espRouter.post('/', espController.post);

export default espRouter;
