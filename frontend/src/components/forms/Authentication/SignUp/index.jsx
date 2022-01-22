import React, {useEffect, useState} from 'react';
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import { Formik } from "formik";
import {
    Box,
    Button,
    TextField,
    Typography,
} from "@material-ui/core";

import {useStyles} from "../style";
import RegionList from "../../../common/RegionList";
import InstrumentList from "../../../common/InstrumentList";
import BandRegistration from "../../../modals/BandRegistration";
import {checkTokenValidate, eventToggle} from "../../../../helpers/utils";
import {sendSignUpFormData} from "../../../../store/thunks/thunks";
import {signUpValidation} from "../../../../helpers/validation";
import InputMask from 'react-input-mask';
import IconPassword from "../../../../assets/icons/auth/password";

const SignUp = (props) => {

    const {} = props
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const [token, setToken] = useCookies(['access_token'])
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const [checked, setChecked] = useState(false);


    const onSubmit = data => dispatch(sendSignUpFormData(data, setToken))

    useEffect(() => {
        if (!checkTokenValidate(token.access_token)) history.push('/')
    }, [token.access_token])

    return (
        <Formik
            initialValues={{
                name: '',
                phone: '',
                email: '',
                password: '',
                confirmationPassword: '',
                region: '',
                instrument: '',
                bandName: ''
            }}
            onSubmit={(values, { setSubmitting }) => {
                onSubmit(values)
                setSubmitting(false)
            }}
            validationSchema={signUpValidation}
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
                    <form
                        className={classes.signUpWrapper}
                        onSubmit={handleSubmit}
                    >
                        <Typography
                            variant={'h4'}
                            style={{marginBottom: 35}}
                        >
                            Регистрация
                        </Typography>
                        <Box className={classes.inputsWrapper}>
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
                            <Box className={classes.inputWrapper}>
                                <Box style={{position: "relative"}}>
                                    <TextField
                                        name='password'
                                        label='Пароль'
                                        placeholder='Укажите пароль'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                        variant='outlined'
                                        fullWidth
                                        type={passwordShown ? "text" : "password"}
                                    />
                                    <Box
                                        className={classes.passwordIcon}
                                        onClick={() => eventToggle(passwordShown, setPasswordShown)}
                                    >
                                        <IconPassword />
                                    </Box>
                                </Box>
                                <Box style={{position: "relative"}}>
                                    <TextField
                                        style={{marginLeft: 10}}
                                        name='confirmationPassword'
                                        label='Подтверждение'
                                        placeholder='Потвердите пароль'
                                        variant='outlined'
                                        value={values.confirmationPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.confirmationPassword && Boolean(errors.confirmationPassword)}
                                        helperText={touched.confirmationPassword && errors.confirmationPassword}
                                        fullWidth
                                        type={confirmPasswordShown ? "text" : "password"}
                                    />
                                    <Box
                                        className={classes.passwordIcon}
                                        onClick={() => eventToggle(confirmPasswordShown, setConfirmPasswordShown)}
                                    >
                                        <IconPassword />
                                    </Box>
                                </Box>
                            </Box>
                            <Box className={classes.fieldsWrapper}>
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
                            </Box>
                        </Box>
                        <Button
                            color='primary'
                            style={{marginTop: 40}}
                            onClick={() => setChecked(true)}
                        >+
                            Добавить группу
                        </Button>
                        {checked && (
                            <BandRegistration
                                open={checked}
                                close={setChecked}
                                touched={touched}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                errors={errors}
                                values={values}
                            />
                        )}
                        <Button
                            className={classes.signUpBtn}
                            color='primary'
                            onClick={handleSubmit}
                        >
                            Зарегистрироваться
                        </Button>
                    </form>
                )
            }}
        </Formik>
    );
};

export default SignUp;