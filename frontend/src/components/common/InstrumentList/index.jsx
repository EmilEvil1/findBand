import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import ErrorFieldText from "../ErrorFieldText";
import {useStyles} from "../../forms/Authentication/style";
import {musicalInstrumentsList} from "../../../helpers/mocks";
import {red, white} from "../../../helpers/styles";

const InstrumentList = (props) => {

    const {values, handleChange, touched, errors} = props
    const classes = useStyles()
    console.log(values.region)

    return (
        <FormControl style={{marginLeft: 10}} variant="outlined" className={classes.inputWrapper}>
            <InputLabel
                id="label"
                style={{color: (touched && touched.region && Boolean(errors.region)) ? red : white}}
            >
                Инструмент
            </InputLabel>
            <Select
                labelId="label"
                name='instrument'
                value={values && values.instrument}
                onChange={handleChange}
                error={touched && touched.instrument && Boolean(errors.instrument)}
                fullWidth
            >
                {musicalInstrumentsList && musicalInstrumentsList.length > 1 && musicalInstrumentsList.map((item, index) => {
                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                })}
            </Select>
            <ErrorFieldText errorText={(touched && touched.region && Boolean(errors.region)) && errors.instrument}/>
        </FormControl>
    );
};

export default InstrumentList;