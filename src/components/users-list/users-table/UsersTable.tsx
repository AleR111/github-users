import {FC, memo, useEffect, useState} from 'react';

import {useAppActions, useAppSelector} from '../../../hooks';
import {Columns, FieldType, Sorting, User} from '../../../types';
import {Error, Modal, Table} from '../../ui-component';
import {UserCard} from '../user-card';
import {UsersSkeleton} from './users-skeleton';

const columns: Columns[] = [
    {id: 'id', label: 'Идентификатор'},
    {id: 'name', label: 'Имя'},
    {id: 'login', label: 'Логин'},
    {
        id: 'created_at',
        label: 'Дата создания',
        type: FieldType.DATE,
        isSort: true,
    },
    {id: 'html_url', label: 'Профиль', type: FieldType.LINK},
];

interface UsersTableProps {
    search: string;
    page: number;
}

export const UsersTable: FC<UsersTableProps> = memo(({search, page}) => {
    const {data, isLoading, error} = useAppSelector((store) => store.users);
    const {fetchUsers} = useAppActions();

    const [openModal, setOpenModal] = useState(false);
    const [userData, setUserData] = useState<User | null>(null);
    const [sorting, setSorting] = useState<Sorting | null>(null);

    const selectRow = (rowData: any) => {
        setOpenModal(true);
        setUserData(rowData);
    };

    const changeSortHandler = (sorting: Sorting) => {
        setSorting({
            ...sorting,
            order: sorting.order === 'asc' ? 'desc' : 'asc',
        });
    };

    useEffect(() => {
        fetchUsers({page, search, sorting});
    }, [page, search, sorting]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [data]);

    if (isLoading) return <UsersSkeleton />;
    if (error) return <Error value={error} />;

    const isUsersData = !!data?.users.length;

    return (
        <>
            {isUsersData && (
                <Table
                    columns={columns}
                    data={data.users}
                    onClick={selectRow}
                    sorting={sorting}
                    changeSort={changeSortHandler}
                />
            )}
            <Modal
                openModal={openModal}
                setOpenModal={setOpenModal}
            >
                <UserCard userData={userData} />
            </Modal>
        </>
    );
});
