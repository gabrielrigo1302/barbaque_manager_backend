import connection from '../database/connection';

const create = async(data: any) => {
    try {
        const response = await connection('barbeque').insert(data);
        return response;
    } catch (error) {
        return error;
    }
}

const put = async(id: number, data: any) => {
    try {
        const response = await connection('barbeque').update(data).where('id', id);
        return response;
    } catch (error) {
        return error;
    }
}


const getAll = async() => {
    try {
        const response = await connection('barbeque').select();
        return response;
    } catch (error) {
        return error;
    }
}

const getAllByUserId = async(id: number) => {
    try {
        const response = await connection('barbeque').select().where('userId', id);
        return response;
    } catch (error) {
        return error;
    }
}

const deleteBarbeque = async(id: number) => {
    try {
        const response = await connection('barbeque').delete().where('id', id);
        return response;
    } catch (error) {
        return error;
    }
}

export default {
    create,
    getAll,
    getAllByUserId,
    put,
    deleteBarbeque
};