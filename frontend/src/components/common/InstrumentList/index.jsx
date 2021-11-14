import React from 'react';
import {useDispatch} from "react-redux";
import {Box, MenuItem, TextField} from "@material-ui/core";
import {Controller} from "react-hook-form";
import ErrorFieldText from "../ErrorFieldText";
import {useStyles} from "../../forms/Authentication/style";
import {musicalInstrumentsList} from "../../../helpers/mocks";


const InstrumentList = (props) => {

    const {control} = props
    const dispatch = useDispatch()
    const classes = useStyles()

    return (

        <Box className={classes.inputWrapper}>
            <Controller
                name='select'
                control={control}
                defaultValue={''}
                rules={{ required: <ErrorFieldText errorText={'Выберите инструмент'} /> }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        select
                        label='Иструмент'
                        placeholder='Иструмент'
                        value={value}
                        onChange={onChange}
                        variant='outlined'
                        color='primary'
                        fullWidth
                        required
                        error={!!error}
                        helperText={error ? <ErrorFieldText errorText={error.message} /> : null}
                    >
                        {musicalInstrumentsList.map((name, index) => (
                            <MenuItem
                                className={classes.selectField}
                                key={index}
                                value={name}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </TextField>
                )}
            />
        </Box>
    );
};

export default InstrumentList;