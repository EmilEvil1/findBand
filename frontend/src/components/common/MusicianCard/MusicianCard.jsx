import React from 'react';
import {Box, Button, Typography} from "@material-ui/core";
import {useStyles} from "./style";
import ProfileIcon from "../../../assets/icons/sidebar/profile";
import {useHistory} from "react-router-dom";

const MusicianCard = ({item}) => {

    const classes = useStyles()
    const history = useHistory()

    return (
        <Box className={classes.cardBackground}>
            <Box className={classes.info}>
                <ProfileIcon />
                <Box>
                    <Typography>{item.username}</Typography>
                    <Box>
                        <Typography>Инструмент</Typography>
                        {item.instruments.map((instrumentName, index) => {
                            return (<Typography key={index}>{instrumentName}</Typography>)
                        })}
                    </Box>
                </Box>
            </Box>
            <Box className={classes.additionalInfo}>
                <Box>
                    <Typography>Город</Typography>
                    <Typography>{item.regionName}</Typography>
                </Box>
                <Box>
                    <Typography>Стаж</Typography>
                    <Typography>{item.experienceAge}</Typography>
                </Box>
                <Box>
                    <Typography>Группа</Typography>
                    <Typography>{item.bandName ? item.bandName : `Не состоит`}</Typography>
                </Box>
            </Box>
            <Button
                className={classes.redirectBtn}
                onClick={() => history.push(`/detailed?ID=${item.id}`)}
            >
                Перейти в профиль
            </Button>
        </Box>
    );
};

export default MusicianCard;