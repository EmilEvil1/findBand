import React from 'react';
import {useHistory} from "react-router-dom";
import { Formik } from "formik";
import {Button} from "@material-ui/core";
import RegionList from "../../../common/RegionList/RegionList";
import {onSubmit} from "../../../../helpers/api";
import {useStyles} from "../../Authentication/style";
import InstrumentList from "../../../common/InstrumentList/InstrumentList";
import {searchMusician} from "../../../../helpers/validation";

const SearchMusician = () => {

    const classes = useStyles()
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
            validationSchema={searchMusician}
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
                            style={{marginTop: 40}}
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