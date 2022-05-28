import React, {useEffect, useState} from 'react';
import {Box, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ProfileData from "../../components/forms/ProfileData/ProfileData";
import Layout from "../../components/common/Layout/Layout";
import UserPhoto from "../../components/common/UserPhoto/UserPhoto";
import UploadUserPhoto from "../../components/modals/UploadUserPhoto/UploadUserPhoto";
import {getUserProfileData} from "../../store/thunks/common/profile";
import {openModal} from "../../helpers/utils";

import {useStyles} from "../style";

const Profile = () => {

    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const profileData = useSelector(({ state }) => state.profileData)

    useEffect(() => dispatch(getUserProfileData(history)), [])

    return (
        <Box className={classes.contentDark}>
            <Layout>
                <Typography
                    className={classes.marginValue}
                    variant='h4'
                >
                    Личные данные
                </Typography>
                {profileData && (
                    <Box className={classes.profileForm}>
                        <Box className={classes.photoWrapper}>
                            <UserPhoto avatarUri={profileData.avatarUri}  />
                            <Typography
                                className={classes.uploadPhotoLink}
                                onClick={() => openModal(setOpen)}
                            >
                                Загрузить новый аватар
                            </Typography>
                            <Typography className={classes.uploadInfoText}>Изображение не должно превышать 5 мб</Typography>
                        </Box>
                        <ProfileData profileData={profileData} />
                    </Box>
                )}
                {open && (
                    <UploadUserPhoto
                        open={open}
                        setOpen={setOpen}
                    />
                )}
            </Layout>
        </Box>
    );
};

export default Profile;