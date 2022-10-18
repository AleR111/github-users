import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {Store} from '../../types';

export const useAppSelector: TypedUseSelectorHook<Store> = useSelector;
