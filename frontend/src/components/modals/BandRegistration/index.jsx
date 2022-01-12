import React from 'react';
import {useDispatch} from "react-redux";
import {Box, Button, Dialog, TextField} from "@material-ui/core";
import {closeModal} from "../../../helpers/utils";
import {Controller} from "react-hook-form";
import {useStyles} from "./style";


const BandRegistration = (props) => {

    const {checked, open, close, control} = props
    const dispatch = useDispatch()
    const classes = useStyles()

    return (

        <Dialog
            open={open}
            onClose={() => closeModal(close)}
        >
            <Box className={classes.modalWrapper}>
                <Box>
                    <Box>
                        <Controller
                            name="bandName"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    placeholder="Введите название группы"
                                    label="Название группы"
                                    variant='outlined'
                                    color='primary'
                                    value={value}
                                    onChange={onChange}
                                    fullWidth
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    required
                                />
                            )}
                        />
                    </Box>
                </Box>
                <Box>
                    <Button
                        color='primary'
                        style={{border: '1px solid white'}}
                        onClick={() => {
                            checked(true)
                            closeModal(close)
                        }}
                    >
                        Добавить
                    </Button>
                    <Button
                        color='primary'
                        onClick={() => {
                            checked(false)
                            closeModal(close)
                        }}
                    >
                        Отменить
                    </Button>
                </Box>
            </Box>
        </Dialog>
    );
};

export default BandRegistration;