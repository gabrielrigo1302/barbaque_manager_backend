import express = require('express');
import controllers from '../controllers';

const userRouter = express.Router();
const userController = new controllers.UserController();

userRouter.get('/:id', userController.get);

export default userRouter;
