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

import {Columns, FieldType, Sorting, TableDate} from '../../../types';
import {Link} from '../Link';

interface TableProps {
    columns: Columns[];
    data: TableDate[];
    onClick?: (row: TableDate) => void;
    changeSort?: (sorting: Sorting) => void;
    sorting: Sorting | null;
}

export const Table: FC<TableProps> = ({
    columns,
    data,
    onClick,
    changeSort,
    sorting,
}) => {
    const changeSortHandler = (col: Columns) =>
        changeSort({
            id: col.id,
            order: sorting?.id === col.id ? sorting?.order : 'desc',
        });
    return (
        <TableContainer component={Paper}>
            <TableUI sx={{minWidth: 650}}>
                <TableHead>
                    <TableRow>
                        {columns.map((col) => {
                            return (
                                <TableCell key={col.id}>
                                    {col.type === FieldType.SORTING ? (
                                        <TableSortLabel
                                            active={sorting?.id === col.id}
                                            direction={
                                                sorting?.id === col.id
                                                    ? sorting?.order
                                                    : 'asc'
                                            }
                                            onClick={() =>
                                                changeSortHandler(col)
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
                                        {col.type === FieldType.LINK ? (
                                            <Link
                                                href={row[col.id]}
                                                label={row[col.id]}
                                            />
                                        ) : (
                                            row[col.id]
                                        )}
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
