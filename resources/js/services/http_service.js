import store from '../store/modules/service';
import axios from 'axios';

export function http(){
    return axios.create({
        baseURL: store.state.apiURL
    })
}