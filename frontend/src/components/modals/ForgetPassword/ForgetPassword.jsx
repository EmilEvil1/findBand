import React from 'react';
import {Form, Formik} from "formik";
import {
    Box,
    Button,
    Dialog,
    TextField,
    Typography
} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useStyles} from "./style";
import {closeModal} from "../../../helpers/utils";
import {forgetPassword} from "../../../helpers/validation";
import {sendPassword} from "../../../store/thunks/common/auth";

const ForgetPassword = (props) => {

    const {open, close} = props
    const classes = useStyles()
    const dispatch = useDispatch()

    const onSubmit = email => dispatch(sendPassword(email, closeModal, close))

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
                            <Form
                                className={classes.form}
                                onSubmit={handleSubmit}
                            >
                                <TextField
                                    name='emailAddress'
                                    label='Email'
                                    placeholder='Введите email'
                                    value={values.emailAddress}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.emailAddress && Boolean(errors.emailAddress)}
                                    helperText={touched.emailAddress && errors.emailAddress}
                                    variant='outlined'
                                    fullWidth
                                />
                                <Button
                                    className={classes.btn}
                                    color='primary'
                                    onClick={() => handleSubmit()}
                                >
                                    Восстановить пароль
                                </Button>
                            </Form>
                        )
                    }}
                </Formik>
            </Box>
        </Dialog>
    );

};

export default ForgetPassword;