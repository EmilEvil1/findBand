import React from 'react';
import {Avatar, Box, Button, Divider, Typography} from "@material-ui/core";
import {useStyles} from "../style";

const NotificationMessage = () => {

    const classes = useStyles()

    return (
        <Box className={classes.content}>
            <Divider />
            <Box className={classes.infoWrapperContent}>
                <Box className={classes.avatarWrapper}><Avatar className={classes.avatar}>ИВ</Avatar></Box>
                <Box className={classes.message}>
                    <Typography className={classes.userMessage}>
                        <Typography className={classes.userName}>Илья Прус</Typography>
                        пригласил вас в группу<Typography className={classes.userName}>«Металика»</Typography> как гитариста
                    </Typography>
                    <Button className={classes.btn}>Перейти к приглашению</Button>
                </Box>
                <Box className={classes.dateWrapper}>
                    <Typography className={classes.dateInfo}>10:45</Typography>
                    <Typography className={classes.dateInfo}>22 марта 2022 г.</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default NotificationMessage;