import repositories from "../repositories/index"

export default class PersonService {
    public async getAllByBarbequeId(id: number): Promise<String> {
        try {
            const person = await repositories.personRepository.getAllByBarbequeId(id);
            
            if (person.length === 0) {
                throw('a');
            } 
            return person;
        } catch (error) {
           throw(error);
        }
    }

    public async create(data: any): Promise<String> {
        try {
            return await repositories.personRepository.create(data);
        } catch (error) {
           throw(error);
        }
    }

    public async put(id: number, data: any): Promise<String> {
        try {
            return await repositories.personRepository.put(id, data);
        } catch (error) {
           throw(error);
        }
    }

    public async deletePerson(id: number): Promise<String> {
        try {
            return await repositories.personRepository.deletePerson(id);
        } catch (error) {
           throw(error);
        }
    }
}

