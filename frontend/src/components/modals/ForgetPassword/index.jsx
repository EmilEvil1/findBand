import React from 'react';
import {useDispatch} from "react-redux";
import {
    Box,
    Button,
    Dialog,
    TextField,
    Typography
} from "@material-ui/core";
import {closeModal} from "../../../helpers/utils";
import {useStyles} from "./style";
import {Controller, useForm} from "react-hook-form";
import ErrorFieldText from "../../common/ErrorFieldText";
import {onSubmit} from "../../../helpers/api";


const ForgetPassword = (props) => {

    const {open, close} = props
    const dispatch = useDispatch()
    const classes = useStyles()

    const {watch, handleSubmit, control, formState: { isSubmitting, isDirty, isValid }} = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
    });

    return (
        <Dialog
            open={open}
            onClose={() => closeModal(close)}
        >
            <Box className={classes.wrapper}>
                <Typography className={classes.text}>Забыли пароль?</Typography>
                <form
                    className={classes.form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                placeholder="Email или телефон"
                                label="Email"
                                variant='outlined'
                                color='primary'
                                value={value}
                                onChange={onChange}
                                fullWidth
                                error={!!error}
                                helperText={error ? <ErrorFieldText errorText={error.message} />  : null}
                            />
                        )}
                        rules={{
                            required: 'Заполните поле',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Введите валидную почту',
                            },
                        }}
                    />
                    <Button
                        className={classes.btn}
                        color='primary'
                        type='submit'
                    >
                        <Typography className={classes.btnText}>восстановить пароль</Typography>
                    </Button>
                </form>
            </Box>
        </Dialog>

    );

};

export default ForgetPassword;