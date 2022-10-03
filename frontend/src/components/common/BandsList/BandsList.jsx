import React from 'react'
import {Box, CardMedia, Typography} from "@material-ui/core"
import {Link} from "react-router-dom"
import {useStyles} from "./style"
import img from './../../../assets/img/maxresdefault.jpeg'

const BandsList = ({list}) => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            {list.length ? list.map(element => {
                return (
                    <Link key={element.bandId} to={`/profile-band?bandId=${element.bandId}`}>
                        <CardMedia className={classes.item}>
                            <img className={classes.bandPhoto} src={element.bandPhoto || img} alt=""/>
                            <Box className={classes.rowsWrapper}>
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
                        </CardMedia>
                    </Link>
                )
            }) : `У вас пока нет группы`}
        </Box>
    )
}

export default BandsList