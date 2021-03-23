import React, {useState} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import '../../assets/css/agGrid.css'
import {USER} from '../../utils/data/DataFormats'
import UserService from "../../utils/data/axios/services/UserService";

const Grid = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const userService = new UserService();

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);

        const updateData = (data) => {
            data.forEach(function (data, index) {
                data.id = 'R' + (index + 1);
            });
            var dataSource = {
                rowCount: null,
                getRows: function (params) {
                    console.log('asking for ', params);
                    setTimeout(function () {
                        var rowsThisPage = data.slice(
                            params.startRow,
                            params.endRow
                        );
                        var lastRow = -1;
                        if (data.length <= params.endRow) {
                            lastRow = data.length;
                        }
                        params.successCallback(rowsThisPage, lastRow);
                    }, 500);
                },
            };
            params.api.setDatasource(dataSource);
        };
        userService.findByPagination(1000).then((data) => updateData(data.data._embedded.users));
        /*
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then((resp) => resp.json())
            .then((data) => updateData(data));*/
    };

    return (
        <div style={{width: '1140px', height: '700px'}}>
            <div
                id="myGrid"
                style={{
                    height: '100%',
                    width: '100%',
                }}
                className="ag-theme-alpine-dark"
            >
                <AgGridReact
                    defaultColDef={{
                        flex: 1,
                        minWidth: 150,
                        sortable: true,
                        resizable: true,
                        floatingFilter: true,
                    }}
                    components={{
                        loadingRenderer: function (params) {
                            if (params.value !== undefined) {
                                return params.value;
                            } else {
                                return '<img src="https://www.ag-grid.com/example-assets/loading.gif">';
                            }
                        },
                    }}
                    rowSelection={'multiple'}
                    rowModelType={'infinite'}
                    cacheOverflowSize={2}
                    maxConcurrentDatasourceRequests={2}
                    infiniteInitialRowCount={1}
                    maxBlocksInCache={2}
                    pagination={true}
                    paginationPageSize={10}
                    cacheBlockSize={10}
                    getRowNodeId={function (item) {
                        return item.id;
                    }}
                    onGridReady={onGridReady}
                >
                    <AgGridColumn checkboxSelection={true} maxWidth={40} sortable={false}/>
                    {USER.map(((value) => {
                        return (<AgGridColumn headerName={value.Header} field={value.accessor} sortable={false}/>);
                    }))}


                </AgGridReact>
            </div>
        </div>
    );
};

// cellRenderer="loadingRenderer"
export default Grid;