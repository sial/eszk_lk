import React, {useEffect, useState} from 'react'
import {Table, Button} from 'antd'
import headerPrivileges from './headerPrivileges.json'
import Audit from '../../utils/audit'
import EditCard from './EditCard'
import '../../../assets/styles/privileges.scss'
import {Box, Container, createStyles, Grid, Paper, Card, Theme, CardContent} from "@material-ui/core";
import Title from "antd/lib/typography/Title";
// import Typography from "@material-ui/core/Typography";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import { cardStyles } from "../../layout/useStyles";

const Privileges: React.FC = () => {
    let [editPrivilege, setEditPrivilege] =
        useState<any>(null)

    const actionColumn = {
        title: 'Действие',
        dataIndex: 'id',
        render: (id: number, row: number, index: number) =>
            <Button className="p-0" 
                    style={{
                         height: 16, 
                         fontFamily: 'Roboto', 
                         fontSize: '0.96em'
                    }} 
                    type="link" 
                    onClick={() => {
                        setEditPrivilege(dataPrivileges[index])
            }}>
                Редактировать
            </Button>
    }

    const dataPrivileges = [
        {
            id: 1,
            privileges: 'Карточка сотрудника - Таблица - Чтение',
            alias: 'cards_table_read'
        },
        {
            id: 2,
            privileges: 'Карточка сотрудника - Таблица - Запись',
            alias: 'cards_table_read'
        },
        {
            id: 3,
            privileges: 'Карточка сотрудника - Таблица - Удаление',
            alias: 'cards_table_read'
        }
    ]

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

    useEffect(() => {
        headerPrivileges.push(actionColumn)
        return () => {
            headerPrivileges.splice(-1,1)
        }
    }, [actionColumn])


    const classes = cardStyles();

    return (
        <Grid container direction="column" spacing={1}>
            <Grid item>
                <Grid container direction="row" alignItems="center" alignContent="center" spacing={1}>
                    <Grid item>
                        <LockOpenIcon
                            fontSize="small"
                            htmlColor="#7F8391"
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant='h5'>Привилегии</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item direction='row' xs>
                <Grid container spacing={2}>
                    <Grid item md={9}>
                        {/*<Card bodyStyle={{padding: 0}}>*/}
                        {/*    <Table columns={headerPrivileges}*/}
                        {/*           dataSource={dataPrivileges}*/}
                        {/*           rowKey="id"*/}
                        {/*           size="small"*/}
                        {/*           pagination={{*/}
                        {/*               showSizeChanger: true*/}
                        {/*           }}*/}
                        {/*    />*/}
                        {/*</Card>*/}

                        {/*<Paper>*/}
                        {/*    test*/}
                        {/*</Paper>*/}

                        <Card variant='outlined'>
                            <CardContent className={classes.cardPadding}>
                                <Table columns={headerPrivileges}
                                       dataSource={dataPrivileges}
                                       rowKey="id"
                                       size="small"
                                       pagination={{
                                           showSizeChanger: true
                                       }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={3}>
                         <EditCard editPrivilege={editPrivilege}
                                 setEditPrivilege={setEditPrivilege}
                                 savePrivilege={() => setEditPrivilege(null)}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs>
                <Grid container spacing={2}>
                    <Grid item md={9}>
                        <Audit data={dataAudit}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        // <Grid container direction="column">
        //         <Grid item>
        //             <Grid container direction="row" alignItems="center" alignContent="center">
        //                 <Grid item>
        //                     <LockOpenIcon
        //                         fontSize="small"
        //                         htmlColor="#7F8391"
        //                     />
        //                 </Grid>
        //                 <Grid item>
        //                     <Box pl={0.5}>
        //                         <Typography variant='h5'>Привилегии</Typography>
        //                     </Box>
        //                 </Grid>
        //             </Grid>
        //         </Grid>
        //         <Grid md item className="bg-success">
        //             Таблица Привелегий
        //         </Grid>
        //         <Grid md item className="bg-info">
        //             Аудит
        //         </Grid>
            // </Grid>

        // <div className="container-md d-flex">
        //     <div className="row flex-fill">
        //         <div className="col-sm-6 h-100">
        //             {/*<div className="row" style={{ backgroundColor: "red"}}>*/}
        //             {/*    t*/}
        //             {/*</div>*/}
        //             {/*<div className="row" style={{ backgroundColor: "yellow"}}>*/}
        //             {/*    s*/}
        //             {/*</div>*/}
        //
        //             <div className="row h-50 bg-warning">
        //                 <div className="col-sm-12" id="mmenu_screen--book">
        //                     Booking
        //                 </div>
        //             </div>
        //             <div className="row h-50 bg-success">
        //                 <div className="col-sm-12" id="mmenu_screen--information">
        //                     Info
        //                 </div>
        //             </div>
        //         </div>
        //
        //         {/*<div className="row">*/}
        //         {/*    <MaterialIcon size={24} color="#7F8391" icon="lock_open"/>*/}
        //         {/*    <span className="pl-1">Привилегии</span>*/}
        //         {/*</div>*/}
        //
        //     </div>
        //
        //     {/*<div className="row">*/}
        //     {/*    <div className="col-8">*/}
        //     {/*        <div className="row">*/}
        //     {/*            <div className="col">*/}
        //     {/*                <Card bodyStyle={{padding: 0}}>*/}
        //     {/*                        <Table columns={headerPrivileges}*/}
        //     {/*                            dataSource={dataPrivileges}*/}
        //     {/*                            rowKey="id"*/}
        //     {/*                            size="small"*/}
        //     {/*                            pagination={*/}
        //     {/*                                {*/}
        //     {/*                                    showSizeChanger: true*/}
        //     {/*                                }*/}
        //     {/*                            }/>*/}
        //     {/*                </Card>*/}
        //     {/*            </div>*/}
        //     {/*        </div>*/}
        //     {/*        <div className="mt-4">*/}
        //     {/*            <div className="row">*/}
        //     {/*                <div className="col">*/}
        //     {/*                    <Audit data={dataAudit}/>*/}
        //     {/*                </div>*/}
        //     {/*            </div>*/}
        //     {/*        </div>*/}
        //     {/*    </div>*/}
        //     {/*    <div className="col-3">*/}
        //     {/*        <EditCard editPrivilege={editPrivilege}*/}
        //     {/*                setEditPrivilege={setEditPrivilege}*/}
        //     {/*                savePrivilege={() => setEditPrivilege(null)}/>*/}
        //     {/*    </div>*/}
        //     {/*</div>*/}
        // </div>
    )
}

export default Privileges