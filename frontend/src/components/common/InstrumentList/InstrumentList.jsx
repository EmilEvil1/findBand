import React from 'react';
import {TextField} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import {useStyles} from "../../../pages/style";
import {useInstrumentsList} from "../../../dto/hooks/Instruments";

const InstrumentList = (props) => {

    const { values, handleChange, touched, errors, handleBlur, setFieldValue, errorText } = props

    const instrumentsList = useInstrumentsList()
    const classes = useStyles()

    return (
        <Autocomplete
            style={{marginTop: 35}}
            id="instrumentId"
            name="instrumentId"
            classes={{noOptions: classes.noOptions}}
            noOptionsText='Инструмент не найден'
            options={(Array.isArray(instrumentsList.data) && instrumentsList.data.length > 0 && instrumentsList.data) || []}
            getOptionLabel={option => option.name}
            onChange={(event, value) => {
                !!value ?  setFieldValue("instrumentId", value.id) : setFieldValue("instrumentId", 0)
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label='Инструмент'
                    placeholder='Введите название'
                    onChange={handleChange}
                    value={!!values.instrumentId && values.instrumentId}
                    onBlur={handleBlur}
                    error={touched.instrumentId && Boolean(errors.instrumentId || errorText)}
                    helperText={touched.instrumentId && errors.instrumentId}
                    variant='outlined'
                    fullWidth
                />
            )}
        />
    )
}

export default InstrumentList;