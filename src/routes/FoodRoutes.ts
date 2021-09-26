import express = require('express');
import controllers from '../controllers';
const foodRouter = express.Router();

const foodController = new controllers.FoodController();
foodRouter.get('/', foodController.getAll);
foodRouter.post('/', foodController.create);
foodRouter.put('/:id', foodController.put);
foodRouter.delete('/:id', foodController.deleteFood);

export default foodRouter;
