import connection from '../database/connection';
import { UserDTO, UserLoginDTO } from '../dtos/UserDTO';

const create = async(data: UserDTO) => {
    try {
        const response = await connection('user').insert(data);
        return response;
    } catch (error) {
        console.log("error === ", error)
        return error;
    }
}

const getAll = async() => {
    try {
        const response = await connection('user').select();
        return response;
    } catch (error) {
        console.log("error === ", error)
        return error;
    }
}

const login = async(data: UserLoginDTO) => {
    try {
        const response = await connection('user').where({
            email: data.email,
            password: data.password
        });
        return response;
    } catch (error) {
        console.log("error === ", error)
        return error;
    }
}

export default {
    create,
    getAll,
    login
};