import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import {Box} from "@material-ui/core";
import {useStyles} from "./style";
import Sidebar from "../../components/common/Sidebar";
import Musicians from "../../components/sliders/Musicians";
import Main from "../../components/content/Main";
import {checkTokenValidate} from "../../helpers/utils";

const Home = () => {

    const dispatch = useDispatch()
    const classes = useStyles()
    const [token, setToken] = useCookies(['access_token'])
    const history = useHistory()

    useEffect(() => {
        if (!!checkTokenValidate(token.access_token)) history.push('/auth')
    }, [token.access_token])

    return (
        <Box className={classes.content}>
            <Sidebar />
            <Musicians />
            <Box className={classes.container}>
                <Main />
            </Box>
        </Box>
    )
}

export default Home;
