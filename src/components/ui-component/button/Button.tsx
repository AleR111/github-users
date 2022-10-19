import {Button as ButtonUI} from '@mui/material';
import {FC} from 'react';

interface ButtonProps {
    label?: string;
    href?: string;
}

export const Button: FC<ButtonProps> = ({label, href}) => {
    return (
        <ButtonUI
            variant="outlined"
            href={href}
            target="_blank"
            rel="noopener"
        >
            {label}
        </ButtonUI>
    );
};
