import * as API from '../api';
import { AxiosResponse } from 'axios';

export async function isEmailExist(emailId: string): Promise<AxiosResponse<any, any>> {
    const config = {
        params: {
            email:emailId
        }
    } 
    return await API.get('user/isExistsByEmailId', config);
}

export async function createUser(user: Object): Promise<AxiosResponse<any, any>> {

    return await API.post('api/v1/auth/signUp', user);
}

export async function signIn(user: Object): Promise<AxiosResponse<any, any>> {

    return await API.post('api/v1/auth/signIn', user);
}