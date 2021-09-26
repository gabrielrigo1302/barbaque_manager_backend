import repositories from "../repositories/index"

export default class BarbequeService {
    public async getAll(): Promise<String> {
        try {
            return await repositories.barbequeRepository.getAll();
        } catch (error) {
            throw(error);
        }
    }

    public async getAllByUserId(id: number): Promise<String> {
        try {
            const user = await repositories.barbequeRepository.getAllByUserId(id);
            
            if (user.length === 0) {
                throw('a');
            } 
            
            return user;
        } catch (error) {
            throw(error);
        }
    }

    public async post(data: any): Promise<String> {
        try {
            return await repositories.barbequeRepository.create(data);
        } catch (error) {
            throw(error);
        }
    }

    public async put(id: number, data: any): Promise<String> {
        try {
            return await repositories.barbequeRepository.put(id, data);
        } catch (error) {
            throw(error);
        }
    }

    public async deleteBarbeque(id: number): Promise<String> {
        try {
            return await repositories.barbequeRepository.deleteBarbeque(id);
        } catch (error) {
            throw(error);
        }
    }
}

