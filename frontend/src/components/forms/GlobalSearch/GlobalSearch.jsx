import React, {useState} from 'react';
import {Tab} from "@material-ui/core";
import {TabContext, TabList, TabPanel} from "@material-ui/lab";
import SearchBand from "./SearchBand/SearchBand";
import SearchMusician from "./SearchMusician/SearchMusician";

const GlobalSearch = () => {

    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => setValue(newValue)

    return (
        <TabContext value={value}>
            <TabList style={{padding: '0 24px', marginTop: 20}} onChange={handleChange}>
                <Tab label="Найти музыканта" value="1"/>
                <Tab label="Найти группу" value="2" />
            </TabList>
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