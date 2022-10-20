import {createAsyncThunk} from '@reduxjs/toolkit';

import {getUserData, getUsers} from '../../api';
import {SearchResult, Sorting, User} from '../../types';

interface Params {
    page?: number;
    search?: string;
    sorting?: Sorting | null;
}

export const fetchUsers = createAsyncThunk(
    `users/fetchUsers`,
    async (params: Params = {}, {rejectWithValue}) => {
        const {page, search, sorting} = params;
        try {
            const response = await getUsers<SearchResult>(
                search,
                page,
                sorting
            );

            const usersLogins = response.data.items;
            const usersPromises = usersLogins.map(async (user) => {
                return await getUserData<User>(user.login);
            });

            const users = await Promise.all(usersPromises);
            const userData = users.map((el) => el.data);

            const data = {
                users: userData,
                total_count: response.data.total_count,
            };

            return data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
);
