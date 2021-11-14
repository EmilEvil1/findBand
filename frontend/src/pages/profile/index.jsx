import React from 'react';
import {Container, Grid} from "@material-ui/core";
import Sidebar from "../../components/common/Sidebar";

const Profile = (props) => {

    const {} = props

    return (
        <Grid>
            <Sidebar />
            <Container>
                Profile page
            </Container>
        </Grid>
    );
};

export default Profile;