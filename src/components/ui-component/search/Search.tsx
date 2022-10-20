import {FC, memo, SetStateAction, useEffect, useMemo} from 'react';
import {Input} from '@mui/material';
import {debounce} from 'lodash';

import classes from './search.module.scss';

interface SearchProps {
    setValue: (value: SetStateAction<string>) => void;
    placeholder?: string;
}

export const Search: FC<SearchProps> = memo(({setValue, placeholder}) => {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
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
