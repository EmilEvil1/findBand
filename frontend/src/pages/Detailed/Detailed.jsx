import React from 'react';
import {Container, Grid} from "@material-ui/core";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import Notification from "../../components/notification/Notification";

const Detailed = () => {
    return (
        <Grid style={{display: "flex"}}>
            <Sidebar />
            <Container>
                DETAILED PAGE
            </Container>
        </Grid>
    );
};

export default Detailed;