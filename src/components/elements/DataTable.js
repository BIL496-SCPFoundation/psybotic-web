import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Checkbox from "./Checkbox";
import { useTable } from "react-table";

const propTypes = {
    title: PropTypes.String,
    service: PropTypes.elementType,
    columns: PropTypes.array,
    headerGroups: PropTypes.array
}

const defaultProps = {
    title: undefined,
    service: undefined,
    columns: [],
    headerGroups: []
}


function DataTable({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    });

    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                        })}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default DataTable;