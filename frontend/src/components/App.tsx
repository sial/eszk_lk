import React, {useState} from 'react'
import router from '../router'
import { renderRoutes } from 'react-router-config'
import Menu from './layout/menu'
import '../assets/styles/App.scss'
import { Header, Content } from './layout'
import {
    Container,
    Grid,
    SwipeableDrawer,
    ThemeProvider
} from '@material-ui/core';
import {useStyles} from "./layout/useStyles";
import theme from '../Theme'

const App: React.FC = () => {
    let [showMenu, setShowMenu] = useState(false)
    const handleMenu =
        (action: boolean = !showMenu): void => setShowMenu(action)
    const classes = useStyles();
    const themeCustom = theme;

    return (
        <Container maxWidth={false}
                   disableGutters={true}>
            <ThemeProvider theme={themeCustom}>
            <div className={classes.root}>
                <Grid container
                      direction="column"
                      wrap='nowrap'
                      className={classes.maxHeight}>
                    <Grid item>
                        <Header handleMenu={handleMenu}/>
                    </Grid>
                    <SwipeableDrawer
                        open={showMenu}
                        onClose={() => setShowMenu(false)}
                        onOpen={() => setShowMenu(true)}
                    >
                        <Menu showMenu={showMenu}
                              handleMenu={handleMenu}
                        />
                    </SwipeableDrawer>
                    <Grid item xs style={{ padding: '20px'}}>
                        <Content>
                            {renderRoutes(router)}
                        </Content>
                    </Grid>
                </Grid>
            </div>
            </ThemeProvider>
        </Container>
    )
}

export default App
