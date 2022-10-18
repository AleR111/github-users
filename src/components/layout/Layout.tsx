import {FC} from 'react';

import {UsersList} from '../users-list';
import classes from './layout.module.scss';

export const Layout: FC = () => {
    return (
        <div className={classes.container}>
            <h2 className={classes.header}>User List</h2>
            <UsersList />
        </div>
    );
};
