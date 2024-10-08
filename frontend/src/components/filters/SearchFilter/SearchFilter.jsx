import React from 'react'
import {useHistory} from "react-router-dom"
import {Box, Button, Grid, Typography} from "@material-ui/core"
import {handleRemoveQuery} from "../../../helpers/query"
import ReSearch from "../../forms/ReSearch/ReSearch"
import {useStyles} from "./style"

const SearchFilter = ({data, refetch, regionId, instrumentId, setRegionId, setInstrumentId}) => {

    const classes = useStyles()
    const history = useHistory()

    return (
        <Grid className={classes.container}>
            <Box className={classes.wrapper}>
                <Typography variant='h5' className={classes.title}>Результаты поиска</Typography>
                <ReSearch
                    refetch={refetch}
                    regionId={regionId}
                    instrumentId={instrumentId}
                    setRegionId={setRegionId}
                    setInstrumentId={setInstrumentId}
                />
                <Button onClick={() => {
                    history.push(`/`)
                    handleRemoveQuery(`SearchForMembers`)
                }}>
                    Назад
                </Button>
            </Box>
        </Grid>
    )
}

export default SearchFilter