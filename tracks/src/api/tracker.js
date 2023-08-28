import axios from 'axios';

export default axios.create({
    baseURL: 'http://192.168.137.1:3000'
});

