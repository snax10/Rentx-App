import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://172.21.128.1:3333',
});