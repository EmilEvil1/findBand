import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import ErrorFieldText from "../ErrorFieldText/ErrorFieldText";
import {useStyles} from "../../forms/Authentication/style";
import {musicalInstrumentsList} from "../../../helpers/mocks";
import {red, white} from "../../../helpers/styles";

const InstrumentList = (props) => {

    const {values, handleChange, touched, errors} = props
    const classes = useStyles()

    return (
        <FormControl variant="outlined" className={classes.inputWrapper}>
            <InputLabel
                id="label"
                style={{color: (touched && touched.instrument && Boolean(errors.instrument)) ? red : white}}
            >
                Инструмент
            </InputLabel>
            <Select
                labelId="label"
                name='instrument'
                value={values.instrument || ''}
                onChange={handleChange}
                error={touched && touched.instrument && Boolean(errors.instrument)}
                fullWidth
            >
                {Array.isArray(musicalInstrumentsList) && musicalInstrumentsList.length > 0 && musicalInstrumentsList.map((item, index) => {
                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                })}
            </Select>
            <ErrorFieldText errorText={(touched && touched.instrument && Boolean(errors.instrument)) && errors.instrument}/>
        </FormControl>
    );
};

export default InstrumentList;