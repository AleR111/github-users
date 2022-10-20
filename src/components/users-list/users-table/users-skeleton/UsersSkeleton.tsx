import {per_page} from '../../../../settings';
import {Skeleton} from '../../../ui-component';

export const UsersSkeleton = () => {
    return (
        <div>
            {Array(per_page)
                .fill(0)
                .map((_, index) => {
                    return <Skeleton key={index} />;
                })}
        </div>
    );
};
