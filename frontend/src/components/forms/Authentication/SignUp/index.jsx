import React, {useState} from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Checkbox,
} from "@material-ui/core";
import {useStyles} from "../style";
import IconPassword from "../../../../assets/icons/auth/password";
import {Controller, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {onSubmit} from "../../../../helpers/api";
import {eventToggle, handleCheckboxStatus} from "../../../../helpers/utils";
import BandRegistration from "../../../modals/BandRegistration";
import ErrorFieldText from "../../../common/ErrorFieldText";
import InputMask from 'react-input-mask';
import RegionList from "../../../common/RegionList";
import InstrumentList from "../../../common/InstrumentList";
import {sendSignUpFormData} from "../../../../store/thunks/thunks";


const SignUp = (props) => {

    const {} = props
    const classes = useStyles()
    const dispatch = useDispatch()

    const [passwordShown, setPasswordShown] = useState(false);
    const [checked, setChecked] = useState(false);
    const [confirm, setConfirm] = useState(checked);

    const {watch, handleSubmit, control, formState: { isSubmitting, isDirty, isValid }} = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
    });

    const onSubmit = data => dispatch(sendSignUpFormData(data));
    // const password = watch("password");
    // const confirmationPassword = watch("confirmationPassword");

    return (
        <form
            className={classes.signUpWrapper}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
            <Typography variant={'h4'}>Регистрация</Typography>
            <Box className={classes.inputsWrapper}>
                <Box className={classes.inputWrapper}>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error} }) => (
                            <TextField
                                placeholder="Введите имя"
                                label="Имя"
                                variant='outlined'
                                color='primary'
                                value={value}
                                onChange={onChange}
                                fullWidth
                                error={!!error}
                                helperText={error ? <ErrorFieldText errorText={error.message} /> : null}
                                required
                            />
                        )}
                        rules={{required: 'Введите имя'}}
                    />
                </Box>
                <Box className={classes.inputWrapper}>
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <InputMask
                                mask="(999) 999-9999"
                                value={value}
                                onChange={onChange}
                            >
                                <TextField
                                    placeholder="Телефон"
                                    label="Телефон"
                                    variant='outlined'
                                    color='primary'
                                    value={value}
                                    onChange={onChange}
                                    fullWidth
                                    error={!!error}
                                    helperText={error ? <ErrorFieldText errorText={error.message} /> : null}
                                    required
                                />
                             </InputMask>
                        )}
                        rules={{
                            required: 'Заполните поле телефон',
                            minLength: 11,
                            pattern: {
                                value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                                message: 'Введите правильный формат телефона',
                            },
                        }}
                    />
                </Box>
                <Box className={classes.inputWrapper}>
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
                                helperText={error ? <ErrorFieldText errorText={error.message} /> : null}
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
                <Box className={classes.fieldsWrapper}>
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
                                    helperText={error ? <ErrorFieldText errorText={error.message} /> : null}
                                    type={passwordShown ? "text" : "password"}
                                    required
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
                                    helperText={error ? <ErrorFieldText errorText={error.message} /> : null}
                                    type="password"
                                    required
                                    fullWidth
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
                </Box>
                <Box className={classes.fieldsWrapper}>
                    <RegionList control={control} />
                    <InstrumentList control={control} />
                </Box>
            </Box>
            <Box className={classes.inputWrapper}>
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
                <Typography>+ Добавить группу</Typography>
            </Box>
            <Button
                type='submit'
                style={{border: '1px solid white'}}
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