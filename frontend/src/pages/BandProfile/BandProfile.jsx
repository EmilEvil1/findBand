import React, {useEffect} from 'react'
import {Box, Typography} from "@material-ui/core"
import Layout from "../../components/common/Layout/Layout"
import {useStyles} from "../style"
import {getUrlQueryParams} from "../../helpers/utils";
import {useHistory} from "react-router-dom";

const BandProfile = () => {

    const classes = useStyles()
    const bandId = getUrlQueryParams(`bandId`)
    const history = useHistory()

    useEffect(() => {
        !bandId && history.push(`/404`)
    }, [bandId])

    return (
        <Box className={classes.contentDark}>
            <Layout>
                <Typography className={classes.marginValue} color='primary' variant='h4'>Профиль группы</Typography>
            </Layout>
        </Box>
    )
}

export default BandProfile