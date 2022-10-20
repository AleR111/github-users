import {FC} from 'react';
import {format} from 'date-fns';

import {Columns, FieldType, User} from '../../../types';
import {combineString} from '../../../utils';
import {Avatar, Link, StaticField} from '../../ui-component';
import classes from './userCard.module.scss';

const rowMeta: Columns[] = [
    {id: 'id', label: 'id'},
    {
        id: 'login-name',
        label: 'Никнейм',
        type: FieldType.COMBINED_STRING,
        stringStructure: 'login (name)',
    },
    {id: 'public_repos', label: 'Количество репозиториев'},
    {id: 'followers', label: 'Последователей'},
    {id: 'following', label: 'Следует'},
    {id: 'bio', label: 'Биография'},
    {id: 'email', label: 'Email'},
    {id: 'location', label: 'Местоположение'},
    {id: 'company', label: 'Компания'},
    {id: 'created_at', label: 'Зарегистрирован', type: FieldType.DATE},
];

interface UserCardProps {
    userData: User;
}

export const UserCard: FC<UserCardProps> = ({userData}) => {
    const getValue = (row: Columns) => {
        switch (row.type) {
            case FieldType.COMBINED_STRING:
                return combineString<User>(row.stringStructure, userData);
            case FieldType.DATE:
                return format(new Date(userData[row.id]), 'dd-MM-yyyy');
            default:
                return userData[row.id];
        }
    };
    return (
        <div className={classes.userCard}>
            <Avatar
                alt={userData.name}
                src={userData.avatar_url}
            />
            {rowMeta.map((row) => {
                const value = getValue(row);
                return (
                    <StaticField
                        key={row.id}
                        title={row.label}
                        value={value ?? '-'}
                    />
                );
            })}
            <div className={classes.linkBlock}>
                <Link
                    label="Перейти в профиль"
                    href={userData.html_url}
                />
            </div>
        </div>
    );
};
