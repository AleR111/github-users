import {FC, SetStateAction, useCallback, useState} from 'react';

import {Search} from '../ui-component';
import {ListPagination} from './list-pagination';
import {UsersTable} from './users-table';
import classes from './usersList.module.scss';

export const UsersList: FC = () => {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    const newPage = (page: number) => {
        setPage(page);
    };

    const setSearchHandler = useCallback(
        (value: SetStateAction<string>) => {
            setSearch(value);
            setPage(1);
        },
        [setSearch, setPage]
    );

    return (
        <div>
            <div className={classes.searchBlock}>
                <Search
                    setValue={setSearchHandler}
                    placeholder="Filter by name"
                />
            </div>

            <UsersTable
                search={search}
                page={page}
            />

            <ListPagination
                page={page}
                newPage={newPage}
            />
        </div>
    );
};
