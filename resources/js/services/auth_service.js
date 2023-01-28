import {http, httpFile} from './http_service';
//import jwt from 'jsonwebtoken';
export async function login(user) {
    const response = await http().post('/auth/login', user);
    if (response.status === 200) {
        setToken(response.data);
    }
    return response.data;
}
export function isLoggedIn() {
    const token = localStorage.getItem('larave-vue-spa-token');
    return token != null;
}

export function logout() {
    http().get('/auth/logout');
    localStorage.removeItem('larave-vue-spa-token');
}

export function setToken(user){
    localStorage.setItem('larave-vue-spa-token',JSON.stringify(user.access_token))
}
