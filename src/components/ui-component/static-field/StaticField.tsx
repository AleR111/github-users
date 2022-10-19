import React, {FC} from 'react';
import styles from './staticField.module.scss';

interface StaticFieldProps {
    title: string;
    value: any;
    color?: string;
    className?: string;
}

export const StaticField: FC<StaticFieldProps> = ({title, value}) => {
    return (
        <div className={styles.field}>
            <span>{title}</span>
            <span>{value}</span>
        </div>
    );
};
