import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Checkbox from "./Checkbox";
import {useTable} from "react-table";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";


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


function DataTable({columns, data_rows}) {
    const [data, changeData] = useState(data_rows);

    if (columns[0].Header !== "Action") {
        columns.unshift({
            Header: 'Action'
        });
    }
    columns[0]['columns'] = [{
        Header: ' ', Cell: ({row}) => (
            <ButtonGroup>
                <Button className="button-primary button-sm" onClick={() => {

                    changeData((preVal) => {
                        const dataCopy = [...preVal];
                        dataCopy.splice(row.index, 1);
                        return dataCopy;
                    });
                }}>
                    Edit
                </Button>
                <Button className="button-dark button-sm" onClick={() => {

                    changeData((preVal) => {
                        preVal.splice(row.index, 1);
                        console.log(preVal, "pre")
                        return preVal;
                    })
                }}>
                    Remove
                </Button>
            </ButtonGroup>
        )
    }]
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