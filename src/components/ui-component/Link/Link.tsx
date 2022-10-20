import {FC} from 'react';
import {Box, Link as LinkUI} from '@mui/material';

interface LinkProps {
    label?: string;
    href?: string;
}

export const Link: FC<LinkProps> = ({label, href}) => {
    const stopPropagation = (event: React.SyntheticEvent) =>
        event.stopPropagation();
    return (
        <Box
            sx={{
                typography: 'body1',
            }}
            onClick={stopPropagation}
        >
            <LinkUI
                href={href}
                target="_blank"
                rel="noopener"
                underline="hover"
            >
                {label}
            </LinkUI>
        </Box>
    );
};
