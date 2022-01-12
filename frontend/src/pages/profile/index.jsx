import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Grid} from "@material-ui/core";
import Sidebar from "../../components/common/Sidebar";
import {useStyles} from "../../components/common/Sidebar/style";

import {useJwt} from "react-jwt";

const Profile = (props) => {

    const {} = props
    const classes = useStyles()
    const dispatch = useDispatch()
    // const regionList = useSelector(({ state }) => state.regions)

    // console.log('regionList', regionList)
    // const { decodedToken, isExpired } = useJwt(token);
    return (
        <Grid className={classes.content}>
            <Sidebar />
            <Container>
               {/*<Button onClick={() => dispatch(getTestingInfo)}>*/}
               {/*    POSTS*/}
               {/*</Button>*/}

            </Container>
        </Grid>
    );
};

export default Profile;