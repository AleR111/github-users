import {Input} from '@mui/material';

import {
    FC,
    memo,
    SetStateAction,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import {debounce} from 'lodash';

import classes from './search.module.scss';

interface SearchProps {
    // value: string;
    setValue: (value: SetStateAction<string>) => void;
    placeholder?: string;
}

export const Search: FC<SearchProps> = ({setValue, placeholder}) => {
    const [value1, setValue1] = useState('');
    const changeHandler = (event: any) => {
        setValue(event.target.value);
    };

    const debouncedChangeHandler = useMemo(() => {
        return debounce(changeHandler, 1500);
    }, []);

    useEffect(() => {
        return () => {
            debouncedChangeHandler.cancel();
        };
    });

    return (
        <Input
            placeholder={placeholder}
            onChange={debouncedChangeHandler}
            className={classes.inputPaper}
        />
    );
};
