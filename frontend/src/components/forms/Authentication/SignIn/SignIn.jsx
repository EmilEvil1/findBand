import React, {useState} from 'react'
import {useCookies} from "react-cookie"
import {Form, Formik} from "formik"
import {Box, Button, Grid, TextField, Typography} from "@material-ui/core"
import IconPassword from "../../../../assets/icons/auth/password"
import ForgetPassword from "../../../modals/ForgetPassword/ForgetPassword"
import TelegramAccount from "../../../common/TelegramAccount/TelegramAccount"
import {useSignIn} from "../../../../dto/hooks/Auth"
import {signInValidation} from "../../../../helpers/validation"
import {eventToggle, openModal} from "../../../../helpers/utils"
import {useStyles} from "../style"

const SignIn = () => {

    const classes = useStyles()
    const [open, setOpen] = useState(false);
    const [,setToken] = useCookies(['access_token'])
    const [passwordShown, setPasswordShown] = useState(false)
    const [errorText, setErrorText] = useState('')
    const signIn = useSignIn()
    const isLoading = signIn.isLoading

    const onAuth = (data) =>
        signIn.mutateAsync(data)
            .then((response) => {
                if (response.token) setToken('access_token', response.token)
            })
            .catch(err => setErrorText(err.response.data.errors.errorDescription))

    const onSubmit = data => onAuth(data)

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
                    } = props
                    return (
                        <Form
                            className={classes.signInForm}
                            onSubmit={handleSubmit}
                        >
                            <Typography style={{marginBottom: 50}} variant="h4">Вход</Typography>
                            <TelegramAccount />
                            <Box className={classes.inputsWrapper}>
                                <TextField
                                    style={{marginBottom: 35}}
                                    name='email'
                                    label='Логин'
                                    placeholder='Email или телефон'
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
                                <Box style={{position: "relative"}}>
                                    <TextField
                                        name='password'
                                        label='Пароль'
                                        placeholder='Введите пароль'
                                        variant='outlined'
                                        value={values.password}
                                        onChange={(event) => {
                                            setErrorText('')
                                            handleChange(event)
                                        }}
                                        onBlur={handleBlur}
                                        error={touched.password && Boolean(errors.password || errorText)}
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
                                <Typography className={classes.errorMessage}>{errorText && errorText}</Typography>
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
                                disabled={isLoading}
                                onClick={(event) => {
                                    setErrorText('')
                                    handleSubmit(event)
                                }}
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