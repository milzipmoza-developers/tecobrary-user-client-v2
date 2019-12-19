import axios from 'axios';

class RequestConfig {
    public baseURL: string;
    public headers?: any;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    public setToken = (token?: any) => {
        if (token) {
            this.headers = {
                'Authorization': `Bearer ${token}`
            }
        }
    }
}

const base = (token?: string) => {
    const requestConfig = new RequestConfig('http://localhost:9090');
    requestConfig.setToken(token);
    return axios.create(requestConfig);
};

export default base;