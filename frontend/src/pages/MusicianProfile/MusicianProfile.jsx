import React, {useEffect} from 'react';
import {Box, Typography} from "@material-ui/core";
import UploadPhoto from "../../components/common/UploadPhoto/UploadPhoto";
import ProfileData from "../../components/forms/ProfileData/ProfileData";
import Layout from "../../components/common/Layout/Layout";
import {useStyles} from "../style";
import {useDispatch, useSelector} from "react-redux";
import {getUserProfileData} from "../../store/thunks/common/profile";
import {useHistory} from "react-router-dom";
import UploadUserPhoto from "../../components/common/UploadUserPhoto/UploadUserPhoto";

const Profile = () => {

    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const profileData = useSelector(({ state }) => state.profileData)

    useEffect(() => {
        dispatch(getUserProfileData(history))
    }, [])

    return (
        <Box className={classes.contentDark}>
            <Layout>
                <Typography
                    style={{marginTop: 35}}
                    variant='h4'
                >
                    Личные данные
                </Typography>
                {profileData && (
                    <Box className={classes.flexWrap}>
                        {/*<UploadPhoto avatarUri={profileData.avatarUri} />*/}
                        {/*<UploadUserPhoto />*/}
                        <ProfileData profileData={profileData} />
                    </Box>
                )}
            </Layout>
        </Box>
    );
};

export default Profile;