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
                accessor: 'mail',
            },
        ],
    },
]