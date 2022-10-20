import {FC, memo, useEffect, useState} from 'react';
import {useAppActions, useAppSelector} from '../../../hooks';
import {FieldType, Sorting, User} from '../../../types';
import {Modal, Table} from '../../ui-component';
import {UserCard} from '../user-card';

const columns = [
    {id: 'id', label: 'Идентификатор'},
    {id: 'name', label: 'Имя'},
    {id: 'login', label: 'Логин'},
    {id: 'created_at', label: 'Дата создания', type: FieldType.SORTING},
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

    const selectRow = (rowData: any) => {
        setOpenModal(true);
        setUserData(rowData);
    };

    const [sorting, setSorting] = useState<Sorting | null>(null);

    const changeSortHandler = (sorting: Sorting) => {
        setSorting({
            ...sorting,
            order: sorting.order === 'asc' ? 'desc' : 'asc',
        });
    };

    useEffect(() => {
        fetchUsers({page, search, sorting});
    }, [page, search, sorting]);

    if (isLoading) return <div>loading</div>;
    if (error) return <div>{error}</div>;

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
