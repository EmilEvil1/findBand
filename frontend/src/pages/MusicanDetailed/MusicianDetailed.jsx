import React from 'react'
import Layout from "../../components/common/Layout/Layout"
import {Box, Button, Typography} from "@material-ui/core"
import {useStyles} from "../style"
import UserPhoto from "../../components/common/UserPhoto/UserPhoto";

const MusicianDetailed = () => {

    const classes = useStyles()

    return (
        <Box className={classes.contentDark}>
            <Layout>
                <Box className={classes.profileForm}>
                    <Box className={classes.photoWrapper}>
                        <UserPhoto
                            avatarUri={''}
                            width={150}
                            height={150}
                            shortName={'test'}
                        />
                    </Box>
                    <Box>
                        <Typography variant='h4'>Имя Фамилия</Typography>
                        <Typography>Басс-гитара, ударные, соло-гитара, солист, на всеруки мастер</Typography>
                        <Box style={{marginTop: 20}} display='flex'>
                            <Box>
                                <Typography>Город</Typography>
                                <Typography>Владимир</Typography>
                            </Box>
                            <Box >
                                <Typography>Стаж</Typography>
                                <Typography>3 года</Typography>
                            </Box>
                            <Box>
                                <Typography>Группа</Typography>
                                <Typography>Нет</Typography>
                            </Box>
                        </Box>
                        <Box style={{marginTop: 20}}>
                            <Typography>О себе </Typography>
                            <Typography>текст о себе</Typography>
                        </Box>
                        <Button style={{marginTop: 20}}>Пригласить в группу</Button>
                    </Box>
                </Box>
            </Layout>
        </Box>
    )
}

export default MusicianDetailed