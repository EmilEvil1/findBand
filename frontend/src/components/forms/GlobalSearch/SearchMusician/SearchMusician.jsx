import React from 'react'
import {useCookies} from "react-cookie"
import {Form, Formik} from "formik"
import {Button} from "@material-ui/core"
import {useSearchForMembers} from "../../../../dto/hooks/Home"
import {searchMusician} from "../../../../helpers/validation"
import RegionList from "../../../common/RegionList/RegionList"
import {useHistory} from "react-router-dom"
import InstrumentList from "../../../common/InstrumentList/InstrumentList"

const SearchMusician = () => {

    const history = useHistory()
    const searchForMembers = useSearchForMembers()
    const [, , removeToken] = useCookies(['access_token'])

    // TODO: errorHandling hook use

    const onSearch = (data) =>
        searchForMembers.mutateAsync(data)
            .then((response) => response && history.push(`/search`))
            .catch(err => {
                if (err.response.status === 401) {
                    removeToken("access_token")
                    history.push(`/auth`)
                }
            })

    const onSubmit = data => onSearch(data)

    return (
        <Formik
            initialValues={{
                regionId: 6,
                instrumentIds: [4, 3, 5]
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