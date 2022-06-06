import React from 'react';

import {LoaderWrapper} from "../Loader/Loader";
import {useSelector} from "react-redux";


const AppWrapper = ({children}) => {

    const status = useSelector(({ state }) => state.restStatus)

    if (!status) {
        return <LoaderWrapper isLoad={true}/>
    }

    return <>{children}</>
}

export default AppWrapper;