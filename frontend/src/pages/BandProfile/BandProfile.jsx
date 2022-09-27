import React from 'react'
import {Box, Typography} from "@material-ui/core"
import Layout from "../../components/common/Layout/Layout"
import {useStyles} from "../style"

const BandProfile = () => {

    const classes = useStyles()

    return (
        <Box className={classes.contentDark}>
            <Layout>
                <Typography className={classes.marginValue} color='primary' variant='h4'>Профиль группы</Typography>
            </Layout>
        </Box>
    )
}

export default BandProfile