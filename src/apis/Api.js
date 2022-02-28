import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://13.232.189.52/api'
});

export default Api;