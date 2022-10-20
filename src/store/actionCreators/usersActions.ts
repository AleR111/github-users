import {getUserData, getUsers} from '../../api';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {sliceName} from '../reducers/usersReducer';
import {Sorting} from '../../types';

interface Params {
    page?: number;
    search?: string;
    sorting?: Sorting | null;
}

export const fetchUsers = createAsyncThunk(
    `${sliceName}/fetchUsers`,
    async (params: Params = {}, {rejectWithValue}) => {
        const {page, search, sorting} = params;
        try {
            const response = await getUsers<any>(search, page, sorting);

            const usersLogins = response.data.items as any[];
            const usersPromises = usersLogins.map(async (user) => {
                return await getUserData(user.login);
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
