import React, {useEffect} from 'react';
import {TextField} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import {useDispatch, useSelector} from "react-redux";
import {getInstrumentsListData} from "../../../store/thunks/common/instruments";
import {useStyles} from "../../../pages/style";

const InstrumentList = (props) => {

    const { values, handleChange, touched, errors, handleBlur, setFieldValue } = props
    const instrumentsList = useSelector(({ state }) => state.instruments)
    const dispatch = useDispatch()
    const classes = useStyles();

    useEffect(() => dispatch(getInstrumentsListData()), [])

    return (
        <Autocomplete
            style={{marginTop: 35}}
            id="instrumentId"
            name="instrumentId"
            classes={{noOptions: classes.noOptions}}
            noOptionsText='Инструмент не найден'
            options={(Array.isArray(instrumentsList) && instrumentsList.length > 0 && instrumentsList) || []}
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
                    error={touched.instrumentId && Boolean(errors.instrumentId)}
                    // helperText={touched.instrumentId && errors.instrumentId}
                    variant='outlined'
                    fullWidth
                />
            )}
        />
    )
}

export default InstrumentList;