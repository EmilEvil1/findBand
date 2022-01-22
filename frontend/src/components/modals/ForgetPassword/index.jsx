import React from 'react';
import {useDispatch} from "react-redux";
import { Formik } from "formik";
import {
    Box,
    Button,
    Dialog,
    TextField,
    Typography
} from "@material-ui/core";
import {useStyles} from "./style";
import {closeModal} from "../../../helpers/utils";
import {onSubmit} from "../../../helpers/api";
import {forgetPassword} from "../../../helpers/validation";

const ForgetPassword = (props) => {

    const {open, close} = props
    const dispatch = useDispatch()
    const classes = useStyles()

    return (
        <Dialog
            open={open}
            onClose={() => closeModal(close)}
        >
            <Box className={classes.wrapper}>
                <Typography className={classes.text}>Забыли пароль?</Typography>
                <Formik
                    initialValues={{resetEmail: ''}}
                    onSubmit={(values, { setSubmitting }) => {
                        onSubmit(values)
                        setSubmitting(false)
                    }}
                    validationSchema={forgetPassword}
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
                                className={classes.form}
                                onSubmit={handleSubmit}
                            >
                                <TextField
                                    name='resetEmail'
                                    label='Логин'
                                    placeholder='Email'
                                    value={values.resetEmail}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.resetEmail && Boolean(errors.resetEmail)}
                                    helperText={touched.resetEmail && errors.resetEmail}
                                    variant='outlined'
                                    fullWidth
                                />
                                <Button
                                    className={classes.btn}
                                    color='primary'
                                    onClick={handleSubmit}
                                >
                                    <Typography className={classes.btnText}>восстановить пароль</Typography>
                                </Button>
                            </form>
                        )
                    }}
                </Formik>
            </Box>
        </Dialog>
    );

};

export default ForgetPassword;