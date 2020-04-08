import MaterialTable from 'material-table'
import React from 'react'

interface ITable {
    header: Array<Object>,
    data: Array<Object>
}

const Table: React.FC<ITable> = ({header, data}) => {
    return (
        <MaterialTable
            localization={{
                header: {
                    actions: ''
                }
            }}
            components = {{
                Action: (props) => (
                    <div>{props.action.icon}</div>
                )
            }}
            columns={header}
            data={data}
            actions={[]}
            options={{
                actionsColumnIndex: -1,
                search: false,
                showTitle: false,
                toolbar: false
            }}
        />
    )
}

export default Table