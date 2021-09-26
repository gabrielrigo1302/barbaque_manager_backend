import connection from '../database/connection';

const create = async(data: any) => {
    try {
        const response = await connection('food').insert(data);
        return response;
    } catch (error) {
        return error;
    }
}

const put = async(id: number, data: any) => {
    try {
        const response = await connection('food').update(data).where('id', id);
        return response;
    } catch (error) {
        return error;
    }
}

const getAll = async() => {
    try {
        const response = await connection('food').select();
        return response;
    } catch (error) {
        return error;
    }
}

const deleteFood = async(id: number) => {
    try {
        const response = await connection('food').delete().where('id', id);
        return response;
    } catch (error) {
        return error;
    }
}

export default {
    create,
    getAll,
    put,
    deleteFood
};