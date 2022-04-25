import React from 'react';
import {useStyles} from "../../forms/Authentication/style";
import {musicalInstrumentsList} from "../../../helpers/mocks";
import AutocompleteField from "../AutocompleteField/AutocompleteField";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import ErrorFieldText from "../ErrorFieldText/ErrorFieldText";
import {red, white} from "../../../helpers/styles";

const InstrumentList = (props) => {

    const {values, handleChange, touched, errors, Field, setInstrumentStatus} = props
    const classes = useStyles()
    console.log(values.instrumentId)
    // console.log('musicalInstrumentsList', musicalInstrumentsList)
    // console.log('values.instrumentId ', values.instrumentId )

    return (
        <>

            {/*<Field*/}
            {/*    type="select"*/}
            {/*    name="instrumentId"*/}
            {/*    placeholder="select..."*/}
            {/*    component={AutocompleteField}*/}
            {/*    options={musicalInstrumentsList.length > 0 && musicalInstrumentsList}*/}
            {/*    // value={values}*/}
            {/*    onChange={(data) => {*/}
            {/*        console.log(data)*/}
            {/*        setInstrumentStatus(...data)*/}
            {/*    }}*/}
            {/*/>*/}


        <FormControl variant="outlined" className={classes.inputWrapper}>
            <InputLabel
                id="label"
                style={{color: (touched && touched.instrumentId && Boolean(errors.instrumentId)) ? red : white}}
            >
                Инструмент
            </InputLabel>
            <Select
                labelId="label"
                name='instrumentId'
                value={values.instrumentId || ''}
                onChange={handleChange}
                error={touched && touched.instrumentId && Boolean(errors.instrumentId)}
                fullWidth
            >
                {Array.isArray(musicalInstrumentsList) && musicalInstrumentsList.length > 0 && musicalInstrumentsList.map((item, index) => {
                    return <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                })}
            </Select>
            <ErrorFieldText errorText={(touched && touched.instrumentId && Boolean(errors.instrumentId)) && errors.instrumentId}/>
        </FormControl>
        </>
    );
};

export default InstrumentList;