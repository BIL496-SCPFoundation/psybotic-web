import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Checkbox from "./Checkbox";

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


const DataTable = ({
    tableProps,
    tableBodyProps,
    title,
    service,
    columns,
    headerGroups,
    prepareRow,
    ...props
}) => {
    const tableClasses = classNames(
        tableProps,
    );
    const tableBodyClasses = classNames(
        tableProps,
    );

    let rows = getData();

    return (
        <table {...tableClasses}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...tableBodyClasses}>
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

function getData() {
    return []
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default DataTable;