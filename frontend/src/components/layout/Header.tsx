import React from 'react'
import { ReactComponent as Logo } from '../../assets/images/layout/logo.svg'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import {AppBar, createStyles, Grid, IconButton, Link, Theme, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

interface IHeader {
    handleMenu: (action?: boolean) => void
}

const Header: React.FC<IHeader> = ({ handleMenu }) => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            menuButton: {
                marginRight: theme.spacing(2),
            },
            logo: {
                marginRight: theme.spacing(1),
            },
            title: {
                flexGrow: 1,
                fontFamily: "Roboto-Medium"
            },
        }),
    );

    const classes = useStyles();

    return (
        <AppBar position="static"
                color='inherit'
                style={{ backgroundColor: '#ffffff'}}
                className="shadow-sm"
        >
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit"
                            onClick={() => {
                                handleMenu(true)
                            }}>
                    <MenuRoundedIcon />
                </IconButton>
                <Logo className={classes.logo}/>

                    <Link href="/"
                          underline='none'
                          style={{ textDecoration: 'none'}}
                    >
                        <Typography variant="h6" className={classes.title}>
                        Кабинет ЕСЗК
                        </Typography>
                    </Link>
            </Toolbar>
            {/*<Grid*/}
            {/*    container direction="row"*/}
            {/*    alignItems="center"*/}
            {/*    className="shadow-sm"*/}
            {/*    style={{maxHeight: "64px", minHeight: "64px"}}*/}
            {/*    spacing={1}*/}
            {/*>*/}
            {/*    <Grid container item xs={12} alignItems="center" justify="flex-start">*/}
            {/*        <Grid item xs={1} className="bg-success" style={{ textAlign: "center"}}>*/}
            {/*            /!*<Button type="link"*!/*/}
            {/*            /!*        onClick={() => {*!/*/}
            {/*            /!*            handleMenu(true)*!/*/}
            {/*            /!*        }}>*!/*/}
            {/*            /!*    <MaterialIcon*!/*/}
            {/*            /!*        size="24px"*!/*/}
            {/*            /!*        icon="menu"/>*!/*/}
            {/*            /!*</Button>*!/*/}
            {/*            <IconButton*/}
            {/*                        onClick={() => {handleMenu(true)*/}
            {/*                        }}>*/}
            {/*                <MenuRoundedIcon/>*/}
            {/*            </IconButton>*/}
            {/*        </Grid>*/}
            {/*        <Grid item xs={4} className="bg-success">*/}
            {/*            <a href="/"*/}
            {/*               className="pl-2"*/}
            {/*               style={{*/}
            {/*                   fontSize: '1.3em',*/}
            {/*                   fontFamily: 'Roboto-Medium, sans-serif',*/}
            {/*                   textDecoration: 'none',*/}
            {/*                   color: "#000000"*/}
            {/*               }}>*/}
            {/*                Кабинет ЕСЗК*/}
            {/*            </a>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}

                {/*<Grid item>*/}
                {/*    <Logo/>*/}
                {/*</Grid>*/}
                {/*<Grid item>*/}
                {/*    <a href="/"*/}
                {/*       className="pl-2"*/}
                {/*       style={{*/}
                {/*           fontSize: '1.3em',*/}
                {/*           fontFamily: 'Roboto-Medium, sans-serif',*/}
                {/*           textDecoration: 'none',*/}
                {/*           color: "#000000"*/}
                {/*       }}>*/}
                {/*        Кабинет ЕСЗК*/}
                {/*    </a>*/}
                {/*</Grid>*/}
            {/*</Grid>*/}
        </AppBar>
        // <header>
        //     <div className="container-fluid
        //                     fixed-top
        //                     bg-white
        //                     shadow-sm">
        //         <div className="row align-items-center header">
        //             <div className="d-flex align-items-center col">
        //                 <div className="row align-items-center">
        //                     <div className="col-2">
        //                         <Button type="link"
        //                                 onClick={() => {handleMenu(true)}}>
        //                             <MaterialIcon
        //                                         size="24px"
        //                                         icon="menu"/>
        //                         </Button>
        //                     </div>
        //                     <div className="col-10">
        //                         <div className="row pl-3">
        //                             <div className="col">
        //                                     <Logo/>
        //                                     <span className="btn px-2"
        //                                         style={{
        //                                             fontSize: '1.3em',
        //                                             fontFamily: 'Roboto-Medium'
        //                                         }}>
        //                                         Кабинет ЕСЗК
        //                                     </span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </header>
    )
}

export default Header