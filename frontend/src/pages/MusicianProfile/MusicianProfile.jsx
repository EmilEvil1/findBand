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
                            <UserPhoto
                                avatarUri={profileData.data && profileData.data.avatarUri}
                                width={150}
                                height={150}
                                shortName={profileData.data.userName}
                                variant='circular'
                            />
                            <Typography className={classes.uploadPhotoLink} onClick={() => openModal(setOpen)}>
                                {profileData.data.avatarUri ? `Изменить фотографию` : `Загрузить фотографию`}
                            </Typography>
                        </Box>
                        <ProfileData profileData={profileData.data} refetch={profileData.refetch} />
                    </Box>
                )}
                {open && <UploadUserPhoto type='musicianProfile' open={open} setOpen={setOpen} />}
            </Layout>
        </Box>
    )
}

export default Profile