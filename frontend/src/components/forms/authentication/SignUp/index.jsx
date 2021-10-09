import React from 'react';
import {
    Box,
    Button,
    Select,
    TextField,
    Typography,
    MenuItem,
    OutlinedInput,
    InputLabel,
    FormControl, Input
} from "@material-ui/core";
import {useStyles} from "../style";
import IconPassword from "../../../../assets/icons/password";
import {useForm} from "react-hook-form";

const SignUp = (props) => {

    const {} = props
    const classes = useStyles()

    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const {register, handleSubmit, control, errors} = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
            firstName: '',
            email: '',
            instrument: '',
            // experience: '',
            password: '',
            confirmPassword: ''
        },
    });
    const onSubmit = data => alert(JSON.stringify(data));

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
                    name='firstName'
                    variant="outlined"
                    type="text"
                    label="Имя"
                    placeholder='Укажите имя'
                    fullWidth
                    required
                    inputRef={register({required: 'required'})}
                    error={!!errors.firstName}
                    helperText={!!errors.firstName && (<Typography className={classes.errorText} component={'span'}>Заполните поле</Typography>)}
                />
                <TextField
                    className={classes.field}
                    name='email'
                    variant="outlined"
                    type="email"
                    label="Email"
                    placeholder='Введите Email'
                    fullWidth
                    required
                    inputRef={register({
                        required: 'Заполните поле',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Введите валидную почту',
                        },
                    })}
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

                <Box className={classes.field}>
                    <Select
                        className={classes.select}
                        name='instrument'
                        variant="outlined"
                        multiple
                        input={<OutlinedInput label="Name" />}
                        inputRef={register()}
                        value={personName}
                        onChange={handleChange}
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
                    </Select>
                </Box>

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
                        inputRef={register({required: 'required'})}
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
                        inputRef={register()}
                    />
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