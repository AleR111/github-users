import {FC, useState} from 'react';

import {Search} from '../ui-component';
import {PaginationBlock} from './pagination-block';
import {UsersTable} from './users-table';
import classes from './usersList.module.scss';

export const UsersList: FC = () => {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    const newPage = (page: number) => {
        setPage(page);
    };

    return (
        <div>
            <div className={classes.searchBlock}>
                <Search
                    setValue={setSearch}
                    placeholder="Filter by name"
                />
            </div>

            <UsersTable
                search={search}
                page={page}
            />

            <PaginationBlock
                page={page}
                newPage={newPage}
            />
        </div>
    );
};
