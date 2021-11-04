import React, {useState} from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    MenuItem, Select, InputLabel, Checkbox,
} from "@material-ui/core";
import {useStyles} from "../style";
import IconPassword from "../../../../assets/icons/auth/password";
import {Controller, useForm} from "react-hook-form";
import {onSubmit} from "../../../../helpers/api";
import {eventToggle, handleCheckboxStatus} from "../../../../helpers/utils";
import FormControl from "@material-ui/core/FormControl";
import BandRegistration from "../../../modals/BandRegistration";

const SignUp = (props) => {

    const {} = props
    const classes = useStyles()

    const [passwordShown, setPasswordShown] = useState(false);
    const [instrument, setInstrument] = useState('');
    const [checked, setChecked] = useState(false);
    const [confirm, setConfirm] = useState(checked);

    const {handleSubmit, control} = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
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
                <Box>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                placeholder="Введите имя"
                                label="Имя"
                                variant='outlined'
                                color='primary'
                                value={value}
                                onChange={onChange}
                                fullWidth
                                error={!!error}
                                helperText={error ? error.message : null}
                                required

                            />
                        )}
                        rules={{
                            required: 'Введите имя'
                        }}
                    />
                </Box>
                <Box>
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            // <InputMask
                            //     mask="+999999999999"
                            //     value={value}
                            //     onChange={onChange}
                            // >
                                <TextField
                                    placeholder="Телефон"
                                    label="Телефон"
                                    variant='outlined'
                                    color='primary'
                                    value={value}
                                    onChange={onChange}
                                    fullWidth
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    required
                                />
                            // </InputMask>
                        )}
                        rules={{
                            required: 'Заполните поле телефон',
                            pattern: {
                                value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                                message: 'Введите правильный формат телефона',
                            },
                        }}
                    />
                </Box>
                <Box>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                placeholder="Введите email"
                                label="Email"
                                variant='outlined'
                                color='primary'
                                value={value}
                                onChange={onChange}
                                fullWidth
                                error={!!error}
                                helperText={error ? error.message : null}
                                required
                            />
                        )}
                        rules={{
                            required: 'Заполните почту',
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
                                label="Пароль"
                                variant='outlined'
                                color='primary'
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                type={passwordShown ? "text" : "password"}
                                required
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
                <Box className={classes.passwordField}>
                    <Controller
                        name="confirmationPassword"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                placeholder="Потвердите пароль"
                                label="Подтверждение"
                                variant='outlined'
                                color='primary'
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                type="password"
                                required
                            />
                        )}
                        rules={{
                            required: 'Потвердите пароль',
                            minLength: {
                                value: 6,
                                message: 'Пароль должен быть больше 6 символов',
                            },
                        }}
                    />
                </Box>
                <Box>
                    <Controller
                        name='region'
                        control={control}
                        defaultValue={''}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <FormControl fullWidth style={{display: "flex", alignItems: "center"}}>
                                <InputLabel style={{color: "white"}} id="title">
                                    {!value && <Typography style={{color: "white"}}>Регион</Typography>}
                                </InputLabel>
                                <TextField
                                    labelId="title"
                                    value={value}
                                    select
                                    onChange={onChange}
                                    variant='outlined'
                                    color='primary'
                                    fullWidth
                                    required
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    rules={{
                                        required: 'Выберите регион'
                                    }}
                                >
                                    <MenuItem
                                        className={classes.selectField}
                                        value={'Vladimir'}
                                    >
                                        Владимир
                                    </MenuItem>
                                </TextField>
                            </FormControl>
                        )}
                    />
                </Box>
                <Box>
                    <Controller
                        name='select'
                        control={control}
                        defaultValue={''}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            // <FormControl fullWidth style={{display: "flex", alignItems: "center"}}>
                            <Box>
                                <InputLabel id="title">
                                    {!value && <Typography>Иструмент</Typography>}
                                </InputLabel>
                                <TextField
                                    labelId="title"
                                    select
                                    value={value}
                                    onChange={onChange}
                                    variant='outlined'
                                    color='primary'
                                    fullWidth
                                    required
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    rules={{
                                        required: 'Выберите',
                                    }}
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
                                </TextField>
                            </Box>
                            // </FormControl>
                        )}
                    />
                </Box>
            </Box>
            <Box>
                <Controller
                    name="bandCreate"
                    control={control}
                    defaultValue={checked}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <Checkbox
                            checked={checked}
                            onChange={(event) => {
                                handleCheckboxStatus(event, setChecked)
                                setConfirm(event.target.checked)
                            }}
                        />
                    )}
                />
                <Typography>Добавить музыкальную группу</Typography>
            </Box>
            <Button
                type='submit'
                className={classes.signUpBtn}
                color='primary'
            >
                Зарегистрироваться
            </Button>
            {confirm && (
                <BandRegistration
                    open={confirm}
                    close={setConfirm}
                    checked={setChecked}
                    control={control}
                />
            )}
        </form>
    );
};

export default SignUp;