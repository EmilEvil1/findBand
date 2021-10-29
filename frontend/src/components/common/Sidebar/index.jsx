import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Box, Grid} from "@material-ui/core";

import {useStyles} from "./style";
import IconSearch from "../../../assets/icons/sidebar/search";
import IconHome from "../../../assets/icons/sidebar/home";
import ShortLogo from "../../../assets/icons/shortLogo";
import {eventToggle} from "../../../helpers/utils";
import Menu from "./Menu";
import LogOut from "../LogOut";
import ArrowIcon from "../../../assets/icons/sidebar/arrow";


const Sidebar = (props) => {

    const {} = props
    const classes = useStyles()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    return (

        <Grid
            className={!open ? classes.sidebarWrapper : classes.sidebarWrapper + ' ' + classes.sidebarOpened}
        >
            <Box className={classes.sidebarTopItems}>
                <Box>
                    <ShortLogo />
                    {open && (<LogOut />)}
                </Box>
            </Box>
            <Box className={classes.sidebarMiddleItems}>
                <Menu open={open}/>
            </Box>
            <Box>
                <Box
                    style={{cursor: "pointer"}}
                    className={open && classes.arrowRotated}
                    onClick={() => eventToggle(open, setOpen)}
                >
                    <ArrowIcon />
                </Box>
            </Box>
        </Grid>

    );
};

export default Sidebar;