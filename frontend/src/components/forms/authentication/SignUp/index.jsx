import React, {useState} from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    MenuItem,
} from "@material-ui/core";
import {useStyles} from "../style";
import IconPassword from "../../../../assets/icons/password";
import {useForm} from "react-hook-form";
import {onSubmit} from "../../../../helpers/api";
// import {handleChangeMultiSelect} from "../../../../helpers/utils";
import ReactHookFormSelect from "../../../common/SelectField";

const SignUp = (props) => {

    const {} = props
    const classes = useStyles()

    const {register, handleSubmit, control, errors} = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
            firstName: '',
            email: '',
            instrument: '',
            password: '',
            confirmPassword: ''
        },
    });


    const names = [
        'Гитара',
        'Барабаны',
        'Бас-гитара',
        'Вокал',
        'Фортепиано',
        'Скрипка',
        'Саксофон',
        'Виолончель',
        'Флейта',
        'DJ-контроллер',
        'Арфа',
        'Синтезатор',
    ];

    return (
        <form
            className={classes.signUpWrapper}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
            <Typography variant={'h4'}>Регистрация</Typography>
            <Box className={classes.inputsWrapper}>
                <TextField
                    className={classes.field}
                    // name='firstName'
                    variant="outlined"
                    type="text"
                    label="Имя"
                    placeholder='Укажите имя'
                    fullWidth
                    required
                    {...register('firstName', {
                        required: 'Только русские буквы',
                        pattern: {
                            value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
                            message: 'Только русские буквы',
                        },
                    })}
                    // inputRef={register({
                    //     required: 'Только русские буквы',
                    //     pattern: {
                    //         value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
                    //         message: 'Только русские буквы',
                    //     },
                    // })}
                    // error={errors.firstName}
                    // helperText={!!errors.firstName && (<Typography className={classes.errorText} component={'span'}>Укажите имся</Typography>)}
                />
                <TextField
                    className={classes.field}
                    // name='email'
                    variant="outlined"
                    type="email"
                    label="Email"
                    placeholder='Введите Email'
                    fullWidth
                    required
                    // inputRef={register({
                    //     required: 'Заполните поле',
                    //     pattern: {
                    //         value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    //         message: 'Введите валидную почту',
                    //     },
                    // })}
                    {...register('email', {
                        required: 'Заполните поле' ,
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Введите валидную почту',
                        },
                    })}
                    // error={!!errors.email}
                    // helperText={errors.email &&
                    // (<Typography
                    //     component={'span'}
                    //     className={classes.errorText}
                    // >
                    //     {errors.email.message}
                    // </Typography>)
                    // }
                />

                <Box className={classes.passwordField}>
                    <TextField
                        className={classes.field}
                        name='password'
                        variant="outlined"
                        type="password"
                        label="Пароль"
                        placeholder='Веедите пароль'
                        helperText='Пароль должен содержать не менее 8 символов, включать буквы, цифры и специальные знаки'
                        fullWidth
                        required
                        // inputRef={register({required: 'required'})}
                        // error={!!errors.password || !!errors.confirmPassword}
                    />
                    <Box className={classes.passwordIcon + ' ' + classes.passwordFieldWithHelper}>
                        <IconPassword />
                    </Box>
                </Box>
                <Box>
                    <TextField
                        className={classes.field}
                        name='confirmPassword'
                        variant="outlined"
                        type="password"
                        label="Пароль"
                        placeholder='Подтвердите пароль'
                        fullWidth
                        required
                        // inputRef={register()}
                        // error={!!errors.password || !!errors.confirmPassword}
                    />
                </Box>
                <Box className={classes.field}>
                    <ReactHookFormSelect
                        style={{width: '100%', maxWidth: 360}}
                        name="instrument"
                        label="Основной инструмент"
                        control={control}
                        variant="outlined"
                        // error={!!errors.instrument}
                    >
                        {names.map((name, index) => (
                                <MenuItem
                                    className={classes.selectField}
                                    key={index}
                                    value={name}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                    </ReactHookFormSelect>
                </Box>
            </Box>
            <Button
                type='submit'
                className={classes.signUpBtn}
                color='primary'
            >
                Зарегистрироваться
            </Button>
        </form>
    );
};

export default SignUp;