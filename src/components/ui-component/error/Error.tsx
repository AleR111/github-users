import {Alert} from '@mui/material';
import {FC} from 'react';

interface ErrorProps {
    value: string;
}

export const Error: FC<ErrorProps> = ({value}) => {
    return <Alert severity="error">{value}</Alert>;
};
