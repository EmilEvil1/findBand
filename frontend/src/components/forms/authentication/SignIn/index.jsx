import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import {Box, Button, Grid, TextField, Typography} from "@material-ui/core";
import {useStyles} from "../style";
import AuthServices from "./AuthServices";
import IconPassword from "../../../../assets/icons/password";
import {eventToggle} from "../../../../helpers/utils";

const SignIn = (props) => {

    const {} = props
    const classes = useStyles()
    const [passwordShown, setPasswordShown] = useState(false);

    const {register, handleSubmit, control, errors} = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
            email: '',
            password: ''
        },
    });

    const onSubmit = data => alert(JSON.stringify(data));


    return (
        <Grid className={classes.formWrapper}>
            <form
                className={classes.formControl}
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography component={'span'} variant="h4">Вход</Typography>
                <AuthServices />
                <Typography
                    component={'span'}
                    style={{margin: '30px 0'}}>
                    или
                </Typography>
                <TextField
                    type="email"
                    placeholder="Email или телефон"
                    variant="outlined"
                    label='Логин'
                    color='primary'
                    name='email'
                    fullWidth
                    inputRef={register({
                        required: 'Заполните поле',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Введите валидную почту',
                        },
                    })}
                    autoComplete='email'
                    error={!!errors.email}
                    helperText={errors.email &&
                        (<Typography
                            component={'span'}
                            className={classes.errorText}
                        >
                            {errors.email.message}
                        </Typography>)
                    }
                />
                <Box className={classes.passwordField}>
                    <TextField
                        className={classes.field}
                        type={passwordShown ? "text" : "password"}
                        placeholder="Введите пароль"
                        variant="outlined"
                        label={'Пароль'}
                        color={'primary'}
                        name='password'
                        fullWidth
                        inputRef={register({
                            required: 'Заполните поле.',
                            minLength: {
                                value: 6,
                                message: 'Пароль должен быть больше 6 символов',
                            },
                        })}
                        error={!!errors.password}
                        helperText={errors.password &&
                            (<Typography
                                component={'span'}
                                className={classes.errorText}
                            >
                                {errors.password.message}
                            </Typography>)
                        }
                    />
                    <Box
                        className={classes.passwordIcon}
                        onClick={() => eventToggle(passwordShown, setPasswordShown)}
                    >
                        <IconPassword />
                    </Box>
                </Box>
                <Link
                    className={classes.forgotPasswordLink}
                    to="#"
                    underline="hover"
                >
                    Забыли пароль?
                </Link>
                <Button
                    color={'primary'}
                    type="submit"
                >
                    Войти
                </Button>
            </form>
        </Grid>
    );
};

export default SignIn;