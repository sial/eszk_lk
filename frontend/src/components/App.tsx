import React, {useState} from 'react'
import router from '../router'
import { renderRoutes } from 'react-router-config'
import { Layout } from 'antd'
import Menu from './layout/menu'
import '../assets/styles/App.scss'
import { Header, Content } from './layout'

const App: React.FC = () => {
    const { Sider } = Layout
    let [showMenu, setShowMenu] = useState(false)
    const handleMenu =
        (action: boolean = !showMenu): void => setShowMenu(action)

    return (
        <div style={{minHeight: '100vh'}}>
            <Sider theme="light"
                style={{
                    zIndex: 1100
                }}
                className="position-fixed"
                collapsed={!showMenu}
                collapsedWidth={0}>
                <Menu showMenu={showMenu}
                    handleMenu={handleMenu}/>
            </Sider>
            <div>
                <Header handleMenu={handleMenu}/>
                <Content>
                    {renderRoutes(router)}
                </Content>
            </div>
        </div>

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
