import axios from 'axios';

const URL = 'http://15.228.34.148:8082/';


export const awms = axios.create({
    baseURL: URL,
    timeout: 60000,
});

