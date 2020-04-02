import React from 'react'
import { Input, Divider} from 'antd'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Fade,
    Grid, Slide,
    TextField,
    Typography
} from "@material-ui/core";

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
        <Grid item xs>
            {editPrivilege &&
            <Slide direction="left" in={editPrivilege}>
            <Card variant='outlined'>
                <CardContent>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item>
                            <Typography gutterBottom variant="h6" component="h5">
                                Редактирование
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography gutterBottom variant="subtitle1">
                                ID {editPrivilege.id}
                            </Typography>
                        </Grid>
                    </Grid>

                    {/*<Input*/}
                    {/*    placeholder="Привелегия"*/}
                    {/*    value={editPrivilege.privileges}*/}
                    {/*    onChange={(e) => {*/}
                    {/*        setEditPrivilege({*/}
                    {/*            ...editPrivilege,*/}
                    {/*            privileges: e.target.value*/}
                    {/*        })*/}
                    {/*    }}*/}
                    {/*/>*/}

                    <TextField
                        margin="dense"
                        fullWidth={true}
                        id="outlined-required"
                        label="Привилегия"
                        value={editPrivilege.privileges}
                        variant="outlined"
                    />
                </CardContent>
                <CardActions>
                    <Grid container justify="flex-end" alignItems="center" spacing={1} style={{ paddingRight : 12 }}>
                        <Grid item>
                            <Button
                                variant="outlined" disableElevation
                                disableRipple
                                onClick={() => setEditPrivilege(null)}
                                style={{ marginLeft: 'auto', textTransform: 'capitalize'}}>
                                Отменить
                            </Button>
                        </Grid>
                        <Grid>
                            <Button
                                variant="contained"
                                onClick={savePrivilege}
                                style={{ textTransform: 'capitalize'}}
                            >
                                Сохранить
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
            </Slide>
            }
        </Grid>
        // <div>
        //     {editPrivilege &&
        //         <Card title="Редактрование"
        //                 size="small"
        //                 bodyStyle={{
        //                     padding: 0
        //                 }}
        //                 extra={'ID ' + editPrivilege.id}>
        //             <div className="px-3 py-3">
        //                 <Input
        //                     placeholder="Привелегия"
        //                     value={editPrivilege.privileges}
        //                     onChange={(e) => {
        //                         setEditPrivilege({
        //                             ...editPrivilege,
        //                             privileges: e.target.value
        //                         })
        //                     }}
        //                 />
        //             </div>
        //             <div className="ant-modal-footer">
        //                 <Button
        //                     onClick={() => setEditPrivilege(null)}>
        //                     Отменить
        //                 </Button>
        //                 <Button
        //                     onClick={savePrivilege}
        //                     type="primary">
        //                         Сохранить
        //                 </Button>
        //             </div>
        //         </Card>
        //     }
        // </div>
    )
}

export default EditCard