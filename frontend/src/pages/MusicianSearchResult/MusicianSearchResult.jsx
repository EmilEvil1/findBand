import React from 'react';
import {Box, Grid} from "@material-ui/core";
import MusicianCard from "../../components/common/MusicianCard/MusicianCard";
import SearchFilter from "../../components/filters/SearchFilter/SearchFilter";
import Layout from "../../components/common/Layout/Layout";
import {useStyles} from "../style";

const MusicianSearchResult = () => {

    const classes = useStyles()

    return (
        <Grid className={classes.layout}>
            <Layout>
                <SearchFilter />
                <Box className={classes.wrapper}>
                    <MusicianCard />
                    <MusicianCard />
                    <MusicianCard />
                    <MusicianCard />
                    <MusicianCard />
                    <MusicianCard />
                </Box>
            </Layout>
        </Grid>
    );
};

export default MusicianSearchResult;