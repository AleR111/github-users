import {getUser, getUsers} from '../../api';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {sliceName} from '../reducers/usersReducer';

export const fetchUsers = createAsyncThunk(
    `${sliceName}/fetchUsers`,
    async (_, {rejectWithValue}) => {
        try {
            const response = await getUsers();

            const array = response.data as any[];
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
