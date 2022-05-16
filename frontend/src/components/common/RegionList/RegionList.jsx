import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TextField} from "@material-ui/core";
import {getRegionList} from "../../../store/thunks/thunks";
import {Autocomplete} from "@material-ui/lab";
import {useStyles} from "../../../pages/style";

const RegionList = (props) => {

    const { values, handleChange, touched, errors, handleBlur, setFieldValue } = props
    const regionList = useSelector(({ state }) => state.regions)
    const dispatch = useDispatch()
    const classes = useStyles();

    useEffect(() => dispatch(getRegionList()), [])

    return (
        <Autocomplete
            style={{marginTop: 35}}
            id="regionId"
            name="regionId"
            noOptionsText='Регион не найден'
            classes={{noOptions: classes.noOptions}}
            options={(Array.isArray(regionList) && regionList.length > 0 && regionList) || []}
            getOptionLabel={option => option.name}
            onChange={(event, value) => {
                !!value ?  setFieldValue("regionId", value.id) : setFieldValue("regionId", 0)
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label='Регион'
                    placeholder='Введите название'
                    onChange={handleChange}
                    value={values.regionId || ''}
                    onBlur={handleBlur}
                    error={!!touched.regionId && Boolean(errors.regionId)}
                    // helperText={touched.instrumentId && errors.instrumentId}
                    variant='outlined'
                    fullWidth
                />
            )}
        />
    );
};

export default RegionList;