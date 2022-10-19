import {FC, useEffect, useState} from 'react';

import {useAppActions, useAppSelector} from '../../hooks';
import {User} from '../../types';
import {Modal, Pagination, Search, Table} from '../ui-component';
import {UserCard} from './user-card';
import {UsersTable} from './users-table';
import classes from './usersList.module.scss';

const columns = [
    {id: 'id', label: 'Идентификатор'},
    {id: 'name', label: 'Имя'},
    {id: 'login', label: 'Логин'},
    {id: 'created_at', label: 'Дата создания', isSort: true},
    {id: 'html_url', label: 'Профиль'},
];

export const UsersList: FC = () => {
    // const {users, isLoading, error} = useAppSelector((store) => store.users);

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

            {/* {data.length && ( */}
            <div className={classes.paginationBox}>
                <Pagination
                    count={25}
                    page={page}
                    onChange={newPage}
                />
            </div>
        </div>
    );
};
