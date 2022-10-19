import {getUser, searchUsers} from '../../api';
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
        console.log('🚀 ~ file: usersActions.ts ~ line 8 ~ params', params);
        try {
            const response = await searchUsers<any>(
                params.search,
                params.page,
                params.sorting
            );

            const array = response.data.items as any[];
            const users = array.map(async (el) => {
                return await getUser(el.login);
            });

            const results = await Promise.all(users ?? []);

            return results.map((el) => el.data);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
