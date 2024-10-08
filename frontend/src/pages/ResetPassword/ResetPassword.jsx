import React, {useEffect, useState} from 'react'
import {useHistory} from "react-router-dom"
import {Formik, Form} from "formik"
import {Box, Button, Container, TextField, Typography} from "@material-ui/core"
import {newPassword} from "../../helpers/validation"
import {eventToggle} from "../../helpers/utils"
import IconPassword from "../../assets/icons/auth/password"
import {useStyles} from "../../components/forms/Authentication/style"
import {useCreateNewPassword} from "../../dto/hooks/Auth"

const ResetPassword = () => {

    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const query = new URLSearchParams(window.location.search);
    const resetPasswordId = query.get('resetPasswordId')
    const classes = useStyles()
    const history = useHistory()
    const sendNewPassword = useCreateNewPassword()

    useEffect(() => !resetPasswordId && history.push('/auth'), [resetPasswordId, history])

    const onSubmit = data => {
        sendNewPassword.mutateAsync(data).then((response) => response.success && history.push(`/auth`))
    }

    return (

        <Box className={classes.contentDark}>
            <Container>
                <Box className={classes.formContainer}>
                    <Typography style={{marginBottom: 35}} variant='h4'>Восстановление пароля</Typography>
                    <Formik
                        initialValues={{
                            newPassword: '',
                            confirmationNewPassword: '',
                            resetPasswordId: !!resetPasswordId && resetPasswordId
                        }}
                        onSubmit={values => onSubmit(values)}
                        validationSchema={newPassword}
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
                            } = props
                            return (
                                <Form onSubmit={handleSubmit}>
                                    <Box className={classes.createNewPasswordFields}>
                                        <Box className={classes.inputBox}>
                                            <TextField
                                                name='newPassword'
                                                label='Пароль'
                                                placeholder='Укажите пароль'
                                                value={values.newPassword}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.newPassword && Boolean(errors.newPassword)}
                                                helperText={touched.newPassword && errors.newPassword}
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
                                        <Box className={classes.inputBox}>
                                            <TextField
                                                name='confirmationNewPassword'
                                                label='Подтверждение'
                                                placeholder='Потвердите пароль'
                                                variant='outlined'
                                                value={values.confirmationNewPassword}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.confirmationNewPassword && Boolean(errors.confirmationNewPassword)}
                                                helperText={touched.confirmationNewPassword && errors.confirmationNewPassword}
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
                                        className={classes.savePassword}
                                        color='primary'
                                        onClick={handleSubmit}
                                    >
                                        Сохранить пароль
                                    </Button>
                                </Form>
                            )
                        }}
                    </Formik>
                </Box>
            </Container>
        </Box>
    );
};

export default ResetPassword;