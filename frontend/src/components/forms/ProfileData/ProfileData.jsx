import React from 'react'
import {Form, Formik} from "formik"
import {Box, Button, Grid, TextField} from "@material-ui/core"
import {profileFormValidation} from "../../../helpers/validation"
import RegionList from "../../common/RegionList/RegionList"
import InstrumentList from "../../common/InstrumentList/InstrumentList"
import {useSaveNewData} from "../../../dto/hooks/Profile"
import {useStyles} from "./style"

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
                    userDescription: profileData.userDescription || '',
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
                                {/*<InputMask*/}
                                {/*    mask="99"*/}
                                {/*    // maskChar=" "*/}
                                {/*    value={values.age}*/}
                                {/*    onChange={handleChange}*/}
                                {/*    onBlur={handleBlur}*/}
                                {/*    error={touched.age && Boolean(errors.age)}*/}
                                {/*    helperText={touched.age && errors.age}*/}
                                {/*>*/}
                                {/*    {() => <TextField*/}
                                {/*                className={classes.marginBlock}*/}
                                {/*                name='age'*/}
                                {/*                label='Возраст'*/}
                                {/*                placeholder='Укажите возраст'*/}
                                {/*                value={values.age}*/}
                                {/*                onChange={handleChange}*/}
                                {/*                onBlur={handleBlur}*/}
                                {/*                error={touched.age && Boolean(errors.age)}*/}
                                {/*                helperText={touched.age && errors.age}*/}
                                {/*                variant='outlined'*/}
                                {/*                fullWidth*/}
                                {/*                inputProps={{maxLength: 2}}*/}
                                {/*             />*/}
                                {/*    }*/}
                                {/*</InputMask>*/}
                            </Box>
                            <TextField
                                style={{marginTop: 35}}
                                name='userDescription'
                                label='О себе'
                                placeholder='Расскажите о себе'
                                value={values.userDescription}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.userDescription && Boolean(errors.userDescription)}
                                helperText={touched.userDescription && errors.userDescription}
                                variant='outlined'
                                fullWidth
                            />
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