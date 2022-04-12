import React from 'react';
import {Box, Grid, Typography} from "@material-ui/core";
import UploadPhoto from "../../components/common/UploadPhoto/UploadPhoto";
import ProfileData from "../../components/forms/ProfileData/ProfileData";
import Layout from "../../components/common/Layout/Layout";
import {darkBlue} from "../../helpers/styles";
import {useStyles} from "../style";

const Profile = () => {

    const classes = useStyles()

    return (
        <Grid style={{background: darkBlue}} className={classes.content}>
            <Layout>
                <Typography
                    style={{marginTop: 35}}
                    variant={'h4'}
                >
                    Личные данные
                </Typography>
                <Box className={classes.flexWrap}>
                    <UploadPhoto />
                    <ProfileData />
                </Box>
            </Layout>
        </Grid>
    );
};

export default Profile;