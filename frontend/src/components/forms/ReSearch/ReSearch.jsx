import React from 'react'
import {useHistory} from "react-router-dom"
import {Form, Formik} from "formik"
import {Box, Button} from "@material-ui/core"
import {searchMusician} from "../../../helpers/validation";
import RegionList from "../../common/RegionList/RegionList";
import InstrumentList from "../../common/InstrumentList/InstrumentList";

const ReSearch = ({refetch}) => {

    const history = useHistory()

    const onSubmit = data => {
        history.push(`/search?regionId=${data.regionId}&instrumentId=${data.instrumentId}`)
        refetch()
    }

    return (
        <Formik
            initialValues={{
                regionId: null,
                instrumentId: null
            }}
            validationSchema={searchMusician}
            onSubmit={values => onSubmit(values)}
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
                } = props
                return (
                    <Form onSubmit={handleSubmit}>
                        <Box width={'500px'} display={'flex'}>
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
                            <Button disabled={!values.regionId || !values.instrumentId} onClick={handleSubmit}>Поиск</Button>
                        </Box>

                    </Form>

                )}
            }
        </Formik>
    )
}

export default ReSearch