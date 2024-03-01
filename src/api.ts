import axios, { AxiosResponse } from "axios";
import { env } from "./env";

export function get(url: string, config: Object): Promise<AxiosResponse<any, any>> {
    return axios.get(`${env.baseURL}${url}`, config);
}
export function post(url: string, config: Object): Promise<AxiosResponse<any, any>> {
    return axios.post(`${env.baseURL}${url}`, config);
}