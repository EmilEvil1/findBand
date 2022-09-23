import React from 'react'
import {Box, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core"

const AgeSelect = ({value, onChange, name}) => {

    return (
        <Box>
            <FormControl variant="filled" fullWidth>
                <InputLabel id="demo-simple-select-filled-label">{!!value ? `Возраст` : `не выбран`}</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={value}
                    label={value}
                    onChange={onChange}
                    name={name}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default AgeSelect