import { AxiosResponse } from "axios";
import api from "./api";

export interface LoginPayload {
    codigo: string,
    senha: string
}

async function login(payload: LoginPayload) : Promise<AxiosResponse> {
    try {
        const response = await api.post('/login', payload)
        return response
    } catch (error) {
        console.error(error)
        throw error
    }
}


export const serviceFuncionarios={
login
};