import {useDispatch} from 'react-redux';
import {Dispatch} from '../../types';
import {bindActionCreators} from '@reduxjs/toolkit';
import {actions} from '../../store/reducers';
import * as actionCreatorsStore from '../../store/actionCreators';

export const actionCreators = {
    ...actions,
    ...actionCreatorsStore,
};

export const useAppActions = () => {
    const dispatch = useDispatch<Dispatch>();
    return bindActionCreators(actionCreators, dispatch);
};
