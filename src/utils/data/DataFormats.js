export const FAMILY_MEMBER = [{
    Header: 'Action', columns: [{
        Header: ' '
    }]
},
    {
        Header: 'Name',
        columns: [
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
            },
        ],
    },
    {
        Header: 'Contact',
        columns: [
            {
                Header: 'Phone',
                accessor: 'phone',
            },
            {
                Header: 'Mail',
                accessor: 'email',
            },
        ],
    },
]

export const EMERGENCY_CONTACT = [{
    Header: 'Action', columns: [{
        Header: ' '
    }]
},
    {
        Header: 'Name',
        columns: [
            {
                Header: 'Name',
                accessor: 'name',
            },

            {
                Header: 'Type',
                accessor: 'type',
            },
        ],
    },
    {
        Header: 'Contact',
        columns: [
            {
                Header: 'Phone',
                accessor: 'phone',
            },
            {
                Header: 'Mail',
                accessor: 'email',
            },
        ],
    },
]

export const USER = [
    {
        Header: 'Id',
        accessor: '_id',
    },
    {
        Header: 'First Name',
        accessor: 'firstname',
    },
    {
        Header: 'Last Name',
        accessor: 'lastname',
    },
    {
        Header: 'Gender',
        accessor: 'gender',
    },
    {
        Header: 'Gender',
        accessor: 'gender',
    },
    {
        Header: 'City',
        accessor: 'city',
    },
    {
        Header: 'Marital Status',
        accessor: 'maritalStatus',
    }
]