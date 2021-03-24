import React, {useState, useCallback} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import {useHistory} from 'react-router-dom';

import 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import '../../assets/css/agGrid.css'
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import PathNameOperations from "../../utils/PathNameOperations";


const Grid = ({service, dataFormat, dataPath, editButton = true, deleteButton = true}) => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [selectedRows, setSelectedRows] = useState([]);
    const history = useHistory();
    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);

        const updateData = (data) => {
            data.forEach(function (data) {
                if(typeof data.id === "undefined") {
                    data.id = PathNameOperations.finalPathName(data._links.self.href)
                }
            });
            let dataSource = {
                rowCount: null,
                getRows: function (params) {
                    setTimeout(function () {
                        const dataAfterSortingAndFiltering = sortAndFilter(
                            data,
                            params.sortModel,
                            params.filterModel
                        );
                        const rowsThisPage = dataAfterSortingAndFiltering.slice(
                            params.startRow,
                            params.endRow
                        );
                        let lastRow = -1;
                        if (dataAfterSortingAndFiltering.length <= params.endRow) {
                            lastRow = dataAfterSortingAndFiltering.length;
                        }
                        params.successCallback(rowsThisPage, lastRow);
                    }, 500);
                },
            };
            params.api.setDatasource(dataSource);
        };

        service.findByPagination(1000).then((data) => updateData(data.data._embedded[dataPath]));

    };


    const onSelectionChanged = () => {
        setSelectedRows([...gridApi.getSelectedRows()]);
    };

    return (
        <div>
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
                                    return '<img src="https://www.ag-grid.com/example-assets/loading.gif" alt="Loading...">';
                                }
                            },
                        }}
                        gridOptions={{
                            getRowNodeId: item => item.googleId
                        }}
                        rowSelection={'multiple'}
                        rowModelType={'infinite'}
                        enableCellTextSelection={true}
                        onSelectionChanged={onSelectionChanged}
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
                        <AgGridColumn checkboxSelection={true} cellRenderer="loadingRenderer"
                                      maxWidth={40} sortable={false}/>
                        {dataFormat.map(((value, index) => {
                            return (<AgGridColumn key={index} filter="agTextColumnFilter"
                                                  filterParams={{
                                                      filterOptions: ['Includes', 'Equals'],
                                                  }} headerName={value.Header} field={value.accessor}
                                                  sortable={true}/>);
                        }))}


                    </AgGridReact>
                </div>
            </div>
            <ButtonGroup style={{"paddingTop": "30px"}}>
                {(editButton) ?
                    <Button type="button" disabled={selectedRows.length !== 1} className="button-secondary"
                            onClick={() => {
                                let selectedRow = selectedRows[0]
                                history.push("/table/profileData/submit", {
                                    prevPath: history.location.pathname,
                                    type: "edit",
                                    user: selectedRow,
                                });
                            }}>Edit</Button> : null}
                {(deleteButton) ?
                    <Button type="button" disabled={selectedRows.length === 0} className="button-primary"
                            onClick={() => {
                                let promises = [];
                                selectedRows.forEach((row) => {
                                    promises.push(service.delete(row.id));
                                });
                                Promise.all(promises).then(() => {
                                    alert("Selected "+ dataPath +" are deleted.");
                                    window.location.reload(true);
                                });
                            }}>Delete</Button> : null}
                <Button type="button" className="button-dark" onClick={() => {
                    history.push("/Admin");
                }}>Return</Button>
            </ButtonGroup>
        </div>
    );
};

function sortAndFilter(allOfTheData, sortModel, filterModel) {
    return sortData(sortModel, filterData(filterModel, allOfTheData));
}

function sortData(sortModel, data) {
    let sortPresent = sortModel && sortModel.length > 0;
    if (!sortPresent) {
        return data;
    }
    let resultOfSort = data.slice();
    resultOfSort.sort(function (a, b) {
        for (let k = 0; k < sortModel.length; k++) {
            const sortColModel = sortModel[k];
            const valueA = a[sortColModel.colId];
            const valueB = b[sortColModel.colId];
            if (valueA === valueB) {
                continue;
            }
            let sortDirection = sortColModel.sort === 'asc' ? 1 : -1;
            if (valueA > valueB) {
                return sortDirection;
            } else {
                return sortDirection * -1;
            }
        }
        return 0;
    });
    return resultOfSort;
}

function filterData(filterModel, data) {
    let filterPresent = filterModel && Object.keys(filterModel).length > 0;
    if (!filterPresent) {
        return data;
    }
    let resultOfFilter = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        for (let prop in filterModel) {
            if (Object.prototype.hasOwnProperty.call(filterModel, prop)) {
                if (item[prop] === null)
                    continue;
                let filterField = filterModel[prop];
                let value = item[prop].toLowerCase();
                let filterValue = filterField.filter.toLowerCase()
                if (filterField.type === "Equals" && filterValue !== value)
                    continue;
                else if (filterField.type === "Includes" && !value.includes(filterValue))
                    continue;
            }
            resultOfFilter.push(item);
        }
    }
    return resultOfFilter;
}

export default Grid;