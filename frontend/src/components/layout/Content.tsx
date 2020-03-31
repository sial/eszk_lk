import React, {ReactElement} from 'react'
import { Layout } from 'antd'

interface IContent {
    children: ReactElement
}

const Content: React.FC<IContent> = ({ children }) => {
    const { Content } = Layout
    return (
        // <div style={{ padding: '25px 48px', marginTop: '6vh' }}>
        //     {children}
        // </div>
        <div className="container-fluid p-0">
            {children}
        </div>
    )
}

export default Content