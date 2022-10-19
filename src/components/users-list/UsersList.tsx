import {FC, useEffect, useState} from 'react';

import {useAppActions, useAppSelector} from '../../hooks';
import {Search, Table} from '../ui-component';
import {Pagination} from '../ui-component/pagination';
import classes from './usersList.module.scss';

const columns = [
    {id: 'id', label: 'Идентификатор'},
    {id: 'name', label: 'Имя'},
    {id: 'login', label: 'Логин'},
    {id: 'created_at', label: 'Дата создания'},
    {id: 'html_url', label: 'Профиль'},
];

export const UsersList: FC = () => {
    const {fetchUsers} = useAppActions();
    const {users, isLoading, error} = useAppSelector((store) => store.users);

    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    const newPage = (page: number) => {
        setPage(page);
        // dispatch(getPublicGists(page))
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (isLoading) return <div>loading</div>;
    if (error) return <div>{error}</div>;

    const isUsersData = !!users.length;

    return (
        <div>
            <div className={classes.searchBlock}>
                <Search
                    value={search}
                    setValue={setSearch}
                    placeholder="Filter by name"
                />
            </div>

            {isUsersData && (
                <Table
                    columns={columns}
                    data={users}
                />
            )}

            {/* {data.length && ( */}
            <div className={classes.paginationBox}>
                <Pagination
                    count={25}
                    page={page}
                    onChange={newPage}
                />
            </div>
            {/* )} */}
        </div>
    );
};
