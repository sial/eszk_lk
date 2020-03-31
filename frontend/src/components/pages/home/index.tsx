import React from 'react'
import {Layout} from 'antd'
import {HomeOutlined} from '@ant-design/icons'

const Home: React.FC = () => {
    return (
        <Layout>
            <p className="title-page">
                <HomeOutlined/>
                <span>Главная страница</span>
            </p>
        </Layout>
    )
}

export default Home