import React, {useState} from 'react';
import {useCookies} from "react-cookie";
import {Formik, Form} from "formik";
import {Box, Button, TextField, Typography} from "@material-ui/core";
import {useStyles} from "../style";
import RegionList from "../../../common/RegionList/RegionList";
import InstrumentList from "../../../common/InstrumentList/InstrumentList";
import {eventToggle} from "../../../../helpers/utils";
import {signUpValidation} from "../../../../helpers/validation";
import IconPassword from "../../../../assets/icons/auth/password";
import {useSignUp} from "../../../../dto/hooks/Auth";

const SignUp = () => {

    const classes = useStyles()
    const [,setToken] = useCookies(['access_token'])
    const [errorText, setErrorText] = useState('')
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false)
    const signUp = useSignUp()

    const onAuth = (data) =>
        signUp.mutateAsync(data)
            .then((response) => {
                if (response.data.token) setToken('access_token', response.data.token)
            }).catch(err => {setErrorText(err.response.data.errors.errorDescription)})

    const onSubmit = data => onAuth(data)

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
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                setErrorText('')
                                handleSubmit(e)
                            }
                        }}
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
                                onChange={(event) => {
                                    setErrorText('')
                                    handleChange(event)
                                }}
                                onBlur={handleBlur}
                                error={touched.email && Boolean(errors.email || errorText)}
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
                                    // errorText={errorText}
                                    setFieldValue={setFieldValue}
                                />
                                <InstrumentList
                                    values={values}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}
                                    // errorText={errorText}
                                    setFieldValue={setFieldValue}
                                />
                            </Box>
                            <Typography className={classes.errorMessage}>{errorText && errorText}</Typography>
                        </Box>
                        <Button
                            className={classes.signUpBtn}
                            color='primary'
                            disabled={!!errorText}
                            onClick={(event) => {
                                setErrorText('')
                                handleSubmit(event)
                            }}
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