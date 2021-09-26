import express = require('express');
import controllers from '../controllers';
const barbequeRouter = express.Router();

const barbequeController = new controllers.BarbequeController();
barbequeRouter.get('/:id', barbequeController.get);

export default barbequeRouter;
