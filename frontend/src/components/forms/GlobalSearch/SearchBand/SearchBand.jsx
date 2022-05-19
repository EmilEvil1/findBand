import React from 'react';
import {useHistory} from "react-router-dom";
import {Form, Formik} from "formik";
import {Button} from "@material-ui/core";
import {onSubmit} from "../../../../helpers/api";
import {searchMusician} from "../../../../helpers/validation";
import RegionList from "../../../common/RegionList/RegionList";
import InstrumentList from "../../../common/InstrumentList/InstrumentList";

const SearchBand = () => {

    const history = useHistory()

    return (

        <Formik
            initialValues={{
                region: '',
                instrument: ''
            }}
            onSubmit={(values) => onSubmit(values)}
            validationSchema={searchMusician}
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
                    <Form onSubmit={handleSubmit}>
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
                    </Form>
                )
            }}
        </Formik>
    );
};

export default SearchBand;