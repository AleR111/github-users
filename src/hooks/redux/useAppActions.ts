import {useDispatch} from 'react-redux';
import {Dispatch} from '../../types';
import {bindActionCreators} from '@reduxjs/toolkit';
import {actions} from '../../store/reducers';

export const actionCreators = {
    ...actions,
};

export const useAppActions = () => {
    const dispatch = useDispatch<Dispatch>();
    return bindActionCreators(actionCreators, dispatch);
};
