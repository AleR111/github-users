import {FC} from 'react';
import {User} from '../../../types';
import {combineString} from '../../../utils';
import {Avatar, Link, StaticField} from '../../ui-component';
import classes from './userCard.module.scss';

interface UserCardProps {
    userData: User;
}

const rowMeta = [
    {id: 'id', label: 'id'},
    {
        id: 'login-name',
        label: 'Никнейм',
        type: 'COMBINED_STRING',
        stringStructure: 'login (name)',
    },
    {id: 'public_repos', label: 'Количество репозиториев'},
    {id: 'followers', label: 'Последователей'},
    {id: 'following', label: 'Следует'},
    {id: 'bio', label: 'Биография'},
    {id: 'email', label: 'Email'},
    {id: 'location', label: 'Местоположение'},
    {id: 'company', label: 'Компания'},
    {id: 'created_at', label: 'Зарегистрирован'},
];

export const UserCard: FC<UserCardProps> = ({userData}) => {
    return (
        <div>
            <Avatar
                alt={userData.name as string}
                src={userData.avatar_url as string}
            />
            {rowMeta.map((row) => {
                const value =
                    row.type === 'COMBINED_STRING'
                        ? combineString<User>(row.stringStructure, userData)
                        : userData[row.id];
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
                    href={userData.html_url as string}
                />
            </div>
        </div>
    );
};
