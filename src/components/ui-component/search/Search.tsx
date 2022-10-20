import {Input} from '@mui/material';

import {FC, memo, SetStateAction, useEffect, useMemo} from 'react';
import {debounce} from 'lodash';

import classes from './search.module.scss';

interface SearchProps {
    setValue: (value: SetStateAction<string>) => void;
    placeholder?: string;
}

export const Search: FC<SearchProps> = memo(({setValue, placeholder}) => {
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
});
