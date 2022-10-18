import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchUsers} from '../actionCreators/usersActions';

interface User {}

interface InitialState {
    users: User[];
    isLoading: boolean;
    error: string;
}

const initialState: InitialState = {
    users: [],
    isLoading: null,
    error: '',
};

export const sliceName = 'users';

export const usersSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});
