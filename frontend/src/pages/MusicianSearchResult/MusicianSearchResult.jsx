import React, {useState} from 'react'
import {Box, Grid, Typography} from "@material-ui/core"
import {LoaderWrapper} from "../../components/wrappers/LoaderWrapper"
import MusicianCard from "../../components/common/MusicianCard/MusicianCard"
import SearchFilter from "../../components/filters/SearchFilter/SearchFilter"
import Layout from "../../components/common/Layout/Layout"
import {useSearchForMembers} from "../../dto/hooks/Home"
import {getUrlQueryParams} from "../../helpers/utils"
import {useStyles} from "../style"

const MusicianSearchResult = () => {

    const classes = useStyles()
    const [regionId, setRegionId] = useState(getUrlQueryParams(`regionId`))
    const [instrumentId, setInstrumentId] = useState(getUrlQueryParams(`instrumentId`))
    const searchForMembers = useSearchForMembers(regionId, instrumentId)
    const isLoading = searchForMembers.isLoading || searchForMembers.isFetching

    return (
        <Grid className={classes.layout}>
            <Layout>
                <SearchFilter
                    refetch={searchForMembers.refetch}
                    regionId={regionId}
                    instrumentId={instrumentId}
                    setRegionId={setRegionId}
                    setInstrumentId={setInstrumentId}
                />
                <LoaderWrapper isLoad={isLoading}>
                    <Box className={classes.wrapper}>
                        {searchForMembers.data &&
                            Array.isArray(searchForMembers.data.items) && searchForMembers.data.items.length > 0 &&
                            searchForMembers.data.items.map((item, index) => <MusicianCard item={item} key={index} />)
                        }
                        {searchForMembers.data && searchForMembers.data.items.length < 1 &&
                            <Typography>По вашему запросу ничего не найдено</Typography>
                        }
                    </Box>
                </LoaderWrapper>
            </Layout>
        </Grid>
    )
}

export default MusicianSearchResult