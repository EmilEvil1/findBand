import React from 'react'
import {Form, Formik} from "formik"
import {Button} from "@material-ui/core"
import {useHistory} from "react-router-dom"
import {searchMusician} from "../../../helpers/validation"
import RegionList from "../../common/RegionList/RegionList";
import InstrumentList from "../../common/InstrumentList/InstrumentList"

const Search = ({searchType}) => {

    const history = useHistory()

    const onSubmit = data => {
        switch (searchType) {
            case `musician`:
                history.push(`/search?regionId=${data.regionId}&instrumentId=${data.instrumentId}`)
                break
            case `band`:
                history.push(`/searchBand?regionId=${data.regionId}&instrumentId=${data.instrumentId}`)
                break
            default: history.push(`/404`)
        }
    }

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
                } = props
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
                            disabled={!searchType}
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

export default Search