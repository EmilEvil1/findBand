import React from 'react';
import {LoaderWrapper} from "../Loader/Loader";
import {useSelector} from "react-redux";
import SnackBar from "../SnackBar/Snackbar";

const AppWrapper = ({children}) => {

    const status = useSelector(({ state }) => state.restStatus)

    if (!status) return <LoaderWrapper isLoad={true} />

    return (
        <>
            {children}
            {status.success && <SnackBar />}
        </>
    )
}

export default AppWrapper;