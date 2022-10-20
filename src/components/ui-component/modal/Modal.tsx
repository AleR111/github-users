import {FC} from 'react';
import {Box, Modal as ModalUI} from '@mui/material';

import classes from './modal.module.scss';

interface ModalProps {
    openModal?: boolean;
    setOpenModal?: (isOpenModal: boolean) => void;
    header?: string;
}

export const Modal: FC<ModalProps> = ({
    openModal,
    setOpenModal,
    header,
    children,
}) => {
    const handleClose = () => setOpenModal(false);
    return (
        <ModalUI
            open={openModal}
            onClose={handleClose}
        >
            <Box className={classes.modal}>
                <div className={classes.content}>
                    {header && <h2 className={classes.header}>{header}</h2>}
                    {children}
                </div>
            </Box>
        </ModalUI>
    );
};
