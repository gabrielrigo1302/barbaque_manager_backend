import express = require('express');
import controllers from '../controllers';

const userRouter = express.Router();
const userController = new controllers.UserController();

userRouter.get('/', userController.getAll);
userRouter.get('/login', userController.login);
userRouter.post('/', userController.create);

export default userRouter;
