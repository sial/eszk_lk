import React from 'react'
import { Table, Card } from 'antd'
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined'
import header from './headerAdit.json'

interface IAudit {
    data: Array<Object>
}

const Audit: React.FC<IAudit> = ({ data }) => {
    return (
        <div>
            <div className="table-name pb-1 d-flex 
                            align-items-center">
                    <LibraryBooksOutlinedIcon style={{color: '#7F8391'}}/>
                    <span className="pl-1">Аудит</span>
            </div>
            <Card bodyStyle={{padding: 0}}>
                <Table columns={header}
                    dataSource={data}
                    rowKey="id"
                    size="small"
                    pagination={
                        {
                            showSizeChanger: true
                        }
                    }/>
            </Card>
        </div>
    )
}

export default Audit