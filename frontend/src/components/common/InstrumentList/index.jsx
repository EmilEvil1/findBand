import React from 'react';
import {Box, MenuItem, Select} from "@material-ui/core";
import ErrorFieldText from "../ErrorFieldText";
import {useStyles} from "../../forms/Authentication/style";
import {musicalInstrumentsList} from "../../../helpers/mocks";

const InstrumentList = (props) => {

    const {values, handleChange, touched, errors} = props
    const classes = useStyles()

    return (
        <Box className={classes.inputWrapper}>
            <Select
                style={{width: '100%'}}
                label="Добавить получателей"
                name='instrument'
                value={values && values.instrument}
                onChange={handleChange}
                error={touched && touched.instrument && Boolean(errors.instrument)}
            >
                {musicalInstrumentsList.length > 1 && musicalInstrumentsList.map((item, index) => {
                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                })}
            </Select>
            <ErrorFieldText errorText={errors && errors.instrument}/>
        </Box>
    );
};

export default InstrumentList;