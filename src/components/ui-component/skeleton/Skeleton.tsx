import {FC} from 'react';

import {Skeleton as SkeletonUI} from '@mui/material';

export const Skeleton: FC = () => {
    return (
        <SkeletonUI
            animation="wave"
            height={68}
        />
    );
};
