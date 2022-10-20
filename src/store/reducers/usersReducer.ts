import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {fetchUsers} from '../actionCreators/usersActions';
import {UserListData} from '../../types';

interface InitialState {
    data: UserListData | null;
    isLoading: boolean;
    error: string;
}

const initialState: InitialState = {
    data: null,
    isLoading: null,
    error: '',
};

export const sliceName = 'users';

export const usersSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (
            state,
            action: PayloadAction<UserListData>
        ) => {
            state.isLoading = false;
            state.error = '';
            state.data = action.payload;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
            state.data = null;
        },
    },
});
