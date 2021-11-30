import React from 'react';
import {useDispatch} from "react-redux";
import {Box, MenuItem, TextField} from "@material-ui/core";
import {Controller} from "react-hook-form";
import ErrorFieldText from "../ErrorFieldText";
import {useStyles} from "../../forms/Authentication/style";


const RegionList = (props) => {

    const {control} = props
    const dispatch = useDispatch()
    const classes = useStyles()

    return (

        <Box className={classes.inputWrapper}>
            <Controller
                name='region'
                control={control}
                defaultValue=''
                rules={{ required: <ErrorFieldText errorText={'Выберите регион'} /> }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        style={{marginRight: 20}}
                        value={value}
                        select
                        label='Регион'
                        onChange={onChange}
                        variant='outlined'
                        color='primary'
                        fullWidth
                        required
                        error={!!error}
                        helperText={error ? <ErrorFieldText errorText={error.message} /> : null}
                    >
                        <MenuItem
                            className={classes.selectField}
                            value={'Vladimir'}
                        >
                            Владимир
                        </MenuItem>
                    </TextField>
                )}
            />
        </Box>
    );
};

export default RegionList;