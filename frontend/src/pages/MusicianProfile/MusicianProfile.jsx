import React, {useEffect} from 'react';
import {Box, Grid, Typography} from "@material-ui/core";
import {useStyles} from "../style";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import {darkBlue} from "../../helpers/styles";
import UploadPhoto from "../../components/common/UploadPhoto/UploadPhoto";
import ProfileData from "../../components/forms/ProfileData/ProfileData";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import {checkTokenValidate} from "../../helpers/utils";

const Profile = (props) => {

    const {} = props
    const classes = useStyles()

    const [token, setToken] = useCookies(['access_token'])
    const history = useHistory()

    useEffect(() => {
        if (!!checkTokenValidate(token.access_token)) history.push('/Auth')
    }, [token.access_token])

    return (
        <Grid style={{background: darkBlue}} className={classes.content}>
            <Sidebar />
            <Box className={classes.container}>
                <Typography style={{marginTop: 35}} variant={'h4'}>Личные данные</Typography>
                <Box className={classes.flexWrap} style={{marginTop: 35}}>
                    <UploadPhoto />
                    <ProfileData />
                </Box>
            </Box>
        </Grid>
    );
};

export default Profile;