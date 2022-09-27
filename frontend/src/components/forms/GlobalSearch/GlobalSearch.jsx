import React, {useState} from 'react'
import {Box} from "@material-ui/core"
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab"
import Search from "../Search/Search"

const GlobalSearch = () => {

    const [searchType, setSearchType] = useState(`musician`)
    const handleChange = (event, newValue) => setSearchType(newValue)

    return (
        <Box>
            <ToggleButtonGroup
                color="primary"
                value={searchType}
                exclusive
                onChange={handleChange}
                defaultValue={searchType}
                aria-label="Platform"
            >
                <ToggleButton value="musician">Найти музыканта</ToggleButton>
                <ToggleButton value="band">Найти группу</ToggleButton>
            </ToggleButtonGroup>
            <Search searchType={searchType} />
        </Box>
    )
}

export default GlobalSearch;