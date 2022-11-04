import {Request, Response} from 'express'; 
import services from '../services';

export default class espController {
    public async getAll(_request: Request, response: Response): Promise<Response> {
        try {
            return response.status(200).json({
                esp: 'a'
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    public async post(request: Request, response: Response): Promise<Response> {
        try {
            const a = request.body;
            return response.status(200).json({
                esp: a
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}
