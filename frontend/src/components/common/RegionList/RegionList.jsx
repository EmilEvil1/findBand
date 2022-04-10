import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import ErrorFieldText from "../ErrorFieldText/ErrorFieldText";
import {useStyles} from "../../forms/Authentication/style";
import {getRegionList} from "../../../store/thunks/thunks";
import {red, white} from "../../../helpers/styles";

const RegionList = (props) => {

    const { values, handleChange, touched, errors } = props
    const regionList = useSelector(({ state }) => state.regions)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRegionList())
    }, [])

    return (
        <FormControl variant="outlined" className={classes.inputWrapper}>
            <InputLabel
                id="label"
                style={{color: (touched && touched.regionId && Boolean(errors.regionId)) ? red : white}}
            >
                Регион
            </InputLabel>
            <Select
                labelId="label"
                name='regionId'
                value={values.regionId || ''}
                onChange={handleChange}
                error={touched && touched.regionId && Boolean(errors.regionId)}
                fullWidth
            >
                {Array.isArray(regionList) && regionList.length > 0 && regionList.map((item, index) => {
                    return <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                })}
            </Select>
            <ErrorFieldText errorText={(touched && touched.regionId && Boolean(errors.regionId)) && errors.regionId}/>
        </FormControl>
    );
};

export default RegionList;