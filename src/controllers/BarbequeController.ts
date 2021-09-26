import {Request, Response} from 'express'; 
import services from '../services';

export default class BarbequeController {
    public async get(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const barbequeService = new services.BarbequeService()

            const barbeque = await barbequeService.get(id);
            return response.status(200).json({
                barbeque: barbeque 
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}
