import {per_page} from '../settings';
import {Sorting} from '../types';
import {githubRequests} from './request';

const USERS_URL = '/users';

export const getUsers = <T>(
    search: string,
    page: number,
    sorting: Sorting | null
) => {
    const sortingPoint = sorting ? `&sort=joined&order=${sorting.order}` : '';
    const resultUrl = `search${USERS_URL}?per_page=${per_page}&q=${search||'""'}&page=${page}${sortingPoint}`;

    return githubRequests.get<T>(resultUrl);
};
export const getUserData = <T>(login: string) => githubRequests.get<T>(`${USERS_URL}/${login}`);
