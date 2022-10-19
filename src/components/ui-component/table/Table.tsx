import {FC} from 'react';
import {
    Paper,
    Table as TableUI,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

interface Columns {
    id: string;
    label: string;
}

type TableDate = Record<string, string>;

interface TableProps {
    columns: Columns[];
    data: TableDate[];
    onClick?: (row: TableDate) => void;
}

export const Table: FC<TableProps> = ({columns, data, onClick}) => {
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
                                <TableCell key={col.id}>{col.label}</TableCell>
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
