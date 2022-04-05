import React from 'react';
import {useStyles} from "./style";
import {Box, Grid, Typography} from "@material-ui/core";
import SettingsIcon from "../../assets/icons/notification/settings";
import NotificationMessage from "./notificationMessage/NotificationMessage";
import CloseIcon from "../../assets/icons/sidebar/close";

const Notification = (props) => {

    const classes = useStyles()
    const {openNotification, setOpenNotification} = props

    return (
        <Grid className={classes.wrapper}>
            <Box className={classes.infoWrapper}>
                <Typography className={classes.title}>Ововещения</Typography>
                <Box className={classes.iconsWrapper}>
                    <Box className={classes.iconWrapper}>
                        <SettingsIcon />
                    </Box>
                    <Box
                        className={classes.iconWrapper}
                        onClick={() => setOpenNotification(!openNotification)}
                    >
                        <CloseIcon />
                    </Box>
                </Box>
            </Box>
            <NotificationMessage />
            <NotificationMessage />
        </Grid>
    );
};

export default Notification;