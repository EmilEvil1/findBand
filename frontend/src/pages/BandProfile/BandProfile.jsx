import React from 'react'
import {Box, Typography} from "@material-ui/core"
import Layout from "../../components/common/Layout/Layout"
import {useStyles} from "../style"

const BandProfile = () => {

    const classes = useStyles()

    return (
        <Box className={classes.contentDark}>
            <Layout>
                <Typography style={{marginTop: 35}} color='primary' variant='h4'>Профиль группы</Typography>
            </Layout>
        </Box>
    )
}

export default BandProfile