import React, {useState} from 'react';
import {useCookies} from "react-cookie";
import {Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {closeModal, eventToggle} from "../../../helpers/utils";
import {useStyles} from "./style";
import ShortLogo from "../../../assets/icons/logos/shortLogo";
import ProfileIcon from "../../../assets/icons/sidebar/profile";
import {Link, useHistory} from "react-router-dom";
import NotificationIcon from "../../../assets/icons/sidebar/notification";
import BandRoomIcon from "../../../assets/icons/sidebar/band";
import ArrowIcon from "../../../assets/icons/sidebar/arrow";
import LogOutIcon from "../../../assets/icons/sidebar/logOut";
import LongLogo from "../../../assets/icons/logos/longLogo";


const Sidebar = (props) => {

    const {} = props
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [token, setToken, removeCookie] = useCookies(['access_token'])
    const history = useHistory()

    const logOut = () => {
        removeCookie('access_token')
        history.push('/auth')
    }

    return (
        <Drawer
            open={open}
            onClose={() => closeModal(setOpen)}
            variant="permanent"
            anchor="left"
            className={open && classes.drawerSize}
        >
            <Box className={!open ? classes.sidebarWrapper : classes.sidebarWrapper + ' ' + classes.sidebarOpened}>
                <Box>
                    <Box className={classes.sidebarItems}>
                        {!open ? (<ShortLogo />) : (<LongLogo />)}
                        <Divider />
                    </Box>
                    <List>
                        <Link to={'/profile'}>
                            <ListItem button>
                                <ListItemIcon>
                                    <ProfileIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Профиль'} />
                            </ListItem>
                        </Link>
                        <Link to={'/notify'}>
                            <ListItem button>
                                <ListItemIcon>
                                    <NotificationIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Уведомления'} />
                            </ListItem>
                        </Link>
                        <Link to={'/band'}>
                            <ListItem button>
                                <ListItemIcon>
                                    <BandRoomIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Моя группа'} />
                            </ListItem>
                        </Link>
                    </List>
                </Box>
                <Box className={classes.sidebarItems}>
                    <ListItem
                        button
                        onClick={logOut}
                    >
                        <ListItemIcon>
                            <LogOutIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Выйти'} />
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => eventToggle(open, setOpen)} button>
                        <ListItemIcon className={open && classes.arrowRotated}>
                            <ArrowIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Свернуть'} />
                    </ListItem>
                </Box>
            </Box>
        </Drawer>
    );
};

export default Sidebar;