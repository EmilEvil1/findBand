import React, {useEffect, useState} from 'react';
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

const SnackBar = () => {

    const [state, setState] = useState(true)

    useEffect(() => {
        setTimeout(() => setState(false), 3000)
    }, [])

    return (
        <Snackbar
            open={state}
            vertical='bottom'
            horizontal='right'
            autoHideDuration={2000}
            transitionDuration={{ enter: 2000, exit: 3000 }}
        >
            <Alert severity="success" sx={{ width: "100%" }}>
                This is a success message!
            </Alert>
        </Snackbar>
    )
}

export default SnackBar;