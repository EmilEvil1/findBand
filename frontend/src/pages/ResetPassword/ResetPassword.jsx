import React, {useState} from 'react';
import {Box, Button, Container, TextField, Typography} from "@material-ui/core";
import {Formik, Form} from "formik";
import {signUpValidation} from "../../helpers/validation";
import {eventToggle} from "../../helpers/utils";
import IconPassword from "../../assets/icons/auth/password";
import {useStyles} from "../../components/forms/Authentication/style";

const ResetPassword = () => {

    const onSubmit = data => console.log(data)
    const classes = useStyles()
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

    return (
        <Box
            className={classes.contentDark}
        >
        <Container>
            <Typography>Восстановление пароля</Typography>
            <Formik
                initialValues={{
                    password: '',
                    confirmationPassword: '',
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
                        <Form>
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
                            <Button
                                className={classes.signUpBtn}
                                color='primary'
                                onClick={handleSubmit}
                            >
                                Сохранить пароль
                            </Button>
                        </Form>
                    )
                }}
            </Formik>
        </Container>
        </Box>
    );
};

export default ResetPassword;