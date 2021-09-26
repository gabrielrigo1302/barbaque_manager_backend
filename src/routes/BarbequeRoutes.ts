import express = require('express');
import controllers from '../controllers';
const barbequeRouter = express.Router();

const barbequeController = new controllers.BarbequeController();
barbequeRouter.get('/', barbequeController.getAll);
barbequeRouter.get('/:id', barbequeController.getAllByUserId);
barbequeRouter.post('/', barbequeController.create);
barbequeRouter.put('/:id', barbequeController.put);
barbequeRouter.delete('/:id', barbequeController.deleteBarbeque);

export default barbequeRouter;
