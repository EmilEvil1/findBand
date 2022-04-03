import React from 'react';
import {useHistory} from "react-router-dom";
import { Formik } from "formik";
import {Button} from "@material-ui/core";
import RegionList from "../../../common/RegionList/RegionList";
import {useStyles} from "../../Authentication/style";
import InstrumentList from "../../../common/InstrumentList/InstrumentList";
import {searchMusician} from "../../../../helpers/validation";
import {useDispatch} from "react-redux";
import {makeSearchForMembers} from "../../../../store/thunks/thunks";

const SearchMusician = () => {

    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()

    const onSubmit = data => dispatch(makeSearchForMembers(data))

    return (
        <Formik
            initialValues={{
                regionId: '',
                instrumentsIds: ''
            }}
            onSubmit={values => onSubmit(values)}
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
                                console.log(values)
                                // if (values.region && values.instrument) {
                                //     history.push('/search')
                                // }
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