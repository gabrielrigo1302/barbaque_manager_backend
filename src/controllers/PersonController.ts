import {Request, Response} from 'express'; 
import services from '../services';

export default class PersonController {
    public async get(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const personService = new services.PersonService()

            const person = await personService.get(id);
            return response.status(200).json({
                person: person 
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}
