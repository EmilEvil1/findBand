import React from 'react';
import {Form, Formik} from "formik";
import InputMask from "react-input-mask";
import {useDispatch} from "react-redux";
import {Box, Button, Grid, TextField, Typography} from "@material-ui/core";
import {profileFormValidation} from "../../../helpers/validation";
import RegionList from "../../common/RegionList/RegionList";
import InstrumentList from "../../common/InstrumentList/InstrumentList";
import {sendNewUserProfileData} from "../../../store/thunks/common/profile";
import {useStyles} from "./style";

const ProfileData = (props) => {

    const { profileData } = props
    const dispatch = useDispatch()
    const classes = useStyles()

    const onSubmit = data => dispatch(sendNewUserProfileData(data))

    return (
        <Grid className={classes.wrapper}>
            <Formik
                initialValues={{
                    name: profileData.userName || '',
                    email: profileData.emailAddress || '',
                    phone: profileData.phone || '',
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
                    } = props;
                    return (
                        <Form onSubmit={handleSubmit}>
                            <TextField
                                className={classes.marginBlock}
                                name='name'
                                label='Имя'
                                placeholder='Укажите имя'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                                variant='outlined'
                                fullWidth
                            />
                            <InputMask
                                mask="+7 (999) 999-9999"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.phone && Boolean(errors.phone)}
                                helperText={touched.phone && errors.phone}
                            >
                                <TextField
                                    className={classes.marginBlock}
                                    name='phone'
                                    label='Телефон'
                                    placeholder='Укажите телефон'
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.phone && Boolean(errors.phone)}
                                    helperText={touched.phone && errors.phone}
                                    variant='outlined'
                                    fullWidth
                                />
                            </InputMask>
                            <TextField
                                name='email'
                                label='Email'
                                placeholder='Укажите Email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
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
            <Box className={classes.marginContainer}>
                <Typography>Сменить пароль</Typography>
                <Typography>Выйти</Typography>
            </Box>
        </Grid>
    )
}

export default ProfileData;