import React from 'react'
import { Table } from 'antd'
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined'
import header from './headerAdit.json'
import {Card, CardContent, Grid} from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Typography from "@material-ui/core/Typography";
import headerPrivileges from "../../pages/privileges/headerPrivileges.json";
import {cardStyles} from "../../layout/useStyles";

interface IAudit {
    data: Array<Object>
}

const Audit: React.FC<IAudit> = ({ data }) => {
    const classesCard = cardStyles();

    return (
        <Grid container direction="column" spacing={1}>
            <Grid item>
                <Grid container direction="row" alignItems="center" alignContent="center" spacing={1}>
                    <Grid item>
                        <LibraryBooksOutlinedIcon fontSize="small"
                                                  htmlColor="#7F8391"/>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>Аудит</Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Card variant='outlined'>
                            <CardContent className={classesCard.cardPadding}>
                                 <Table columns={header}
                                    dataSource={data}
                                    rowKey="id"
                                    size="small"
                                    pagination={
                                        {
                                            showSizeChanger: true
                                        }
                                    }/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        // <div>
        //     <div className="table-name pb-1 d-flex
        //                     align-items-center">
        //             <LibraryBooksOutlinedIcon style={{color: '#7F8391'}}/>
        //             <span className="pl-1">Аудит</span>
        //     </div>
        //     <Card bodyStyle={{padding: 0}}>
        //         <Table columns={header}
        //             dataSource={data}
        //             rowKey="id"
        //             size="small"
        //             pagination={
        //                 {
        //                     showSizeChanger: true
        //                 }
        //             }/>
        //     </Card>
        // </div>
    )
}

export default Audit