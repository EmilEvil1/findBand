import React from 'react';
import {useDispatch} from "react-redux";
import {Button} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {onSubmit} from "../../../../helpers/api";
import {useStyles} from "../../Authentication/style";
import RegionList from "../../../common/RegionList";
import InstrumentList from "../../../common/InstrumentList";


const SearchMusician = (props) => {

    const {} = props
    const dispatch = useDispatch()
    const classes = useStyles()

    const {watch, handleSubmit, control} = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
    });

    return (

        <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
            <RegionList control={control} />
            <InstrumentList control={control} />
            <Button
                type='submit'
                className={classes.signUpBtn}
                color='primary'
            >
                Найти
            </Button>
        </form>
    );
};

export default SearchMusician;