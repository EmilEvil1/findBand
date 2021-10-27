import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import {Box, Button, Grid, TextField, Typography} from "@material-ui/core";
import {useStyles} from "../style";
import AuthServices from "./AuthServices";
import IconPassword from "../../../../assets/icons/password";
import {eventToggle} from "../../../../helpers/utils";
import {onSubmit} from "../../../../helpers/api";

const SignIn = (props) => {

    const {} = props
    const classes = useStyles()
    const [passwordShown, setPasswordShown] = useState(false);

    const {handleSubmit, control} = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {
            login: '',
            password: '',
        },
    });

    return (
        <Grid className={classes.formWrapper}>
            <form
                className={classes.formControl}
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography component={'span'} variant="h4">Вход</Typography>
                <AuthServices />
                <Typography component={'span'} style={{margin: '30px 0'}}>или</Typography>
                <Box>
                <Box>
                    <Controller
                        name="login"
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
                                helperText={error ? error.message : null}
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
                                    helperText={error ? error.message : null}
                                    type={passwordShown ? "text" : "password"}
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