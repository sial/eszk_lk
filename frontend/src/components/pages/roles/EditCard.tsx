import React from 'react'
import {Button, Input, Layout, Select} from 'antd'
import MaterialIcon from 'material-icons-react'

interface IEditCard {
    editRole: any,
    setEditRole: Function,
    saveRole: () => void
}

const EditCard: React.FC<IEditCard> =
    ({
         editRole,
         setEditRole,
         saveRole
    }) => {
    const { Option } = Select

    let header
    if (editRole && editRole.id) {
        header = 
            <div className="row">
                <div className="col-8">
                    Редактрование
                </div>
                <div className="col-4 
                                d-flex justify-content-end">
                    {'ID ' + editRole.id}
                </div>
            </div>
    } else {
        header = 
            <div className="row">
                <div className="col">
                    Создание
                </div>
            </div>
    }

    return (
        <Layout>
            {editRole &&
                <div className="card">
                    <div className="card-header" 
                        style={{
                            background: 'rgb(250, 250, 250)'
                        }}>
                        {header}
                    </div>
                    <div className="card-body pb-1">
                        <div>
                            <Input
                                placeholder="Имя роли"
                                value={editRole.name}
                                onChange={(e) => {
                                    setEditRole({
                                        ...editRole,
                                        name: e.target.value
                                    })
                                }}
                            />
                        </div>
                        <div className="pt-2">
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                placeholder="Поиск привелегий"
                                optionFilterProp="children"
                                filterOption={(input, option: any) =>
                                    option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                            </Select>
                        </div>
                        <div className="pt-2">
                            <div className="card">
                                <div className="card-header p-2"
                                     style={{
                                        background: 'rgb(250, 250, 250)'
                                    }}>
                                    Привелегии
                                </div>
                                <div className="card-body 
                                                privileges-card 
                                                p-2">
                                    <div className="row align-items-center">
                                        <div className="col-10 
                                                        d-flex align-items-center">
                                            <MaterialIcon size={16}
                                                          color="#7F8391" 
                                                          icon="lock_open"/>
                                            <span className="px-1">
                                                Карточка сотрудника - Таблица - Чтение
                                            </span>
                                        </div>
                                        <div className="col-2 d-flex
                                                        justify-content-end">
                                            <button className="btn btn-link py-0
                                                                privileges-card-button">
                                                Удалить
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="card-body pt-0 pb-3">
                        <div>
                            <div className="row justify-content-end">
                                <div className="col-6 col-lg-6 col-xl-3 
                                                d-flex justify-content-end">
                                    <Button
                                        onClick={() => setEditRole(null)}>
                                        Отменить
                                    </Button>
                                </div>
                                <div className="col-6 col-lg-6 col-xl-3 
                                                d-flex justify-content-end">
                                    <Button
                                        onClick={saveRole}
                                        type="primary">
                                            Сохранить
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Layout>
    )
}

export default EditCard