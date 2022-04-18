import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import ErrorFieldText from "../ErrorFieldText/ErrorFieldText";
import {useStyles} from "../../forms/Authentication/style";
import {musicalInstrumentsList} from "../../../helpers/mocks";
import {red, white} from "../../../helpers/styles";

const InstrumentList = (props) => {

    const {values, handleChange, touched, errors} = props
    const classes = useStyles()
    console.log('musicalInstrumentsList', musicalInstrumentsList)
    console.log('values.instrumentId ', values.instrumentIds )
    return (
        <FormControl variant="outlined" className={classes.inputWrapper}>
            <InputLabel
                id="label"
                style={{color: (touched && touched.instrumentIds && Boolean(errors.instrumentIds)) ? red : white}}
            >
                Инструмент
            </InputLabel>
            <Select
                labelId="label"
                name='instrumentIds'
                value={values.instrumentIds || []}
                onChange={handleChange}
                error={touched && touched.instrumentIds && Boolean(errors.instrumentIds)}
                fullWidth
            >
                {Array.isArray(musicalInstrumentsList) && musicalInstrumentsList.length > 0 && musicalInstrumentsList.map((item, index) => {
                    return <MenuItem key={index} value={[item.id]}>{item.name}</MenuItem>
                })}
            </Select>
            <ErrorFieldText errorText={(touched && touched.instrumentIds && Boolean(errors.instrumentIds)) && errors.instrumentIds}/>
        </FormControl>
    );
};

export default InstrumentList;