import * as yup from "yup";

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

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
    // phone: yup
    //     .string('Заполните поле')
    //     .required('Заполните поле'),
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
    instrumentId : yup
        .number('Некоректный иструмент')
        .required('Выберите инструмент')
});

// Create new password

export const newPassword = yup.object({
    newPassword: yup
        .string('Заполните поле')
        .min(6, 'Минимум 6 символов')
        .required('Заполните поле'),
    confirmationNewPassword: yup
        .string('Заполните поле')
        .min(6, 'Минимум 6 символов')
        .oneOf([yup.ref('newPassword'), null], 'Не совпадает')
        .required('Заполните поле'),
    resetPasswordId: yup
        .string('Заполните поле')
});

// MusicianProfile

export const profileFormValidation = yup.object({
    userName: yup
        .string('Заполните поле')
        .required('Заполните поле'),
    userDescription: yup
        .string('Заполните поле'),
    // phone: yup
    //     .string('Заполните поле')
    //     // .matches(phoneRegExp, 'Phone number is not valid')
    //     .required('Заполните поле'),
    emailAddress: yup
        .string('Заполните поле')
        .email('Введите корректную почту')
        .required('Заполните поле'),
    regionId: yup
        .string('Выберите регион')
        .required('Выберите регион'),
    instrumentId: yup
        .string('Выберите инструмент')
        .required('Выберите инструмент'),
    age: yup
        .number()
        // .default(0)
        .min(10, "You must be at least 18 years")
        .max(60, "You must be at most 60 years"),
    experienceAge: yup
        .number('must have')

});

// Home

export const searchMusician = yup.object({
    regionId: yup
        .string('Выберите регион')
        .required('Выберите регион'),
    instrumentId: yup
        .string('Выберите инструмент')
        .required('Выберите инструмент'),
});