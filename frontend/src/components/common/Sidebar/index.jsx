import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Box, Button, Grid} from "@material-ui/core";
import {eventToggle} from "../../../helpers/utils";
import {useStyles} from "./style";
import ShortLogo from "../../../assets/icons/home/shortLogo";
import Menu from "./Menu";
import ArrowIcon from "../../../assets/icons/sidebar/arrow";
import LogOut from "./LogOut";
import UserData from "./UserData";
import NotificationIcon from "../../../assets/icons/sidebar/notification";

const Sidebar = (props) => {

    const {} = props
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    return (

        <Grid className={!open ? classes.sidebarWrapper : classes.sidebarWrapper + ' ' + classes.sidebarOpened}>
            <Box className={classes.sidebarTopItems}>
                <ShortLogo />
            </Box>
            <Box className={classes.sidebarMiddleItems}>
                <UserData open={open} />
                <Menu open={open}/>
                <Box>
                    <Button><NotificationIcon /></Button>
                    <LogOut />
                </Box>
            </Box>
            <Box className={classes.sidebarBottomItems}>
                <Box
                    style={{cursor: "pointer"}}
                    className={open ? classes.arrowRotated : ''}
                    onClick={() => eventToggle(open, setOpen)}
                >
                    <ArrowIcon />
                </Box>
            </Box>
        </Grid>

    );
};

export default Sidebar;