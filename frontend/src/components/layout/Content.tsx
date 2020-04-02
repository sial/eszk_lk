import React, {ReactElement} from 'react'
import { Layout } from 'antd'
import {Box, Container, createStyles, Grid, Theme} from "@material-ui/core";

interface IContent {
    children: ReactElement
}

const Content: React.FC<IContent> = ({ children }) => {
    const { Content } = Layout

    return (
            <Grid container xs spacing={1}>
                {children}
            </Grid>
    )
}

export default Content