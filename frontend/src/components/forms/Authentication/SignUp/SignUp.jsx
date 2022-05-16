import React, {useEffect, useState} from 'react';
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {Formik, Form} from "formik";
import InputMask from 'react-input-mask';
import {
    Box,
    Button,
    TextField,
    Typography,
} from "@material-ui/core";
import {useStyles} from "../style";
import RegionList from "../../../common/RegionList/RegionList";
import InstrumentList from "../../../common/InstrumentList/InstrumentList";
import BandRegistration from "../../../modals/BandRegistration/BandRegistration";
import {checkTokenValidate, eventToggle} from "../../../../helpers/utils";
import {sendSignUpFormData} from "../../../../store/thunks/thunks";
import {signUpValidation} from "../../../../helpers/validation";
import IconPassword from "../../../../assets/icons/auth/password";
import PlusIcon from "../../../../assets/icons/auth/plus";
import EditIcon from "../../../../assets/icons/auth/edit";

const SignUp = () => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const [token, setToken] = useCookies(['access_token'])
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const [checked, setChecked] = useState(false);
    const [isOwner, setIsOwner] = useState(false)


    const onSubmit = data => dispatch(sendSignUpFormData(data, setToken))

    useEffect(() => {
        if (!checkTokenValidate(token.access_token)) history.push('/')
    }, [token.access_token])


    return (
        <Formik
            initialValues={{
                username: '',
                phone: '',
                email: '',
                password: '',
                confirmationPassword: '',
                regionId: '',
                instrumentId: '',
                bandName: '',
                isBandOwner: isOwner
            }}
            onSubmit={values => onSubmit(values)}
            validationSchema={signUpValidation}
            enableReintialize
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue
                } = props;
                return (
                    <Form
                        className={classes.signUpWrapper}
                        onSubmit={handleSubmit}
                    >
                        <Typography
                            variant='h4'
                            style={{marginBottom: 35}}
                        >
                            Регистрация
                        </Typography>
                        <Box className={classes.inputsWrapper}>
                            <TextField
                                style={{marginBottom: 35}}
                                name='username'
                                label='Имя'
                                placeholder='Укажите имя'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.username && Boolean(errors.username)}
                                helperText={touched.username && errors.username}
                                variant='outlined'
                                fullWidth
                            />
                            <InputMask
                                mask="+7 (999) 999-9999"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.phone && Boolean(errors.phone)}
                                helperText={touched.phone && errors.phone}
                            >
                                <TextField
                                    style={{marginBottom: 35}}
                                    name='phone'
                                    label='Телефон'
                                    placeholder='Укажите телефон'
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.phone && Boolean(errors.phone)}
                                    helperText={touched.phone && errors.phone}
                                    variant='outlined'
                                    fullWidth
                                />
                            </InputMask>
                            <TextField
                                name='email'
                                label='Email'
                                placeholder='Укажите Email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                                variant='outlined'
                                fullWidth
                            />
                            <Box className={classes.inputWrapper}>
                                <Box style={{position: "relative"}}>
                                    <TextField
                                        name='password'
                                        label='Пароль'
                                        placeholder='Укажите пароль'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                        variant='outlined'
                                        fullWidth
                                        type={passwordShown ? "text" : "password"}
                                    />
                                    <Box
                                        className={classes.passwordIcon}
                                        onClick={() => eventToggle(passwordShown, setPasswordShown)}
                                    >
                                        <IconPassword />
                                    </Box>
                                </Box>
                                <Box style={{position: "relative"}}>
                                    <TextField
                                        style={{marginLeft: 10}}
                                        name='confirmationPassword'
                                        label='Подтверждение'
                                        placeholder='Потвердите пароль'
                                        variant='outlined'
                                        value={values.confirmationPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.confirmationPassword && Boolean(errors.confirmationPassword)}
                                        helperText={touched.confirmationPassword && errors.confirmationPassword}
                                        fullWidth
                                        type={confirmPasswordShown ? "text" : "password"}
                                    />
                                    <Box
                                        className={classes.passwordIcon}
                                        onClick={() => eventToggle(confirmPasswordShown, setConfirmPasswordShown)}
                                    >
                                        <IconPassword />
                                    </Box>
                                </Box>
                            </Box>
                            <Box className={classes.fieldsWrapper}>
                                <RegionList
                                    values={values}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}
                                    setFieldValue={setFieldValue}
                                />
                                <InstrumentList
                                    values={values}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    touched={touched}
                                    errors={errors}
                                    setFieldValue={setFieldValue}
                                />
                            </Box>
                        </Box>
                        <Button
                            color='primary'
                            onClick={() => setChecked(true)}
                            className={classes.createBandButton}
                        >
                            {values.bandName ? (
                                <Box className={classes.addBandWrapper}>
                                    <EditIcon />
                                    <Typography style={{color: '#0F5D62'}}>Изменить группу</Typography>
                                </Box>
                                ) : (
                                <Box className={classes.addBandWrapper}>
                                    <PlusIcon />
                                    <Typography style={{color: '#0047FF'}} variant="body1">Добавить группу</Typography>
                                </Box>
                            )}
                        </Button>
                        {checked && (
                            <BandRegistration
                                open={checked}
                                close={setChecked}
                                touched={touched}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                errors={errors}
                                values={values}
                                setIsOwner={setIsOwner}
                            />
                        )}
                        <Button
                            className={classes.signUpBtn}
                            color='primary'
                            onClick={handleSubmit}
                        >
                            Зарегистрироваться
                        </Button>
                    </Form>
                )
            }}
        </Formik>
    );
};

export default SignUp;