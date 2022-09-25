import React from 'react'
import {TextField} from "@material-ui/core"
import {Autocomplete} from "@material-ui/lab"
import {useStyles} from "../../../pages/style"
import {useRegionList} from "../../../dto/hooks/Regions"

const RegionList = (props) => {

    const { values, handleChange, touched, errors, handleBlur, setFieldValue, errorText } = props

    const regionList = useRegionList()
    const classes = useStyles()

    return (
        <Autocomplete
            // style={{marginTop: 35, width: `100%`}}
            style={{marginTop: 0, width: `100%`}}
            id="regionId"
            name="regionId"
            noOptionsText='Регион не найден'
            classes={{noOptions: classes.noOptions}}
            options={(Array.isArray(regionList.data) && regionList.data.length > 0 && regionList.data) || []}
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
                    error={!!touched.regionId && Boolean(errors.regionId || errorText)}
                    helperText={touched.regionId && errors.regionId}
                    variant='outlined'
                    fullWidth
                />
            )}
        />
    );
};

export default RegionList;