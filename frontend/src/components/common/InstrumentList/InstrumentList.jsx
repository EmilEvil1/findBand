import React from 'react';
import {Box, TextField} from "@material-ui/core"
import {Autocomplete} from "@material-ui/lab";
import {useInstrumentsList} from "../../../dto/hooks/Instruments"
import {useStyles} from "../../../pages/style"

const InstrumentList = (props) => {

    const { values, handleChange, touched, errors, handleBlur, setFieldValue, errorText } = props

    const instrumentsList = useInstrumentsList()
    const classes = useStyles()

    return (
        <Autocomplete
            id="instrumentId"
            name="instrumentId"
            className={classes.autocomplete}
            classes={{noOptions: classes.noOptions}}
            noOptionsText='Инструмент не найден'
            options={(Array.isArray(instrumentsList.data) && instrumentsList.data.length > 0 && instrumentsList.data) || []}
            getOptionLabel={option => option.name}
            onChange={(event, value) => {
                !!value ?  setFieldValue("instrumentId", value.id) : setFieldValue("instrumentId", 0)
            }}
            renderInput={(params) => (
                <Box className={classes.textField}>
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
                </Box>
            )}
        />
    )
}

export default InstrumentList;