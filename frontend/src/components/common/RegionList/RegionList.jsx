import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import ErrorFieldText from "../ErrorFieldText/ErrorFieldText";
import {useStyles} from "../../forms/Authentication/style";
import {getRegionList} from "../../../store/thunks/thunks";
import {red, white} from "../../../helpers/styles";

const RegionList = (props) => {

    const {values, handleChange, touched, errors} = props
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
                style={{color: (touched && touched.region && Boolean(errors.region)) ? red : white}}
            >
                Регион
            </InputLabel>
            <Select
                labelId="label"
                name='region'
                value={values ? values.region : ''}
                onChange={handleChange}
                error={touched && touched.region && Boolean(errors.region)}
                fullWidth
            >
                {regionList && regionList.length > 1 && regionList.map((item, index) => {
                    return <MenuItem key={index} value={item.regionName}>{item.regionName}</MenuItem>
                })}
            </Select>
            <ErrorFieldText errorText={(touched && touched.region && Boolean(errors.region)) && errors.region}/>
        </FormControl>
    );
};

export default RegionList;