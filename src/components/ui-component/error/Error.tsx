import {FC} from 'react';
import {Alert} from '@mui/material';

interface ErrorProps {
    value: string;
}

export const Error: FC<ErrorProps> = ({value}) => {
    return <Alert severity="error">{value}</Alert>;
};
