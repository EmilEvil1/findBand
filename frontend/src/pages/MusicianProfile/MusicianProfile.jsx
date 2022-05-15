import React from 'react';
import {Box, Typography} from "@material-ui/core";
import UploadPhoto from "../../components/common/UploadPhoto/UploadPhoto";
import ProfileData from "../../components/forms/ProfileData/ProfileData";
import Layout from "../../components/common/Layout/Layout";
import {useStyles} from "../style";
import Loader from "../../components/common/Loader/Loader";

const Profile = () => {

    const classes = useStyles()

    return (
        <Box >
            <Layout>
                <Typography
                    style={{marginTop: 35}}
                    variant='h4'
                >
                    Личные данные
                </Typography>
                <Box className={classes.flexWrap}>
                    <UploadPhoto />
                    <ProfileData />
                </Box>
                <Loader />
            </Layout>
        </Box>
    );
};

export default Profile;