import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {useStyles} from "../style";
import {darkBlue} from "../../helpers/styles";
import Layout from "../../components/common/Layout/Layout";

const BandProfile = () => {

    const classes = useStyles()

    return (
        <Grid style={{background: darkBlue}} className={classes.content}>
            <Layout>
                <Typography color={'white'} variant={'h4'}>BandProfile</Typography>
            </Layout>
        </Grid>
    );
};

export default BandProfile;