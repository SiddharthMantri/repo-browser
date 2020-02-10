import axios from 'axios'
import { async } from 'q';

const BASE_URL = "https://api.github.com";
const GET = 'GET';
const POST = 'POST';



const request = (method: string, url: string, params?: any) => new Promise((resolve, reject) => {
    if (typeof params !== 'object') params = {};
    const options = {
        method,
        url,
        baseURL: BASE_URL,
        validateStatus: (status: Number): boolean => status >= 200 && status < 300,
        ...params,
    };

    axios.request(options).then((response) => {
        if (response.status === 200) {
            resolve(response.data);
        } else {
            resolve({ response });
        }
    }).catch((error) => {
        resolve({ error });
    });
});

const API = {
    searchUser: async (searchVal: string) => await request(GET, `search/users?q=${searchVal}`),
    getRepos: async (url: string) => axios.get(url),
    userData: async (username: string) => axios.all([
        axios.get(`${BASE_URL}/users/${username}`),
        axios.get(`${BASE_URL}/users/${username}/orgs`)
    ])
};

export default API;

