import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// sign in
export const signInValidation = yup.object({
    email: yup
        .string('Заполните поле')
        .email('Введите корректную почту')
        .required('Заполните поле'),
    password: yup
        .string('Заполните поле')
        .min(6, 'Минимум 6 символов')
        .required('Заполните поле'),
});

export const forgetPassword = yup.object({
    emailAddress: yup
        .string('Заполните поле')
        .email('Введите корректную почту')
        .required('Заполните поле'),
});

// sign up

export const signUpValidation = yup.object({
    username: yup
        .string('Заполните поле')
        .required('Заполните поле'),
    phone: yup
        .string('Заполните поле')
        .required('Заполните поле'),
    email: yup
        .string('Заполните поле')
        .email('Введите корректную почту')
        .required('Заполните поле'),
    password: yup
        .string('Заполните поле')
        .min(6, 'Минимум 6 символов')
        .required('Заполните поле'),
    confirmationPassword: yup
        .string('Заполните поле')
        .min(6, 'Минимум 6 символов')
        .oneOf([yup.ref('password'), null], 'Не совпадает')
        .required('Заполните поле'),
    regionId: yup
        .string('Выберите регион')
        .required('Выберите регион'),
    instrumentIds: yup.array()
        // .string('Выберите инструмент')
        .required('Выберите инструмент'),
    isBandOwner: yup
        .boolean().default(true)
});

// MusicianProfile

export const profileFormValidation = yup.object({
    name: yup
        .string('Заполните поле')
        .required('Заполните поле'),
    phone: yup
        .string('Заполните поле')
        // .matches(phoneRegExp, 'Phone number is not valid')
        .required('Заполните поле'),
    email: yup
        .string('Заполните поле')
        .email('Введите корректную почту')
        .required('Заполните поле'),
    region: yup
        .string('Выберите регион')
        .required('Выберите регион'),
    instrumentsId: yup
        .string('Выберите инструмент')
        .required('Выберите инструмент'),
});


// Home

export const searchMusician = yup.object({
    regionId: yup
        .string('Выберите регион')
        .required('Выберите регион'),
    instrumentsIds: yup
        .string('Выберите инструмент')
        .required('Выберите инструмент'),
});