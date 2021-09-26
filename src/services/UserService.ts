import userRepository  from "../repositories/UserRepository"; 
import { UserDTO, UserLoginDTO } from "../dtos/UserDTO";

export default class UserService {
    public async create(data: UserDTO): Promise<String> {
        try {
            return await userRepository.create(data);
        } catch (error) {
            throw(error);
        }
    }

    public async login(data: UserLoginDTO): Promise<boolean> {
        try {
            const user = await userRepository.login(data);
            
            if (user.length === 0) {
                throw('a');
            } 

            return true;
        } catch (error) {
            throw(error);
        }
    }

    public async getAll(): Promise<String> {
        try {
            return await userRepository.getAll()
        } catch (error) {
            throw(error);
        }
    }
}

