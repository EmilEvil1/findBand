import React, {useState} from 'react'
import {Box, Typography} from "@material-ui/core";
import {useProfileData} from "../../dto/hooks/Profile"
import ProfileData from "../../components/forms/ProfileData/ProfileData"
import Layout from "../../components/common/Layout/Layout"
import UserPhoto from "../../components/common/UserPhoto/UserPhoto"
import UploadUserPhoto from "../../components/modals/UploadUserPhoto/UploadUserPhoto"
import {openModal} from "../../helpers/utils"
import {useStyles} from "../style"

const Profile = () => {

    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const profileData = useProfileData()

    return (
        <Box className={classes.contentDark}>
            <Layout>
                <Typography className={classes.marginValue} variant='h4'>Личные данные</Typography>
                {profileData.data && (
                    <Box className={classes.profileForm}>
                        <Box className={classes.photoWrapper}>
                            <UserPhoto avatarUri={profileData.data && profileData.data.avatarUri}  />
                            <Typography className={classes.uploadPhotoLink} onClick={() => openModal(setOpen)}>
                                Загрузить новый аватар
                            </Typography>
                            <Typography className={classes.uploadInfoText}>Изображение не должно превышать 5 мб</Typography>
                        </Box>
                        <ProfileData profileData={profileData.data} refetch={profileData.refetch} />
                    </Box>
                )}
                {open && <UploadUserPhoto open={open} setOpen={setOpen} />}
            </Layout>
        </Box>
    )
}

export default Profile