import {Pagination as PaginationUI} from '@mui/material';
import {FC} from 'react';
import classes from './pagination.module.scss';

interface PaginationProps {
    count: number;
    page: number;
    onChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({count, page, onChange}) => {
    return (
        <PaginationUI
            className={classes.pagination}
            count={count}
            page={page}
            shape="rounded"
            onChange={(e, page) => onChange(page)}
        />
    );
};
