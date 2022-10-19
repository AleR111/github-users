import {FC, useEffect, useState} from 'react';

import {useAppActions, useAppSelector} from '../../hooks';
import {User} from '../../types';
import {Modal, Pagination, Search, Table} from '../ui-component';
import {UserCard} from './user-card';
import classes from './usersList.module.scss';

const columns = [
    {id: 'id', label: 'Идентификатор'},
    {id: 'name', label: 'Имя'},
    {id: 'login', label: 'Логин'},
    {id: 'created_at', label: 'Дата создания', isSort: true},
    {id: 'html_url', label: 'Профиль'},
];

export const UsersList: FC = () => {
    const {fetchUsers} = useAppActions();
    const {users, isLoading, error} = useAppSelector((store) => store.users);

    const [search, setSearch] = useState('');
    console.log('🚀 ~ file: UsersList.tsx ~ line 22 ~ search', search);
    const [page, setPage] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const [userData, setUserData] = useState<User | null>(null);

    const newPage = (page: number) => {
        setPage(page);
    };

    const selectRow = (rowData: any) => {
        setOpenModal(true);
        setUserData(rowData);
    };
    const initOrderBy = {
        id: '',
        order: '',
    };

    const [orderBy, setOrderBy] = useState(initOrderBy);

    useEffect(() => {
        fetchUsers();
        console.log(search, page);
    }, [page]);

    if (isLoading) return <div>loading</div>;
    if (error) return <div>{error}</div>;

    const isUsersData = !!users.length;

    return (
        <div>
            <div className={classes.searchBlock}>
                <Search
                    // value={search}
                    setValue={setSearch}
                    placeholder="Filter by name"
                />
            </div>

            {isUsersData && (
                <Table
                    columns={columns}
                    data={users}
                    onClick={selectRow}
                    orderBy={orderBy}
                    changeSort={(order) => {
                        setOrderBy({
                            ...order,
                            order: order.order === 'asc' ? 'desc' : 'asc',
                        });
                    }}
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
            <Modal
                openModal={openModal}
                setOpenModal={setOpenModal}
            >
                <UserCard userData={userData} />
            </Modal>
            {/* )} */}
        </div>
    );
};
