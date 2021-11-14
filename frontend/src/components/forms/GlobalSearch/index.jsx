import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Box, Tab} from "@material-ui/core";
import {TabContext, TabList, TabPanel} from "@material-ui/lab";
import SearchBand from "./SearchBand";
import SearchMusician from "./SearchMusician";

const GlobalSearch = (props) => {

    const {} = props
    const dispatch = useDispatch()
    // const classes = useStyles()

    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => setValue(newValue)

    return (

        <TabContext value={value}>
            <Box>
                <TabList onChange={handleChange}>
                    <Tab label="Найти музыканта" value="1" />
                    <Tab label="Найти группу" value="2" />
                </TabList>
            </Box>
            <TabPanel value="1">
                <SearchMusician />
            </TabPanel>
            <TabPanel value="2">
                <SearchBand />
            </TabPanel>
        </TabContext>
    );
};

export default GlobalSearch;