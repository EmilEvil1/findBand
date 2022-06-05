import React, {useEffect, useState} from 'react';
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {Formik, Form} from "formik";
import {Box, Button, TextField, Typography} from "@material-ui/core";
import {useStyles} from "../style";
import RegionList from "../../../common/RegionList/RegionList";
import InstrumentList from "../../../common/InstrumentList/InstrumentList";
import {checkTokenValidate, eventToggle} from "../../../../helpers/utils";
import {sendSignUpFormData} from "../../../../store/thunks/common/auth";
import {signUpValidation} from "../../../../helpers/validation";
import IconPassword from "../../../../assets/icons/auth/password";

const SignUp = () => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const [token, setToken] = useCookies(['access_token'])
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

    const onSubmit = data => dispatch(sendSignUpFormData(data, setToken))

    useEffect(() => {
        if (!checkTokenValidate(token.access_token)) history.push('/')
    }, [token.access_token])

    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
                confirmationPassword: '',
                regionId: '',
                instrumentId: '',
            }}
            onSubmit={values => onSubmit(values)}
            validationSchema={signUpValidation}
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
                    <Form
                        className={classes.signUpWrapper}
                        onSubmit={handleSubmit}
                    >
                        <Typography
                            variant='h4'
                            className={classes.marginBlock}
                        >
                            Регистрация
                        </Typography>
                        <Box className={classes.inputsWrapper}>
                            <TextField
                                className={classes.marginBlock}
                                name='username'
                                label='Имя'
                                placeholder='Укажите имя'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.username && Boolean(errors.username)}
                                helperText={touched.username && errors.username}
                                variant='outlined'
                                fullWidth
                            />
                            {/*<InputMask*/}
                            {/*    mask="+7 (999) 999-9999"*/}
                            {/*    value={values.phone}*/}
                            {/*    onChange={handleChange}*/}
                            {/*    onBlur={handleBlur}*/}
                            {/*    error={touched.phone && Boolean(errors.phone)}*/}
                            {/*    helperText={touched.phone && errors.phone}*/}
                            {/*>*/}
                            {/*    <TextField*/}
                            {/*        className={classes.marginBlock}*/}
                            {/*        name='phone'*/}
                            {/*        label='Телефон'*/}
                            {/*        placeholder='Укажите телефон'*/}
                            {/*        value={values.phone}*/}
                            {/*        onChange={handleChange}*/}
                            {/*        onBlur={handleBlur}*/}
                            {/*        error={touched.phone && Boolean(errors.phone)}*/}
                            {/*        helperText={touched.phone && errors.phone}*/}
                            {/*        variant='outlined'*/}
                            {/*        fullWidth*/}
                            {/*    />*/}
                            {/*</InputMask>*/}
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
                                        label='Повторите'
                                        placeholder='Повторите'
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
                            </Box>
                        </Box>
                        <Button
                            className={classes.signUpBtn}
                            color='primary'
                            onClick={handleSubmit}
                        >
                            Зарегистрироваться
                        </Button>
                    </Form>
                )
            }}
        </Formik>
    );
};

export default SignUp;