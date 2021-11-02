import { valuesRegistation } from './../Components/Main/Main';
import axios from "axios";

type auth = {
    responseCode: number
    login: string
}
type responseCode = {
    responseCode: number
    message:string
}

export type loginType = {
    login:string
    password:string
}



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://chat-onlineyanky.herokuapp.com/',
  });

export const authMe = () => instance.get<auth>('auth/me').then( data => data.data)
export const login = (data:loginType) => instance.post<responseCode>('auth/login', data).then( data => data.data)
export const logout = () => instance.delete<responseCode>('auth/logout').then( data => data.data)
export const registration = (data:valuesRegistation) => instance.post<responseCode>('/auth/registration', data).then( data => data.data)