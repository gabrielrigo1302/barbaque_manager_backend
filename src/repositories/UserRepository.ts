import connection from '../database/connection';

const create = async(data: any) => {
    try {
        const response = await connection('user').insert(data);
        return response;
    } catch (error) {

        console.log(`error  ==== ${error}`)
        return error;
    }
}

const getAll = async() => {
    try {
        const response = await connection('user').select();
        return response;
    } catch (error) {
        return error;
    }
}

const login = async(data: any) => {
    try {
        const response = await connection('user').where({
            email: data.email,
            password: data.password
        });
        return response;
    } catch (error) {
        return error;
    }
}

export default {
    create,
    getAll,
    login
};