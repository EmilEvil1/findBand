import React, {useEffect} from 'react';
import {TextField, Typography} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import {useDispatch, useSelector} from "react-redux";
import {getInstrumentsListData} from "../../../store/thunks/common/instruments";
import {makeStyles} from "@material-ui/core/styles";

const InstrumentList = (props) => {

    const {values, handleChange, touched, errors, setFieldValue, handleBlur} = props
    const instrumentsList = useSelector(({ state }) => state.instruments)
    const dispatch = useDispatch()

    useEffect(() => dispatch(getInstrumentsListData()), [])
    const useStyles = makeStyles({
        noOptions: {
            color: "red",
            backgroundColor: "pink"
        }
    });
    const styles = useStyles();

    return (
        <Autocomplete
            style={{marginTop: 35}}
            id="instrumentId"
            name="instrumentId"
            classes={{
                noOptions: styles.noOptions
            }}
            noOptionsText='Инструмент не найден'
            options={Array.isArray(instrumentsList) && instrumentsList.length > 0 && instrumentsList || []}
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
                    value={values.instrumentId || ''}
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