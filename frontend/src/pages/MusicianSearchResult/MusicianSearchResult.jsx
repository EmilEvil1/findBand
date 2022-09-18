import React from 'react'
import {Box, Grid} from "@material-ui/core"
import MusicianCard from "../../components/common/MusicianCard/MusicianCard"
import SearchFilter from "../../components/filters/SearchFilter/SearchFilter"
import Layout from "../../components/common/Layout/Layout"
import {useSearchForMembers} from "../../dto/hooks/Home"
import {useStyles} from "../style"

const MusicianSearchResult = () => {

    const classes = useStyles()

    const regionId = (new URLSearchParams(window.location.search)).get("regionId")
    const instrumentId = (new URLSearchParams(window.location.search)).get("instrumentId")
    const searchForMembers = useSearchForMembers(regionId, instrumentId)

    return (
        <Grid className={classes.layout}>
            <Layout>
                <SearchFilter />
                <Box className={classes.wrapper}>
                    {searchForMembers.data &&
                        Array.isArray(searchForMembers.data.items) && searchForMembers.data.items.length > 0 ?
                        searchForMembers.data.items.map((item, index) => <MusicianCard item={item} key={index} />)
                        : 'Данные отсувствуют'
                    }
                </Box>
            </Layout>
        </Grid>
    )
}

export default MusicianSearchResult