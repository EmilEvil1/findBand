import React from 'react'
import {Box, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useStyles} from "./style";

const BandsList = ({list}) => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            {list.length ? list.map(element => {
                return (
                    <Link key={element.bandId} to={`/profile-band?${element.bandId}`}>
                        <Box className={classes.item}>
                            {/*<img src="https://figmaelements.com/wp-content/uploads/2020/11/figma-card-templates.jpg" alt=""/>*/}
                            <Typography color='primary'>{element.bandName}</Typography>
                            <Box className={classes.row}>
                                <Typography color='primary'>Количество участников:</Typography>
                                <Typography color='primary'>{element.memberCount}</Typography>
                            </Box>
                            <Box className={classes.row}>
                                <Typography color='primary'>Дата создания:</Typography>
                                <Typography color='primary'>{element.createData}</Typography>
                            </Box>
                        </Box>
                    </Link>
                )
            }) : `У вас пока нет группы`}
        </Box>
    )
}

export default BandsList