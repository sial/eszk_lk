import React, {ReactElement} from 'react'
import { Layout } from 'antd'

interface IContent {
    children: ReactElement
}

const Content: React.FC<IContent> = ({ children }) => {
    const { Content } = Layout
    return (
        <Content style={{ padding: '25px 48px', marginTop: '6vh' }}>
            {children}
        </Content>
    )
}

export default Content