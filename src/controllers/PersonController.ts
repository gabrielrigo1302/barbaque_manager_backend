import {Request, Response} from 'express'; 
import services from '../services';

export default class PersonController {
    public async getAllByBarbequeId(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const personService = new services.PersonService()

            const person = await personService.getAllByBarbequeId(Number(id));
            return response.status(200).json({
                person: person 
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const personService = new services.PersonService()

            const person = await personService.create(request.body);
            return response.status(200).json({
                person: person 
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    public async put(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const personService = new services.PersonService()

            const person = await personService.put(Number(id), request.body);
            return response.status(200).json({
                person: person 
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    public async deletePerson(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const personService = new services.PersonService()

            const person = await personService.deletePerson(Number(id));
            return response.status(200).json({
                person: person 
            })
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}
