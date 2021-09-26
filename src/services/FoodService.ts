import repositories from "../repositories/index"

export default class FoodService {
    public async getAll(): Promise<String> {
        try {
            return await repositories.foodRepository.getAll();
        } catch (error) {
            throw(error);
        }
    }

    public async create(data: any): Promise<String> {
        try {
            return await repositories.foodRepository.create(data);
        } catch (error) {
            throw(error);
        }
    }

    public async put(id: number, data: any): Promise<String> {
        try {
            return await repositories.foodRepository.put(id, data);
        } catch (error) {
            throw(error);
        }
    }

    public async deleteFood(id: number): Promise<String> {
        try {
            return await repositories.foodRepository.deleteFood(id);
        } catch (error) {
            throw(error);
        }
    }
}

