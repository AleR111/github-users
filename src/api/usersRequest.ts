import {Sorting} from '../types';
import {request} from './request';

const USERS_URL = '/users';

export const searchUsers = <T>(
    search: string,
    page: number,
    sorting: Sorting | null
) => {
    const sortingPoint = sorting ? `&sort=joined&order=${sorting.order}` : '';
    const resultUrl = `search${USERS_URL}?per_page=5&q=${search||'"'}&page=${page}${sortingPoint}`;

    return request.get<T>(resultUrl);
};
export const getUser = (login: string) => request.get(`${USERS_URL}/${login}`);
