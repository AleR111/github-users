import {FC} from 'react';
import {Avatar as AvatarUI} from '@mui/material';

import classes from './avatar.module.scss';

interface AvatarProps {
    alt?: string;
    src: string;
}

export const Avatar: FC<AvatarProps> = ({src, alt}) => {
    return (
        <div className={classes.avatar}>
            <AvatarUI
                className={classes.placeholder}
                alt={alt}
                src={src}
                sx={{width: 100, height: 100}}
            />
        </div>
    );
};
