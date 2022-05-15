import React from 'react';
import {Box, Typography} from "@material-ui/core";
import {useStyles} from "../style";
import Layout from "../../components/common/Layout/Layout";
import {white} from "../../helpers/styles";

const BandProfile = () => {

    const classes = useStyles()

    return (
        <Box className={classes.contentDark}>
            <Layout>
                <Typography
                    color={white}
                    variant='h4'
                >
                    BandProfile
                </Typography>
            </Layout>
        </Box>
    );
};

export default BandProfile;