import React from 'react';
import {Box, MenuItem, Select} from "@material-ui/core";
import ErrorFieldText from "../ErrorFieldText";
import {useStyles} from "../../forms/Authentication/style";

const RegionList = (props) => {

    const {values, handleChange, touched, errors, regionList} = props
    const classes = useStyles()

    return (
        <Box className={classes.inputWrapper}>
            <Select
                style={{width: '100%'}}
                label="Добавить получателей"
                name='region'
                value={values && values.region}
                onChange={handleChange}
                error={touched && touched.region && Boolean(errors.region)}
            >
                {regionList && regionList.length > 1 && regionList.map((item, index) => {
                    return <MenuItem key={index} value={item.regionName}>{item.regionName}</MenuItem>
                })}
            </Select>
            <ErrorFieldText errorText={errors && errors.region}/>
        </Box>
    );
};

export default RegionList;