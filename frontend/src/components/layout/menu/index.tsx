import React, {useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'
import { Menu } from 'antd'
import MenuList from './menu.json'
import {Link, useLocation} from 'react-router-dom'

interface IMenu {
    showMenu: Boolean
    handleMenu: (action?: boolean) => void
}

const MainMenu: React.FC<IMenu> = ({ showMenu, handleMenu }) => {
    const menu = useRef(null)
    const location = useLocation()
    const handleCloseMenu = ({ target }: any) => {
        const menuEl = ReactDOM.findDOMNode(menu.current)
        if (menuEl !== null && showMenu &&
            !menuEl.contains(target)) {
            handleMenu(false)
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleCloseMenu)
       return () => {
           document.removeEventListener('click', handleCloseMenu)
       }
    })
    const getCurrentRouteIndex = () => {
        return String(MenuList.findIndex((item) => {
            return item.path === location.pathname
        }))
    }

    return (
        <Menu
            ref={menu}
            style={{height: '100vh'}}
            theme="light"
            mode="inline"
            selectedKeys={[getCurrentRouteIndex()]}
        >
            {MenuList.map((item, key) => (
                <Menu.Item key={key}
                           onClick={() => handleMenu(false)}>
                    <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
            ))}
        </Menu>
    )
}

export default MainMenu