import connection from '../database/connection';

const create = async(data: any) => {
    try {
        const response = await connection('person').insert(data);
        return response;
    } catch (error) {
        return error;
    }
}

const put = async(id: number, data: any) => {
    try {
        const response = await connection('person').update(data).where('id', id);
        return response;
    } catch (error) {
        return error;
    }
}

const getAllByBarbequeId = async(id: number) => {
    try {
        const response = await connection('person').select().where('barbequeId', id);
        return response;
    } catch (error) {
        return error;
    }
}

const deletePerson = async(id: number) => {
    try {
        const response = await connection('person').delete().where('id', id);
        return response;
    } catch (error) {
        return error;
    }
}

export default {
    create,
    getAllByBarbequeId,
    put,
    deletePerson
};