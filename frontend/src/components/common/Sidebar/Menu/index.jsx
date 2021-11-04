import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useStyles} from "../style";
import UsersIcon from "../../../../assets/icons/sidebar/users";

const Menu = (props) => {

    const {open} = props
    const classes = useStyles()

    return (

        <Grid className={classes.menuWrapper}>
            <Link className={classes.menuItem} to={'#'}>
                <UsersIcon />
                {open && <Typography>Профиль группы</Typography>}
            </Link>
            {/*<Link className={classes.menuItem} to={'#'}>*/}
            {/*    <HomeIcon />*/}
            {/*    {open && <Typography>Группа</Typography>}*/}
            {/*</Link>*/}
        </Grid>
    );
};

export default Menu;
