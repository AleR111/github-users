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
import {format} from 'date-fns';

import {Columns, FieldType, Sorting, TableData} from '../../../types';
import {Link} from '../Link';

interface TableProps {
    columns: Columns[];
    data: TableData[];
    onClick?: (row: TableData) => void;
    changeSort?: (sorting: Sorting) => void;
    sorting?: Sorting | null;
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
            ...col,
            order: sorting?.id === col.id ? sorting?.order : 'desc',
        });

    return (
        <TableContainer component={Paper}>
            <TableUI>
                <TableHead>
                    <TableRow>
                        {columns.map((col) => {
                            const direction =
                                sorting?.id === col.id ? sorting?.order : 'asc';
                            return (
                                <TableCell key={col.id}>
                                    {col.isSort ? (
                                        <TableSortLabel
                                            active
                                            direction={direction}
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
                            onClick={() => onClick(row)}
                        >
                            {columns.map((col) => {
                                return (
                                    <TableCell
                                        key={col.id}
                                        component="th"
                                        scope="row"
                                    >
                                        <TableCellValue
                                            col={col}
                                            row={row}
                                        />
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

interface TableCellValueProps {
    col: Columns;
    row: TableData;
}

const TableCellValue: FC<TableCellValueProps> = ({col, row}) => {
    switch (col.type) {
        case FieldType.LINK:
            return (
                <Link
                    href={row[col.id]}
                    label={row[col.id]}
                />
            );
        case FieldType.DATE:
            return format(new Date(row[col.id] as string), 'dd-MM-yyyy');
        default:
            return row[col.id] || '-';
    }
};
