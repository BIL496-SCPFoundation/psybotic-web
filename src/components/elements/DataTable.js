import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Checkbox from "./Checkbox";
import {useTable} from "react-table";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import {useHistory} from "react-router-dom";


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

    const history = useHistory();

    const [data, changeData] = useState(data_rows);

    if (columns[0].Header !== "Action") {
        columns.unshift({
            Header: 'Action'
        });
    }
    columns[0]['columns'] = [{
        Header: ' ', Cell: ({row}) => (
            <div style={{width: "205px"}}>
                <ButtonGroup>
                    <Button className="button-primary button-sm" onClick={() => {
                        history.push("/table/familyMember/submit", {
                            type: "edit",
                            row: row.original
                        });
                    }}>
                        Edit
                    </Button>
                    <Button className="button-dark button-sm" onClick={() => {
                        changeData((preVal) => {
                            const dataCopy = [...preVal];
                            dataCopy.splice(row.index, 1);
                            return dataCopy;
                        });
                    }}>
                        Remove
                    </Button>
                </ButtonGroup>
            </div>
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
        <div>
            <div style={{flex: 1, overflowX: "auto"}}>
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
            </div>
            <br/>
            <Button className="button-secondary" onClick={() => {
                history.push("/table/familyMember/submit", {type: "new"});
            }}>Add</Button>
        </div>
    );
}


Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default DataTable;