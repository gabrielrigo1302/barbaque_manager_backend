import {Request, Response} from 'express'; 
import services from '../services';

export default class BarbequeController {
    public async getAll(request: Request, response: Response): Promise<Response> {
        try {
            const barbequeService = new services.BarbequeService()

            const barbeque = await barbequeService.getAll();
            return response.status(200).json({
                barbeque: barbeque 
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    public async getAllByUserId(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const barbequeService = new services.BarbequeService()

            const barbeque = await barbequeService.getAllByUserId(Number(id));
            return response.status(200).json({
                barbeque: barbeque 
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const barbequeService = new services.BarbequeService()

            const barbeque = await barbequeService.post(request.body);
            return response.status(200).json({
                barbeque: barbeque 
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    public async put(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const barbequeService = new services.BarbequeService()

            const barbeque = await barbequeService.put(Number(id), request.body);
            return response.status(200).json({
                barbeque: barbeque 
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    public async deleteBarbeque(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const barbequeService = new services.BarbequeService()

            const barbeque = await barbequeService.deleteBarbeque(Number(id));
            return response.status(200).json({
                barbeque: barbeque 
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}
