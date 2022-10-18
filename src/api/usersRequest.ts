import {request} from './request';

const USERS_URL = '/users';

export const getUsers = () => request.get(USERS_URL);
