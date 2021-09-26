export default class UserService {
    public async get(data: String): Promise<String> {
        try {
            return String(data);
        } catch (error) {
           throw(error);
        }
    }
}

