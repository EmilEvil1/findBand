import React from 'react';
// import {useDispatch} from "react-redux";
import {Box, Container, Grid} from "@material-ui/core";
import Sidebar from "../../components/common/Sidebar";
// import {useStyles} from "../../components/common/Sidebar/style";

const Profile = (props) => {

    const {} = props
    // const classes = useStyles()
    // const dispatch = useDispatch()

    return (
        <Grid>
            <Sidebar />
            <Container>
                <Box>123</Box>
            </Container>
        </Grid>
    );
};

export default Profile;