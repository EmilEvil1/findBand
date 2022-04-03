import React from 'react';
import {Box, Container, Grid} from "@material-ui/core";
import {useStyles} from "../style";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import MusicianCard from "../../components/common/MusicianCard/MusicianCard";
import SearchFilter from "../../components/filters/SearchFilter/SearchFilter";

const MusicianSearchResult = () => {

    const classes = useStyles()

    return (
        <Grid className={classes.layout}>
            <Sidebar />
            <Box>
            <Container>
                <SearchFilter />
            </Container>
            <Container>
                <Box className={classes.wrapper}>
                    <MusicianCard />
                    <MusicianCard />
                    <MusicianCard />
                    <MusicianCard />
                    <MusicianCard />
                    <MusicianCard />
                </Box>
            </Container>
            </Box>
        </Grid>
    );
};

export default MusicianSearchResult;