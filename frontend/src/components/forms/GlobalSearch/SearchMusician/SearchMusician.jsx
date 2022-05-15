import React from 'react';
import {useHistory} from "react-router-dom";
import {Form, Formik} from "formik";
import {Button} from "@material-ui/core";
import RegionList from "../../../common/RegionList/RegionList";
import InstrumentList from "../../../common/InstrumentList/InstrumentList";
import {searchMusician} from "../../../../helpers/validation";
import {useDispatch} from "react-redux";
import {makeSearchForMembers} from "../../../../store/thunks/thunks";

const SearchMusician = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const onSubmit = data => {
        console.log('data', data)
        dispatch(makeSearchForMembers(data))
    }

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
                    handleReset,
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