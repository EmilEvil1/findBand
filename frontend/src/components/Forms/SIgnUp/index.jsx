import React from 'react';
import {Box, Button, FormControl, TextField, Typography} from "@material-ui/core";

import {useStyles} from "../style";

const SignUp = (props) => {

    const {} = props
    const classes = useStyles()

    return (

        <FormControl className={classes.signUpWrapper}>
            <Typography>Регистрация</Typography>
            <Box className={classes.inputsWrapper}>
                <TextField
                    variant="outlined"
                    type="text"
                    label="Имя"
                    placeholder={'Укажите имя'}
                    fullWidth
                />
                <TextField
                    variant="outlined"
                    type="text"
                    label="Email"
                    placeholder={'Введите Email'}
                    fullWidth
                />
                <TextField
                    variant="outlined"
                    type="text"
                    label="Возраст"
                    placeholder={'Укажите возраст'}
                    fullWidth
                />
                <TextField
                    variant="outlined"
                    type="text"
                    label="Стаж"
                    placeholder={'Укажите стаж'}
                    fullWidth
                />
                <TextField
                    variant="outlined"
                    type="password"
                    label="Пароль"
                    placeholder={'Веедите пароль'}
                    helperText={'Пароль должен содержать не менее 8 символов, включать буквы, цифры и специальные знаки'}
                    fullWidth
                />
                <TextField
                    variant="outlined"
                    type="password"
                    label="Пароль"
                    placeholder={'Подтвердите пароль'}
                    fullWidth
                />

            </Box>
            <Button>зарегистрироваться</Button>
        </FormControl>
    );
};

export default SignUp;