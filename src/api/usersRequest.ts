import {request} from './request';

const USERS_URL = '/users';

export const getUsers = () => request.get(`${USERS_URL}?per_page=5`);
export const getUser = (login: string) => request.get(`${USERS_URL}/${login}`);
