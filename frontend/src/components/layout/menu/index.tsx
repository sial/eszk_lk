import React, {useCallback} from 'react'
import MenuList from './menu.json'
import {Link, useLocation} from 'react-router-dom'
import {List, ListItem, ListItemText, ListItemIcon, Icon} from '@material-ui/core'

interface IMenu {
    showMenu: Boolean
    handleMenu: (action?: boolean) => void
}

const MainMenu: React.FC<IMenu> = ({ showMenu, handleMenu }) => {
    const location = useLocation()

    const isCurrentRoute = useCallback((path) => {
        return path === location.pathname
    }, [location.pathname])

    return (
        <div
            role="presentation"
            style={{
                width: 250
            }}
            onClick={() => handleMenu(false)}
            onKeyDown={() => handleMenu(false)}
        >
            <List>
                {MenuList.map((item, key) => (
                    <Link key={key} to={item.path}>
                        <ListItem selected={isCurrentRoute(item.path)}
                                  button>
                                <ListItemIcon>
                                    <Icon>{item.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText style={{color: 'black'}}
                                              primary={item.title}/>
                        </ListItem>
                    </Link>
                    ))}
            </List>
        </div>
    )
}

export default MainMenu