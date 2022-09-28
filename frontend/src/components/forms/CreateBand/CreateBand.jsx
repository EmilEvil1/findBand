import React, {useState} from 'react'
import {Form, Formik} from "formik"
import {Box, Button, TextField, Typography} from "@material-ui/core"
import {bandInformation} from "../../../helpers/validation"
import UserPhoto from "../../common/UserPhoto/UserPhoto";
import UploadUserPhoto from "../../modals/UploadUserPhoto/UploadUserPhoto";
import {openModal} from "../../../helpers/utils";
import {useStyles} from "./style";

const CreateBand = () => {

    const [open, setOpen] = useState(false)
    const [uploadedPhoto, setUploadedPhoto] = useState(``)
    const classes = useStyles()

    return (
        <Formik
         initialValues={{
             bandName: '',
             bandPhoto: '',
             bandDescription: '',
             bandGenre: '',
             regionId: null
         }}
         validationSchema={bandInformation}
         onSubmit={(data) => console.log(data)}
         enableReinitialize
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
                return(
                    <Box width={'50%'}>
                        <Form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit}>
                            <Box display='flex' justifyContent={'flex-end'} style={{gap: 20}}>
                                <Box>
                                    {!!uploadedPhoto ? (
                                        <img style={{objectFit: "cover"}} width={100} height={100} src={uploadedPhoto} alt="Загруженное фото"/>
                                    ) : (
                                        <UserPhoto
                                            avatarUri={uploadedPhoto}
                                            width={150}
                                            height={150}
                                            shortName='123'
                                            variant='rounded'
                                        />
                                    )}
                                    <Typography className={classes.uploadPhotoLink} onClick={() => openModal(setOpen)}>
                                        {values.bandPhoto ? `Изменить фотографию` : `Загрузить фотографию`}
                                    </Typography>
                                </Box>
                                <Box >
                                    <TextField
                                        name='bandName'
                                        label='Название группы'
                                        placeholder='Введите название группы'
                                        value={values.bandName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.bandName && Boolean(errors.bandName)}
                                        helperText={touched.bandName && errors.bandName}
                                        variant='outlined'
                                        fullWidth
                                    />
                                    <TextField
                                        style={{marginTop: 35}}
                                        name='bandDescription'
                                        label='О группе'
                                        placeholder='Напишите о группе'
                                        value={values.bandDescription}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.bandDescription && Boolean(errors.bandDescription)}
                                        helperText={touched.bandDescription && errors.bandDescription}
                                        variant='outlined'
                                        fullWidth
                                    />
                                </Box>
                            </Box>
                            <Button style={{marginTop: 35}} onClick={handleSubmit}>Создать</Button>
                        </Form>
                        {open && (
                            <UploadUserPhoto
                                open={open}
                                setOpen={setOpen}
                                type='bandInformation'
                                setFieldValue={setFieldValue}
                                setUploadedPhoto={setUploadedPhoto}
                            />
                        )}
                    </Box>
                )}
            }
        </Formik>
    )
}

export default CreateBand