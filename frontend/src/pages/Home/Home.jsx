import React, {useEffect} from 'react'
import {Box} from "@material-ui/core"
import Musicians from "../../components/sliders/Musicians/Musicians"
import Main from "../../components/content/Main/Main"
import Layout from "../../components/common/Layout/Layout"
import {useStyles} from "../style"
import {handleRemoveQuery} from "../../helpers/query"

const Home = () => {

    const classes = useStyles()

    useEffect(() => handleRemoveQuery(`SearchForMembers`), [])

    return (
        <Box className={classes.content}>
            <Musicians />
            <Layout>
                <Box className={classes.container}>
                    <Main />
                </Box>
            </Layout>
        </Box>
    )
}

export default Home
