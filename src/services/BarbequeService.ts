import repositories from "../repositories/index"
import { BarbequeDTO } from "../dtos/BarbequeDTO";

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
            
            return user;
        } catch (error) {
            throw(error);
        }
    }

    public async post(data: BarbequeDTO): Promise<String> {
        try {
            return await repositories.barbequeRepository.create(data);
        } catch (error) {
            throw(error);
        }
    }

    public async put(id: number, data: BarbequeDTO): Promise<String> {
        try {
            return await repositories.barbequeRepository.put(id, data);
        } catch (error) {
            throw(error);
        }
    }

    public async deleteBarbeque(id: number): Promise<String> {
        try {
            await repositories.personRepository.deletePersonByBarbequeId(id);
            return await repositories.barbequeRepository.deleteBarbeque(id);
        } catch (error) {
            throw(error);
        }
    }
}

