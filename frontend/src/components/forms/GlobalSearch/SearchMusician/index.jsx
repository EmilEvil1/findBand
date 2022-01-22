import React from 'react';
import {useHistory} from "react-router-dom";
import { Formik } from "formik";
import * as yup from 'yup';
import {Button} from "@material-ui/core";
import RegionList from "../../../common/RegionList";
import {onSubmit} from "../../../../helpers/api";
import {useStyles} from "../../Authentication/style";
import InstrumentList from "../../../common/InstrumentList";

const SearchMusician = (props) => {

    const {} = props
    const classes = useStyles()

    const validationSchema = yup.object({
        region: yup
            .string('Выберите регион')
            .required('Выберите регион'),
        instrument: yup
            .string('Выберите инструмент')
            .required('Выберите инструмент'),
    });

    const history = useHistory()

    return (
        <Formik
            initialValues={{
                region: '',
                instrument: ''
            }}
            onSubmit={(values, { setSubmitting }) => {
                // dispatch(sendNewMessage(newMessageData.data.ACTION, values))
                onSubmit(values)
                setSubmitting(false);
            }}
            validationSchema={validationSchema}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                    setFieldValue,
                    isValid
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <RegionList
                            values={values}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            errors={errors}
                        />
                        <InstrumentList
                            values={values}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            errors={errors}
                        />
                        <Button
                            style={{border: '1px solid white'}}
                            className={classes.signUpBtn}
                            color='primary'
                            onClick={() => {
                                 handleSubmit()
                                if (values.region && values.instrument) {
                                    history.push('/search')
                                }
                            }}
                        >
                            Найти
                        </Button>
                    </form>
                )
            }}
        </Formik>
    );
};

export default SearchMusician;