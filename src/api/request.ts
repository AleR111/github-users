import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

class Request {
    private request: AxiosInstance;

    constructor() {
        this.request = axios.create({
            baseURL: 'https://api.github.com',
        });
    }

    get<T>(url: string, config?: AxiosRequestConfig) {
        return this.request.get<T>(url, config);
    }

    post<T, D>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
        return this.request.post<T>(url, data, config);
    }

    put<T, D>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
        return this.request.put<T, D>(url, data, config);
    }
}

export const request = new Request();
