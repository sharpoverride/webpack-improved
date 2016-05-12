import * as React from 'react';
// import * as ReactDataGrid from 'react-datagrid';
import * as ReactDataGrid from 'react-data-grid';
export default class TheGridExperiment extends React.Component<any, any> {

    render() {
        const rows = [];

        for (var i = 0; i < 10000; i++) {
            rows.push({
                index:     i,
                firstName: `First${i}`,
                lastName:  `Last${i}`,
                city:      `City, No. ${i}`,
                email:     `my-email${i}@some-provider.com`
            });
        }

        const columns = [{
            key:   'index',
            name:  'index',
            title: '#',
            width: 50
        },
            {
                name: 'firstName',
                key:  'firstName',
                resizable : true,
                filterable : true,
                sortable: true
            },
            {
                name: 'lastName',
                key:  'lastName',
                filterable: true
            },
            {
                name: 'city',
                key:  'city',
                resizable : true,
                sortable: true,
                filterable: true
            },
            {
                name: 'email',
                key:  'email'
            }
        ];

        const rowGetter = (index) => {
            console.log(`Retrieving ${index}`);
            return rows[index];
        }

        const grid = (<ReactDataGrid
            columns={columns}
            enableCellSelect={true}
            rowGetter={rowGetter}
            rowsCount={rows.length}
            minHeight={500}
        />);

        return (<div>
            {grid}
        </div>);
    }

}