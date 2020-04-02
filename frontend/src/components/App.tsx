import React, {useState} from 'react'
import router from '../router'
import { renderRoutes } from 'react-router-config'
import {Card, Layout, Table} from 'antd'
import Menu from './layout/menu'
import '../assets/styles/App.scss'
import { Header, Content } from './layout'
import {Box, Container, createStyles, Grid, Paper, Theme, Typography, ThemeProvider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useStyles} from "./layout/useStyles";
import theme from '../Theme'
import LockOpenIcon from "@material-ui/icons/LockOpen";
import headerPrivileges from "./pages/privileges/headerPrivileges.json";

const App: React.FC = () => {
    const { Sider } = Layout
    let [showMenu, setShowMenu] = useState(false)
    const handleMenu =
        (action: boolean = !showMenu): void => setShowMenu(action)
    const classes = useStyles();
    const themeCustom = theme;

    return (
        <Container maxWidth={false} className="p-0">
            <ThemeProvider theme={themeCustom}>
            <div className={classes.root}>
                <Grid container direction="column" wrap='nowrap' className={classes.maxHeight}>
                    <Grid item>
                        <Header handleMenu={handleMenu}/>
                    </Grid>
                    <Sider
                        theme="light"
                        style={{
                            zIndex: 1100
                        }}
                        className="position-fixed"
                        collapsed={!showMenu}
                        collapsedWidth={0}
                    >
                        <Menu showMenu={showMenu}
                              handleMenu={handleMenu}
                        />
                    </Sider>


                    <Grid container xs style={{ padding: '20px'}}>
                            {/*<Grid container item direction='column' xs={12} spacing={1}>*/}
                            {/*    <Grid item xs>*/}
                            {/*        <Paper className="bg-primary">item</Paper>*/}
                            {/*    </Grid>*/}
                            {/*    <Grid item xs>*/}
                            {/*        <Paper className="bg-primary">item</Paper>*/}
                            {/*    </Grid>*/}
                            {/*    <Grid item xs>*/}
                            {/*        <Paper className="bg-primary">item</Paper>*/}
                            {/*    </Grid>*/}
                            {/*</Grid>*/}


                        <Content>
                            {renderRoutes(router)}
                        </Content>
                    </Grid>
                    {/*<Grid container lg spacing={3}>*/}

                    {/*</Grid>*/}
                        {/*<Content>*/}
                        {/*    {renderRoutes(router)}*/}
                        {/*</Content>*/}
                        {/*<Grid container item  xs direction="column" spacing={2}>*/}
                        {/*    <Grid item className="bg-success">*/}
                        {/*        <Grid container direction="row" alignItems="center" alignContent="center">*/}
                        {/*            <Grid item>*/}
                        {/*                <LockOpenIcon*/}
                        {/*                    fontSize="small"*/}
                        {/*                    htmlColor="#7F8391"*/}
                        {/*                />*/}
                        {/*            </Grid>*/}
                        {/*            <Grid item>*/}
                        {/*                <Box pl={0.5}>*/}
                        {/*                    <Typography variant='h5'>Привилегии</Typography>*/}
                        {/*                </Box>*/}
                        {/*            </Grid>*/}
                        {/*        </Grid>*/}
                        {/*    </Grid>*/}
                        {/*    <Grid item xs className="bg-warning">*/}
                        {/*        <Grid container>*/}
                        {/*            <Grid item>*/}
                        {/*                <Card bodyStyle={{padding: 0}}>*/}
                        {/*                    test*/}
                        {/*                </Card>*/}
                        {/*            </Grid>*/}
                        {/*        </Grid>*/}

                        {/*    </Grid>*/}
                        {/*    <Grid item xs className="bg-danger">*/}
                        {/*        test3*/}
                        {/*    </Grid>*/}
                        {/*</Grid>*/}



                    {/*<Grid item xs={12}>*/}
                    {/*    <Paper className={classes.paper}>xs=12</Paper>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={6}>*/}
                    {/*    <Paper className={classes.paper}>xs=6</Paper>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={6}>*/}
                    {/*    <Paper className={classes.paper}>xs=6</Paper>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={3}>*/}
                    {/*    <Paper className={classes.paper}>xs=3</Paper>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={3}>*/}
                    {/*    <Paper className={classes.paper}>xs=3</Paper>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={3}>*/}
                    {/*    <Paper className={classes.paper}>xs=3</Paper>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={3}>*/}
                    {/*    <Paper className={classes.paper}>xs=3</Paper>*/}
                    {/*</Grid>*/}
                </Grid>
            </div>
            </ThemeProvider>
        </Container>
        // <div className="container-fluid">
        //     <div className="row d-flex" style={{ height: '100vh'}}>
        //         <div className="col">
        //             <div className="row h-100">
        //                 <div className="col">
        //                     <div className="bg-success h-50">
        //                         test
        //                     </div>
        //                     <div className="bg-danger h-50">
        //                         test
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
// <div className="d-md-flex flex-column h-100">
//     <div className="container-fluid d-flex h-100">
//         <div className="row flex-grow">
//             <div className="col">
//                 <div className="row h-100">
//                     <div className="col-md-12 d-flex flex-column flex-grow bg-success">
//                         <div>
//                             TEST
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//         <React.Fragment>
//
//             {/*<Container maxWidth={false} className="p-0" style={{ height: "100vh"}}>*/}
//             {/*    <Grid container direction="column">*/}
//             {/*        <Sider theme="light"*/}
//             {/*               style={{*/}
//             {/*                   zIndex: 1100*/}
//             {/*               }}*/}
//             {/*               className="position-fixed"*/}
//             {/*               collapsed={!showMenu}*/}
//             {/*               collapsedWidth={0}>*/}
//             {/*            <Menu showMenu={showMenu}*/}
//             {/*                  handleMenu={handleMenu}/>*/}
//             {/*        </Sider>*/}
//
//             {/*        <Grid item*/}
//             {/*              style={{*/}
//             {/*                  zIndex: 2*/}
//             {/*              }}>*/}
//             {/*            <Header handleMenu={handleMenu}/>*/}
//             {/*        </Grid>*/}
//             {/*        <Grid item lg*/}
//             {/*              style={{*/}
//             {/*                  zIndex: 0*/}
//             {/*              }}>*/}
//             {/*            <Content>*/}
//             {/*                {renderRoutes(router)}*/}
//             {/*            </Content>*/}
//             {/*        </Grid>*/}
//             {/*    </Grid>*/}
//             {/*</Container>*/}
//         </React.Fragment>
//         <Grid
//             container
//             direction="column"
//             style={{ border: "solid 5px", height: "100%" }}
//         >
//             <Grid
//                 container
//                 direction="row"
//                 xs
//                 className="bg-danger"
//                 alignItems="center"
//             >
//                 <Grid
//                     xs={1}
//                     item
//                     style={{ border: "solid 1px" }}
//                     className="bg-primary"
//                 >
//                     <Paper style={{
//                         height: 140,
//                         width: 100,
//                     }}></Paper>
//                 </Grid>
//
//                 <Grid
//                     xs={1}
//                     item
//                     style={{ border: "solid 1px" }}
//                     className="bg-primary"
//                 >
//                     <Paper style={{
//                         height: 140,
//                         width: 100,
//                     }}></Paper>
//                 </Grid>
//
//                 <Grid
//                     xs
//                     item
//                     style={{ border: "solid 1px" }}
//                     className="bg-primary"
//                 >
//                     Header
//                 </Grid>
//
//             </Grid>
//
//
//             <Grid
//                 xs
//                 item
//                 style={{ border: "solid 1px" }}
//                 className="bg-secondary"
//             >
//                 Content
//             </Grid>
//         </Grid>


        // <Container maxWidth={false} disableGutters={true} style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
        //     <Grid container style={{flexGrow: 1}} spacing={2} className="bg-primary">
        //         <Grid item xs={12}>
        //             <Grid container justify="center" spacing={2}>
        //                 <Grid item>
        //                     <Paper style={{
        //                         height: 140,
        //                         width: 100,
        //                     }}></Paper>
        //                 </Grid>
        //                 <Grid item>
        //                     <Paper style={{
        //                         height: 140,
        //                         width: 100,
        //                     }}></Paper>
        //                 </Grid>
        //                 <Grid item>
        //                     <Paper style={{
        //                         height: 140,
        //                         width: 100,
        //                     }}></Paper>
        //                 </Grid>
        //             </Grid>
        //         </Grid>
        //
        //     </Grid>
        //     {/*<Grid container spacing={3} className="bg-success">*/}
        //
        //     {/*    <Grid*/}
        //     {/*        container*/}
        //     {/*        direction="row"*/}
        //     {/*        justify="flex-start"*/}
        //     {/*        alignItems="flex-start"*/}
        //     {/*    >*/}
        //     {/*        <Grid item>*/}
        //     {/*            <Paper className="bg-secondary">xs=12 sm=6</Paper>*/}
        //     {/*        </Grid>*/}
        //
        //     {/*    </Grid>*/}
        //
        //
        //     {/*</Grid>*/}
        //     {/*<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />*/}
        // </Container>

///////////////////////////////////////////////////////
        // <div style={{ height: '100vh'}}>
        //
        //         <Sider theme="light"
        //                style={{
        //                    zIndex: 1100
        //                }}
        //                className="position-fixed"
        //                collapsed={!showMenu}
        //                collapsedWidth={0}>
        //             <Menu showMenu={showMenu}
        //                   handleMenu={handleMenu}/>
        //         </Sider>
        //         <div className="container-fluid p-0">
        //             <div className="row" style={{ minHeight: '64px', maxHeight: '64px'}}>
        //                 <Header handleMenu={handleMenu}/>
        //             </div>
        //             <div className="row">
        //                 <Content>
        //                     {renderRoutes(router)}
        //                 </Content>
        //             </div>
        //         </div>
        // </div>


        //     {/* <Sider theme="light"
        //            collapsed={!showMenu}
        //            collapsedWidth={0}>
        //         <Menu showMenu={showMenu}
        //               handleMenu={handleMenu}/>
        //     </Sider> */}
                
        //         {/* <Content>
        //             {renderRoutes(router)}
        //         </Content> */}
        // // </Layout>
    )
}

export default App
