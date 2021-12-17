import React, {useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import {Box, Button, Grid, TextField, Typography} from "@material-ui/core";
import {useStyles} from "../style";
import AuthServices from "./AuthServices";
import IconPassword from "../../../../assets/icons/auth/password";
import {eventToggle, openModal} from "../../../../helpers/utils";
import {onSubmit} from "../../../../helpers/api";
import ForgetPassword from "../../../modals/ForgetPassword";
import ErrorFieldText from "../../../common/ErrorFieldText";
import {signInForm} from "../../../../store/thunks/thunks";

const SignIn = (props) => {

    const {} = props
    const classes = useStyles()
    const [passwordShown, setPasswordShown] = useState(false);
    const [open, setOpen] = useState(false);

    const {handleSubmit, control} = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
    });

    return (
        <Grid className={classes.formWrapper}>
            <form
                className={classes.formControl}
                noValidate
                onSubmit={handleSubmit(signInForm)}
            >
                <Typography variant="h4">Вход</Typography>
                <AuthServices />
                <Typography component={'span'} style={{margin: '30px 0'}}>или</Typography>
                <Box style={{width: '100%'}}>
                    <Box style={{width: '100%'}}>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    placeholder="Email или телефон"
                                    label="Email или телефон"
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
                    </Box>
                    <Box className={classes.passwordField}>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    placeholder="Введите пароль"
                                    label="Введите пароль"
                                    variant='outlined'
                                    color='primary'
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? <ErrorFieldText errorText={error.message} /> : null}
                                    type={passwordShown ? "text" : "password"}
                                    fullWidth
                                />
                            )}
                            rules={{
                                required: 'Введите пароль',
                                minLength: {
                                    value: 6,
                                    message: 'Пароль должен быть больше 6 символов',
                                },
                            }}
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
                    type='submit'
                >
                    Войти
                </Button>
            </form>
            {open && (<ForgetPassword open={open} close={setOpen} />)}
        </Grid>
    );
};

export default SignIn;