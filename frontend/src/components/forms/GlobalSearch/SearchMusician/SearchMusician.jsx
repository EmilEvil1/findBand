import React from 'react';
import {useDispatch} from "react-redux";
import {Form, Formik} from "formik";
import {Button} from "@material-ui/core";
import {searchMusician} from "../../../../helpers/validation";
import {makeSearchForMembers} from "../../../../store/thunks/common/home";
import RegionList from "../../../common/RegionList/RegionList";
import {useHistory} from "react-router-dom";

const SearchMusician = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = data => dispatch(makeSearchForMembers(data, history))

    return (
        <Formik
            initialValues={{
                regionId: '',
                instrumentIds: [2, 3]
            }}
            onSubmit={values => onSubmit(values)}
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
                    setFieldValue,
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
                        {/*<InstrumentList*/}
                        {/*    values={values}*/}
                        {/*    handleChange={handleChange}*/}
                        {/*    handleBlur={handleBlur}*/}
                        {/*    touched={touched}*/}
                        {/*    errors={errors}*/}
                        {/*    setFieldValue={setFieldValue}*/}
                        {/*/>*/}
                        <Button
                            style={{marginTop: 40}}
                            color='primary'
                            onClick={() => {
                                 handleSubmit()
                                // if (values.regionId && values.instrumentId) {
                                //     history.push('/search')
                                // }
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

export default SearchMusician;