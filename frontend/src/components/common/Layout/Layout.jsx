import React, {useEffect} from 'react'
import {useCookies} from "react-cookie"
import {useHistory} from "react-router-dom"
import {Box, Container, Grid} from "@material-ui/core"
import Sidebar from "../Sidebar/Sidebar"
import {checkTokenValidate} from "../../../helpers/utils"
import {useErrorContext} from "../../../context/errorContext"
import {useStyles} from "./style"

const Layout = ({ children }) => {

    const classes = useStyles()
    const history = useHistory()
    const [token, , removeToken] = useCookies(['access_token'])
    const [error, ] = useErrorContext()

    useEffect(() => {
        if (checkTokenValidate(token.access_token)) history.push('/auth')
        if (!!error) {
            switch (error.status) {
                case 404:
                    history.push('/404')
                    break
                case 500:
                    history.push('/500')
                    break
                case 401:
                    removeToken("access_token")
                    history.push('/auth')
                    break
                case 400:
                    history.push('/404')
                    break
                default:
                    break
            }
        }
    }, [history, token.access_token, error])

    return (
        <Grid className={classes.container}>
            <Sidebar />
            <Container>
                <Box className={classes.content}>
                    {children}
                </Box>
            </Container>
        </Grid>
    )
}

export default Layout;