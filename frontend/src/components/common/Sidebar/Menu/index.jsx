import React from 'react';
import {Box, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import HomeIcon from "../../../../assets/icons/sidebar/home";
import SettingsIcon from "../../../../assets/icons/sidebar/settings";
import SearchIcon from "../../../../assets/icons/sidebar/search";
import OptionIcon from "../../../../assets/icons/sidebar/option";
import {useStyles} from "../style";


const Menu = (props) => {

    const {open} = props
    const classes = useStyles()

    return (

        <Box className={classes.menuWrapper}>
            <Link className={classes.menuItem} to={'#'}>
                <SearchIcon />
                {open && <Typography>Поиск</Typography>}
            </Link>
            <Link className={classes.menuItem} to={'#'}>
                <HomeIcon />
                {open && <Typography>На главную</Typography>}
            </Link>
            <Link className={classes.menuItem} to={'#'}>
                <SettingsIcon />
                {open && <Typography>Настройки</Typography>}
            </Link>
            <Link className={classes.menuItem} to={'#'}>
                <OptionIcon />
                {open && <Typography>Поиск</Typography>}
            </Link>
        </Box>
    );
};

export default Menu;
