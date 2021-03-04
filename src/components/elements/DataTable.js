import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Checkbox from "./Checkbox";
import {useTable} from "react-table";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import {useHistory} from "react-router-dom";
import UserService from "../../utils/data/axios/services/UserService";


const propTypes = {
    title: PropTypes.String,
    service: PropTypes.elementType,
    columns: PropTypes.array,
    headerGroups: PropTypes.array,
    setData: PropTypes.func
}

const defaultProps = {
    title: undefined,
    service: undefined,
    columns: [],
    headerGroups: [],
    setData: undefined
}


function DataTable({location, columns, service, url}) {
    const history = useHistory();
    const dataService = new service();

    const [data, setData] = useState([])
    let userService;


    userService = new UserService(url);
    userService.getData("1").then((response) => {
        if (JSON.stringify(response.data) !== JSON.stringify(data))
            setData(response.data);
    });


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
                        history.push(location + "submit", {
                            type: "edit",
                            row: row.original,
                        });
                    }}>
                        Edit
                    </Button>
                    <Button className="button-dark button-sm" onClick={() => {
                        dataService.delete(row.original.id).then(
                            userService.getData("1").then((response) => {
                                setData(response.data);
                            })
                        );
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
            <ButtonGroup>
                <Button className="button-secondary reveal-from-bottom" onClick={() => {
                    history.push(location + "submit", {type: "new"});
                }}>Add</Button>
                <Button type="submit" className="button-dark reveal-from-bottom" onClick={() => {
                    history.push("/profile");
                }}>Return</Button>
            </ButtonGroup>
        </div>
    );
}


Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default DataTable;