import React from "react"
import {useParams} from "../../dto/hooks/Params";
import {LoaderWrapper} from "./LoaderWrapper";


const AppWrapper = ({ children }) => {
    const { data: paramLoaded } = useParams()

    if (!paramLoaded) {
        return <LoaderWrapper isLoad={true} children={children} />
    }
    return <>{children}</>
}

export default AppWrapper
