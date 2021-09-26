import express = require('express');
import controllers from '../controllers';

const personRouter = express.Router();
const personController = new controllers.PersonController();

personRouter.get('/:id', personController.getAllByBarbequeId);
personRouter.post('/', personController.create);
personRouter.put('/:id', personController.put);
personRouter.delete('/:id', personController.deletePerson);


export default personRouter;
