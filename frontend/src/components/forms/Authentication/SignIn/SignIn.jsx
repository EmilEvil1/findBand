import React, {useEffect, useState} from 'react';
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {Form, Formik} from "formik";
import {Box, Button, Grid, TextField, Typography} from "@material-ui/core";
import {signInValidation} from "../../../../helpers/validation";
import {useStyles} from "../style";
import AuthServices from "./AuthServices/AuthServices";
import IconPassword from "../../../../assets/icons/auth/password";
import {checkTokenValidate, eventToggle, openModal} from "../../../../helpers/utils";
import ForgetPassword from "../../../modals/ForgetPassword/ForgetPassword";
import {sendSignInFormData} from "../../../../store/thunks/common/auth";

const SignIn = () => {

    const dispatch = useDispatch()
    const classes = useStyles()
    const history = useHistory()
    const [open, setOpen] = useState(false);
    const [token, setToken] = useCookies(['access_token'])
    const [passwordShown, setPasswordShown] = useState(false)

    const onSubmit = data => dispatch(sendSignInFormData(data, setToken))

    useEffect(() => {
        if (!checkTokenValidate(token.access_token)) history.push('/')
    }, [token.access_token, history])

    return (
        <Grid className={classes.formWrapper}>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(values) => onSubmit(values)}
                validationSchema={signInValidation}
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
                        <Form
                            className={classes.signInForm}
                            onSubmit={handleSubmit}
                        >
                            <Typography variant="h4">Вход</Typography>
                            <AuthServices/>
                            <Typography component='span' style={{margin: '30px 0'}}>или</Typography>
                            <Box className={classes.inputsWrapper}>
                                <TextField
                                    style={{marginBottom: 35}}
                                    name='email'
                                    label='Логин'
                                    placeholder='Email или телефон'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                    variant='outlined'
                                    fullWidth
                                />
                                <Box style={{position: "relative"}}>
                                    <TextField
                                        name='password'
                                        label='Пароль'
                                        placeholder='Введите пароль'
                                        variant='outlined'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                        type={passwordShown ? "text" : "password"}
                                        fullWidth
                                    />
                                    <Box
                                        className={classes.passwordIcon}
                                        onClick={() => eventToggle(passwordShown, setPasswordShown)}
                                    >
                                        <IconPassword />
                                    </Box>
                                </Box>
                            </Box>
                            <Typography
                                className={classes.forgotPasswordLink}
                                onClick={() => openModal(setOpen, open)}
                            >
                                Забыли пароль?
                            </Typography>
                            <Button
                                style={{border: '1px solid white', width: '70%'}}
                                color='primary'
                                onClick={handleSubmit}
                                className={classes.signInBtn}
                            >
                                Войти
                            </Button>
                        </Form>
                    )
                }}
            </Formik>
            {open && <ForgetPassword open={open} close={setOpen} />}
        </Grid>
    );
};

export default SignIn;