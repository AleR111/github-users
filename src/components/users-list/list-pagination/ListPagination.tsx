import {FC, memo} from 'react';
import {useAppSelector} from '../../../hooks';
import {per_page} from '../../../settings';
import {Pagination} from '../../ui-component';
import classes from './listPagination.module.scss';

interface ListPaginationProps {
    page: number;
    newPage: (page: number) => void;
}

export const ListPagination: FC<ListPaginationProps> = ({page, newPage}) => {
    const {data} = useAppSelector((store) => store.users);

    const countPage = Math.min(
        Math.ceil((data?.total_count ?? 0) / per_page),
        500
    );

    if (countPage <= 1) return null;

    return (
        <div className={classes.paginationBox}>
            <Pagination
                count={countPage}
                page={page}
                onChange={newPage}
            />
        </div>
    );
};
