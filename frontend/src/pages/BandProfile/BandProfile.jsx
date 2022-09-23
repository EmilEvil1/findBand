import React from 'react'
import {Box, Typography} from "@material-ui/core"
import Layout from "../../components/common/Layout/Layout"
import {useStyles} from "../style"

const BandProfile = () => {

    const classes = useStyles()

    return (
        <Box className={classes.contentDark}>
            <Layout>
                <Typography color='primary' variant='h4'>BandProfile</Typography>
            </Layout>
        </Box>
    )
}

export default BandProfile