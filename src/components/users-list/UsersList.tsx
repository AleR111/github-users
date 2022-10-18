import {FC, useEffect} from 'react';

import {useAppActions, useAppSelector} from '../../hooks';
import {Table} from '../ui-component';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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

    useEffect(() => {
        fetchUsers();
    }, []);

    if (isLoading) return <div>loading</div>;
    if (error) return <div>{error}</div>;

    const isUsersData = !!users.length;

    return (
        <div>
            {isUsersData && (
                <Table
                    columns={columns}
                    data={users}
                />
            )}
        </div>
    );
};
