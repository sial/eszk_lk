import React from 'react'
import MaterialIcon from 'material-icons-react'
import { ReactComponent as Logo } from '../../assets/images/layout/logo.svg'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

interface IHeader {
    handleMenu: (action?: boolean) => void
}

const Header: React.FC<IHeader> = ({ handleMenu }) => {
    return (
        <header>
            <div className="container-fluid 
                            fixed-top
                            bg-white 
                            shadow-sm">
                <div className="row align-items-center header">
                    <div className="d-flex align-items-center col">
                        <div className="row align-items-center">
                            <div className="col-2">
                                <Button type="link" 
                                        onClick={() => {handleMenu(true)}}>
                                    <MaterialIcon
                                                size="24px" 
                                                icon="menu"/>
                                </Button>
                            </div>
                            <div className="col-10">
                                <div className="row pl-3">
                                    <div className="col">
                                            <Logo/>
                                            <span className="btn px-2" 
                                                style={{
                                                    fontSize: '1.3em',
                                                    fontFamily: 'Roboto-Medium'
                                                }}>
                                                Кабинет ЕСЗК
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header