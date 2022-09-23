import React from 'react'
import {Form, Formik} from "formik"
import {Box, Button, Grid, TextField} from "@material-ui/core"
import {profileFormValidation} from "../../../helpers/validation"
import RegionList from "../../common/RegionList/RegionList"
import InstrumentList from "../../common/InstrumentList/InstrumentList"
import {useSaveNewData} from "../../../dto/hooks/Profile"
import {useStyles} from "./style"
import AgeSelect from "../../common/AgeSelect/AgeSelect";

const ProfileData = (props) => {

    const { profileData, refetch } = props
    const classes = useStyles()
    const sendNewData = useSaveNewData()

    const onUpdate = (data) => sendNewData.mutateAsync(data)
            .then(refetch)
            .catch(err => console.log(err.response.data.errors.errorDescription))

    const onSubmit = data => onUpdate(data)

    return (
        <Grid className={classes.wrapper}>
            <Formik
                initialValues={{
                    userName: profileData.userName || '',
                    emailAddress: profileData.emailAddress || '',
                    regionId: profileData.regionId || '',
                    instrumentId: profileData.instrumentId || '',
                    age: profileData.age || '',
                    experienceAge: profileData.experienceAge || ''
                }}
                onSubmit={values => onSubmit(values)}
                validationSchema={profileFormValidation}
                enableReintialize
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        setFieldValue
                    } = props
                    return (
                        <Form onSubmit={handleSubmit}>
                            <Box display='flex'>
                                <TextField
                                    name='userName'
                                    label='Имя'
                                    placeholder='Укажите имя'
                                    value={values.userName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.userName && Boolean(errors.userName)}
                                    helperText={touched.userName && errors.userName}
                                    variant='outlined'
                                    fullWidth
                                />
                                <AgeSelect
                                    vakue={values.age}
                                    onChange={handleChange}
                                    name='age'
                                />
                            </Box>
                            {/*<TextField*/}
                            {/*    name='userDescription'*/}
                            {/*    label='Имя'*/}
                            {/*    placeholder='Укажите имя'*/}
                            {/*    value={values.userName}*/}
                            {/*    onChange={handleChange}*/}
                            {/*    onBlur={handleBlur}*/}
                            {/*    error={touched.userName && Boolean(errors.userName)}*/}
                            {/*    helperText={touched.userName && errors.userName}*/}
                            {/*    variant='outlined'*/}
                            {/*    fullWidth*/}
                            {/*/>*/}
                            <RegionList
                                values={values}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                                setFieldValue={setFieldValue}
                            />
                            <InstrumentList
                                values={values}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                                setFieldValue={setFieldValue}
                            />
                            <Button
                                className={classes.marginContainer}
                                color='primary'
                                onClick={() => handleSubmit()}
                            >
                                Сохранить
                            </Button>
                        </Form>
                    )
                }}
            </Formik>
            {/*<Box className={classes.marginContainer}>*/}
            {/*    <Typography>Сменить пароль</Typography>*/}
            {/*    <Typography>Выйти</Typography>*/}
            {/*</Box>*/}
        </Grid>
    )
}

export default ProfileData