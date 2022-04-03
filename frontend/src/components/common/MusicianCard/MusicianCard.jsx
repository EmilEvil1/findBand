import React from 'react';
import {Box, Button, Typography} from "@material-ui/core";
import {useStyles} from "./style";
import ProfileIcon from "../../../assets/icons/sidebar/profile";
import {useHistory} from "react-router-dom";

const MusicianCard = () => {

    const classes = useStyles()
    const history = useHistory()

    return (
        <Box className={classes.cardBackground}>
            <Box className={classes.info}>
                <ProfileIcon />
                <Box>
                    <Typography>Иван</Typography>
                    <Box>
                        <Typography>Инструмент</Typography>
                        <Typography>Басс-гитара, ударные</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.additionalInfo}>
                <Box>
                    <Typography>Город</Typography>
                    <Typography>Владимир</Typography>
                </Box>
                <Box>
                    <Typography>Стаж</Typography>
                    <Typography>3 года</Typography>
                </Box>
                <Box>
                    <Typography>Группа</Typography>
                    <Typography>Metallica</Typography>
                </Box>
            </Box>
            <Button
                className={classes.redirectBtn}
                onClick={() => history.push('/detailed')}
            >
                Перейти в профиль
            </Button>
        </Box>
    );
};

export default MusicianCard;