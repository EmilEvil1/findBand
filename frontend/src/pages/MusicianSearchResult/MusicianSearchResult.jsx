import React, {useEffect} from 'react'
import {Box, Grid} from "@material-ui/core"
import MusicianCard from "../../components/common/MusicianCard/MusicianCard"
import SearchFilter from "../../components/filters/SearchFilter/SearchFilter"
import Layout from "../../components/common/Layout/Layout"
import {useSearchForMembers} from "../../dto/hooks/Home"
import {useStyles} from "../style"

const MusicianSearchResult = () => {

    const classes = useStyles()
    const searchForMembers = useSearchForMembers()

    useEffect(() => {onSearch()}, [])

    const onSearch = () =>
        searchForMembers.mutateAsync({
            regionId: 6,
            instrumentIds: [4, 3, 5]
        })
            .then((response) => {
                // console.log('response', response)
            })
            .catch(err => {
                // if (err.response.status === 401) {
                //     removeToken("access_token")
                //     history.push(`/auth`)
                // }
            })

    // console.log('searchForMembers', searchForMembers.data)

    return (
        <Grid className={classes.layout}>
            <Layout>
                <SearchFilter />
                <Box className={classes.wrapper}>
                    {searchForMembers.data && Array.isArray(searchForMembers.data.items) && searchForMembers.data.items.length > 0 ?
                        searchForMembers.data.items.map((item, index) => {
                            return <MusicianCard item={item} key={index} />
                        }) : 'Данные отсувствуют'}
                </Box>
            </Layout>
        </Grid>
    )
}

export default MusicianSearchResult;