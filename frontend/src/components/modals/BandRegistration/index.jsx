import React from 'react';
import {Box, Button, Dialog, TextField} from "@material-ui/core";
import {closeModal} from "../../../helpers/utils";
import {useStyles} from "./style";

const BandRegistration = (props) => {

    const {open, close, handleChange, handleBlur, touched, errors, values} = props
    const classes = useStyles()
    console.log('errors', errors)
    return (
        <Dialog
            open={open}
            onClose={() => closeModal(close)}
        >
            <Box className={classes.modalWrapper}>
                <TextField
                    name="bandName"
                    label="Название группы"
                    variant='outlined'
                    placeholder="Название группы"
                    values={values.bandName}
                    defaultValue={values.bandName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.bandName && Boolean(errors.bandName)}
                    helperText={touched.bandName && errors.bandName}
                    fullWidth
                />
                <Box className={classes.buttonsWrapper}>
                    <Button
                        color='primary'
                        style={{border: '1px solid white', marginRight: 10}}
                        disabled={!values.bandName}
                        onClick={() => closeModal(close)}
                    >
                        Сохранить
                    </Button>
                    <Button
                        color='primary'
                        style={{border: '1px solid white'}}
                        onClick={() => closeModal(close)}
                    >
                        Отменить
                    </Button>
                </Box>
            </Box>
        </Dialog>
    );
};

export default BandRegistration;