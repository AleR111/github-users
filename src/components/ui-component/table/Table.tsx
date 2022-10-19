import {FC} from 'react';
import {
    Paper,
    Table as TableUI,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
} from '@mui/material';

interface Columns {
    id: string;
    label: string;
    isSort?: boolean;
}

type TableDate = Record<string, string>;

interface TableProps {
    columns: Columns[];
    data: TableDate[];
    onClick?: (row: TableDate) => void;
    changeSort?: (order: any) => void;
    orderBy?: any;
}

export const Table: FC<TableProps> = ({
    columns,
    data,
    onClick,
    changeSort,
    orderBy,
}) => {
    return (
        <TableContainer component={Paper}>
            <TableUI
                sx={{minWidth: 650}}
                aria-label="simple table"
            >
                <TableHead>
                    <TableRow>
                        {columns.map((col) => {
                            return (
                                <TableCell key={col.id}>
                                    {col.isSort ? (
                                        <TableSortLabel
                                            active={orderBy.id === col.id}
                                            direction={
                                                orderBy.id === col.id
                                                    ? orderBy.order
                                                    : 'asc'
                                            }
                                            onClick={() =>
                                                changeSort({
                                                    id: col.id,
                                                    order:
                                                        orderBy.id === col.id
                                                            ? orderBy.order
                                                            : 'desc',
                                                })
                                            }
                                        >
                                            {col.label}
                                        </TableSortLabel>
                                    ) : (
                                        col.label
                                    )}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            hover
                            key={row.id}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                            onClick={() => onClick(row)}
                        >
                            {columns.map((col) => {
                                return (
                                    <TableCell
                                        key={col.id}
                                        component="th"
                                        scope="row"
                                    >
                                        {row[col.id]}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </TableUI>
        </TableContainer>
    );
};
