import React, {useState, useEffect} from 'react'
import {Layout, Table, Button} from 'antd'
import headerRoles from './headerRoles.json'
import Audit from '../../utils/audit'
import EditCard from './EditCard'
import {UsergroupAddOutlined} from '@ant-design/icons'
import '../../../assets/styles/roles.scss'

const Roles: React.FC = () => {
    let [editRole, setEditRole] =
        useState<any>(null)

    const dataAudit = [
        {
            id: 1,
            time: '01-01-2020 23:48:49',
            action: 'Удаление ID 4',
            author: 'silantyev1-ia',
            ip: '192.0.0.1',
        },
        {
            id: 2,
            time: '01-01-2020 23:48:49',
            action: 'Изменение',
            author: 'silantyev1-ia',
            ip: '192.0.0.1',
        },
        {
            id: 3,
            time: '01-01-2020 23:48:49',
            action: 'Создание',
            author: 'silantyev1-ia',
            ip: '192.0.0.1',
        }
    ]

    const dataRoles = [
        {
            id: 1,
            name: 'Пользователь'
        },
        {
            id: 2,
            name: 'Руководитель группы'
        },
        {
            id: 3,
            name: 'Администратор',
        }
    ]

    const actionColumn = {
        title: 'Действие',
        dataIndex: 'id',
        render: (id: number, row: number, index: number) =>
            <div>
                <button className="btn btn-link p-0 
                                table-action-button" 
                        onClick={() => {
                             setEditRole(dataRoles[index])
                }}>
                    Редактировать
                </button>
                <button className="btn btn-link py-0 px-1 
                                table-action-button" 
                        onClick={() => {
                            setEditRole(null)
                }}>
                    Удалить
                </button>
            </div>
    }

    useEffect(() => {
        headerRoles.push(actionColumn)
        return () => {
            headerRoles.splice(-1,1)
        }
    }, [actionColumn])

    return (
        <div>
            <div className="d-flex align-items-center 
                            title-page pb-2">
                <UsergroupAddOutlined style={{color: '#7F8391'}}/>
                <span className="px-1">Роли</span>
            </div>
            <div className="row">
                <div className="col-8">
                    <div className="row pb-1">
                        <div className="col-6">
                            <span className="table-name">
                                Список ролей
                            </span>
                        </div>
                        <div className="col-6 d-flex 
                                        justify-content-end">
                            <Button
                                type="primary"
                                onClick={() => setEditRole({})}>
                                Создать
                            </Button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-0">
                                    <Table columns={headerRoles}
                                        dataSource={dataRoles}
                                        rowKey="id"
                                        size="small"
                                        pagination={
                                            {
                                                showSizeChanger: true
                                            }
                                        }/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="row">
                            <div className="col">
                                <Audit data={dataAudit}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <EditCard editRole={editRole}
                            setEditRole={setEditRole}
                            saveRole={() => setEditRole(null)}/>
                </div>
            </div>
        </div>
    )
}

export default Roles
