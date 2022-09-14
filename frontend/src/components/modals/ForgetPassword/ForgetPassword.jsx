import React, {useState} from 'react'
import {Form, Formik} from "formik"
import {
    Box,
    Button,
    Dialog,
    TextField,
    Typography
} from "@material-ui/core"
import {useStyles} from "./style"
import {closeModal} from "../../../helpers/utils"
import {forgetPassword} from "../../../helpers/validation"
import {useResetPassword} from "../../../dto/hooks/Auth"

const ForgetPassword = (props) => {

    const {open, close} = props
    const classes = useStyles()
    const [errorText, setErrorText] = useState('')
    const resetPassword = useResetPassword()
    const isLoading = resetPassword.isLoading

    const onAuth = (data) =>
        resetPassword.mutateAsync(data)
            .then((response) => {
                response.data && close(false)
            }).catch(err => setErrorText(err.response.data.errors.errorDescription))

    const onSubmit = email => onAuth(email)

    return (
        <Dialog
            open={open}
            onClose={() => closeModal(close)}
        >
            <Box className={classes.wrapper}>
                <Typography className={classes.text}>Забыли пароль?</Typography>
                <Formik
                    initialValues={{emailAddress: ''}}
                    onSubmit={values => onSubmit(values)}
                    validationSchema={forgetPassword}
                    enableReinitialize
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
                            <Form onSubmit={handleSubmit} className={classes.form}>
                                <Box className={classes.inputsWrapper}>
                                    <TextField
                                        name='emailAddress'
                                        label='Email'
                                        placeholder='Введите email'
                                        value={values.emailAddress}
                                        onChange={(event) => {
                                            setErrorText('')
                                            handleChange(event)
                                        }}
                                        onBlur={handleBlur}
                                        error={touched.emailAddress && (Boolean(errors.emailAddress) || Boolean(errorText))}
                                        helperText={touched.emailAddress && (errors.emailAddress || errorText)}
                                        variant='outlined'
                                        fullWidth
                                    />
                                </Box>
                                <Typography className={classes.errorMessage}>{errorText && errorText}</Typography>
                                <Button
                                    className={classes.btn}
                                    color='primary'
                                    disabled={isLoading}
                                    onClick={() => {
                                        setErrorText('')
                                        handleSubmit()
                                    }}
                                >
                                    Восстановить пароль
                                </Button>
                            </Form>
                        )
                    }}
                </Formik>
            </Box>
        </Dialog>
    )
};

export default ForgetPassword;