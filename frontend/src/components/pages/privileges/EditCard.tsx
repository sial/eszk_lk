import React from 'react'
import {Button, Input, Card, Divider} from 'antd'

interface IEditCard {
    editPrivilege: any,
    setEditPrivilege: Function,
    savePrivilege: () => void
}

const EditCard: React.FC<IEditCard> =
    ({
         editPrivilege,
         setEditPrivilege,
         savePrivilege
    }) => {
    return (
        <div>
            {editPrivilege &&
                <Card title="Редактрование" 
                        size="small"
                        bodyStyle={{
                            padding: 0
                        }}
                        extra={'ID ' + editPrivilege.id}>
                    <div className="px-3 py-3">
                        <Input
                            placeholder="Привелегия"
                            value={editPrivilege.privileges}
                            onChange={(e) => {
                                setEditPrivilege({
                                    ...editPrivilege,
                                    privileges: e.target.value
                                })
                            }}
                        />
                    </div>
                    <div className="ant-modal-footer">
                        <Button
                            onClick={() => setEditPrivilege(null)}>
                            Отменить
                        </Button>
                        <Button
                            onClick={savePrivilege}
                            type="primary">
                                Сохранить
                        </Button>
                    </div>
                </Card>
            }
        </div>
    )
}

export default EditCard