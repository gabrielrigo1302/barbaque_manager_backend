import {Request, Response} from 'express'; 
import services from '../services';

export default class UserController {
    public async getAll(request: Request, response: Response): Promise<Response> {
        try {
            const userService = new services.UserService();

            const user = await userService.getAll();
            return response.status(200).json({
                user: user
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    public async login(request: Request, response: Response): Promise<Response> {
        try {
            const { body } = request;
            const userService = new services.UserService();

            const userId = await userService.login(body);
            return response.status(200).json({
                userId
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const userService = new services.UserService();

            const user = await userService.create(request.body);
            return response.status(200).json({
                user: user
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}
