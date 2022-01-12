import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, MenuItem, TextField} from "@material-ui/core";
import {Controller} from "react-hook-form";
import ErrorFieldText from "../ErrorFieldText";
import {useStyles} from "../../forms/Authentication/style";
import {getRegionList} from "../../../store/thunks/thunks";

const RegionList = (props) => {

    const {control} = props
    const regionList = useSelector(({ state }) => state.regions)
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        dispatch(getRegionList())
    }, [])

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
                        {regionList.length > 1 && regionList.map((region, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    className={classes.selectField}
                                    value={region.regionName}
                                >
                                    {region.regionName}
                                </MenuItem>
                            )
                        })}
                    </TextField>
                )}
            />
        </Box>
    );
};

export default RegionList;