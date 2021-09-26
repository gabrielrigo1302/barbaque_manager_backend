import {Request, Response} from 'express'; 
import services from '../services';

export default class foodController {
    public async getAll(request: Request, response: Response): Promise<Response> {
        try {
            const foodService = new services.FoodService()

            const food = await foodService.getAll();
            return response.status(200).json({
                food: food 
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const foodService = new services.FoodService()

            const food = await foodService.create(request.body);
            return response.status(200).json({
                food: food 
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    public async put(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const foodService = new services.FoodService()

            const food = await foodService.put(Number(id), request.body);
            return response.status(200).json({
                food: food 
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    public async deleteFood(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const foodService = new services.FoodService()

            const food = await foodService.deleteFood(Number(id));
            return response.status(200).json({
                food: food 
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}
