import React from 'react'
import {Form, Formik} from "formik"
import {Button} from "@material-ui/core"
import {searchMusician} from "../../../../helpers/validation"
import RegionList from "../../../common/RegionList/RegionList"
import {useHistory} from "react-router-dom"
import InstrumentList from "../../../common/InstrumentList/InstrumentList"

const SearchMusician = () => {

    const history = useHistory()

    const onSubmit = data => history.push(`/search?regionId=${data.regionId}&instrumentId=${data.instrumentId}`)

    return (
        <Formik
            initialValues={{
                regionId: null,
                instrumentId: null
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
                            onClick={handleSubmit}
                        >
                            Найти
                        </Button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default SearchMusician