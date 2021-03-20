import React, {useState} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Grid = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ]);

    const onGridReady = params => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}>
                <AgGridColumn field="make"></AgGridColumn>
                <AgGridColumn field="model"></AgGridColumn>
                <AgGridColumn field="price"></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default Grid