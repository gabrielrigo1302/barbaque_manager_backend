import repositories from "../repositories/index"
import { PersonDTO } from "../dtos/PersonDTO";

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

    public async create(data: PersonDTO): Promise<String> {
        try {
            return await repositories.personRepository.create(data);
        } catch (error) {
           throw(error);
        }
    }

    public async put(id: number, data: PersonDTO): Promise<String> {
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

