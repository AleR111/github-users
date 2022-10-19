import {Input} from '@mui/material';

import {FC, SetStateAction, useCallback} from 'react';
import {debounce} from 'lodash';

import classes from './search.module.scss';

interface SearchProps {
    value: string;
    setValue: (value: SetStateAction<string>) => void;
    placeholder?: string;
}

export const Search: FC<SearchProps> = ({value, setValue, placeholder}) => {
    const changeHandler = (event: any) => {
        setValue(event.target.value);
    };

    const debouncedChangeHandler = useCallback(
        debounce(changeHandler, 1500),
        []
    );

    return (
        <Input
            placeholder={placeholder}
            onChange={debouncedChangeHandler}
            className={classes.inputPaper}
        />
    );
};
