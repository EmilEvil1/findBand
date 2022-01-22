import React from 'react';
import { Formik } from "formik";
import {useDispatch} from "react-redux";
import {Grid, TextField} from "@material-ui/core";
import {profileFormValidation} from "../../../helpers/validation";
import InputMask from "react-input-mask";
import RegionList from "../../common/RegionList";
import InstrumentList from "../../common/InstrumentList";


const ProfileData = (props) => {

    const {} = props
    // const dispatch = useDispatch()
    // const classes = useStyles()

    return (

        <Grid style={{width: '50%'}}>
            <Formik
                initialValues={{
                    name: 'Иван',
                    email: 'john@mail.ru',
                    phone: '+7 (999) 999 99 99',
                    region: 'Владимир',
                    instrument: 'Гитара',
                }}
                onSubmit={(values, { setSubmitting }) => {
                    // onSubmit(values)
                    setSubmitting(false)
                }}
                validationSchema={profileFormValidation}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                style={{marginBottom: 35}}
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
                                    style={{marginBottom: 35}}
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
                            />
                            <InstrumentList
                                values={values}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                            />
                        </form>
                    )
                }}

            </Formik>
        </Grid>
    );
};

export default ProfileData;