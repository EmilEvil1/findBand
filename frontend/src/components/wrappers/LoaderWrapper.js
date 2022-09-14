import React from "react"
import {Box, Typography} from "@material-ui/core";
import Loader from "../common/Loader/Loader";


export const LoaderWrapper = ({
    isLoad,
    rootStyles,
    contentStyles,
    loaderStyles,
    children,
    percent = 0,
    title,
    progressEnable}) => (

    <div style={{ position: "relative", ...rootStyles }}>
        <div
            style={{
                width: "100%",
                height: "100%",
                opacity: isLoad ? 0.25 : 1,
                pointerEvents: isLoad ? "none" : undefined,
                transition: ".3s",
                ...contentStyles,
            }}
        >
            {children}
        </div>
        {isLoad && (
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    left: 0,
                    top: 0,
                    ...loaderStyles,
                }}
            >
                {title && <Typography style={{ fontWeight: 500, marginBottom: 15 }}>{title}</Typography>}
                <Box style={{ position: "relative", display: "inline-flex" }}>
                    <Loader />
                    {progressEnable && (
                        <Box
                            style={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: "absolute",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                opacity: 0.4,
                            }}
                        >
                            <Typography>{`${Math.round(percent)}%`}</Typography>
                        </Box>
                    )}
                </Box>
            </div>
        )}
    </div>
)
