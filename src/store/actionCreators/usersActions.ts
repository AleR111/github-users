import {getUsers} from '../../api';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {sliceName} from '../reducers/usersReducer';

export const fetchUsers = createAsyncThunk(
    `${sliceName}/fetchUsers`,
    async (_, {rejectWithValue}) => {
        try {
            const response = await getUsers();
            return response.data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
