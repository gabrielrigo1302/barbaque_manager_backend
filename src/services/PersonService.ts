export default class PersonService {
    public async get(data: String): Promise<String> {
        try {
            return String(data);
        } catch (error) {
           throw(error);
        }
    }
}

