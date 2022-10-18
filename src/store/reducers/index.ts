import {usersSlice} from './usersReducer';

export const reducers = {
    users: usersSlice.reducer,
};

export const actions = {...usersSlice.actions};
