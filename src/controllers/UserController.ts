import {Request, Response} from 'express'; 
import services from '../services';

export default class UserController {
    public async get(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const userService = new services.UserService();

            const user = await userService.get(id);
            return response.status(200).json({
                user: user
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}
