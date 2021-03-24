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
        accessor: 'googleId',
    },
    {
        Header: 'First Name',
        accessor: 'firstName',
    },
    {
        Header: 'Last Name',
        accessor: 'lastName',
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

export const PSYCHOLOGIST = [
    {
        Header: 'Id',
        accessor: 'googleId',
    },
    {
        Header: 'First Name',
        accessor: 'firstName',
    },
    {
        Header: 'Last Name',
        accessor: 'lastName',
    },
    {
        Header: 'Expertise',
        accessor: 'expertise',
    },
    {
        Header: 'Age of Interest',
        accessor: 'ageOfInterest',
    },
    {
        Header: 'Educations',
        accessor: 'educations',
    },
    {
        Header: 'Titles',
        accessor: 'titles',
    },
    {
        Header: 'Biography',
        accessor: 'biography',
    },
]