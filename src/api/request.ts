import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

class Requests {
    private request: AxiosInstance;

    constructor(baseURL: string) {
        this.request = axios.create({
            baseURL,
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

export const githubRequests = new Requests('https://api.github.com');
