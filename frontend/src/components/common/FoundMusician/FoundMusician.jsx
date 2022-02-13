import React from 'react';
import {Box, Button, Grid, Typography} from "@material-ui/core";
import {useStyles} from "./style";
import ProfileIcon from "../../../assets/icons/sidebar/profile";

const FoundMusician = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.contentWrapper} style={{paddingTop: 50}}>
            <Box className={classes.titleWrapper}>
                <Typography> </Typography>
                <Typography style={{width: '15%'}}>Имя</Typography>
                <Typography style={{width: '40%'}}>Инструмент</Typography>
                <Typography style={{width: '15%'}}>Город</Typography>
                <Typography style={{width: '15%'}}>Стаж</Typography>
            </Box>
            <Box className={classes.wrapper}>
                <Box style={{position: "absolute"}}><ProfileIcon /></Box>
                <Typography style={{width: '15%'}} className={classes.tab}>Игорь</Typography>
                <Typography style={{width: '40%'}} className={classes.tab}>Басс-гитара</Typography>
                <Typography style={{width: '15%'}} className={classes.tab}>Владимир</Typography>
                <Typography style={{width: '15%'}} className={classes.tab}>3 года</Typography>
                <Button  className={classes.profileBtn} color='primary'>Профиль</Button>
            </Box>
            <Box className={classes.wrapper}>
                <Box style={{position: "absolute"}}><ProfileIcon /></Box>
                <Typography style={{width: '15%'}} className={classes.tab}>Артур</Typography>
                <Typography style={{width: '40%'}} className={classes.tab}>Барабанщик</Typography>
                <Typography style={{width: '15%'}} className={classes.tab}>Владимир</Typography>
                <Typography style={{width: '15%'}} className={classes.tab}>1 год</Typography>
                <Button  className={classes.profileBtn} color='primary'>Профиль</Button>
            </Box>
            <Box className={classes.wrapper}>
                <Box style={{position: "absolute"}}><ProfileIcon /></Box>
                <Typography style={{width: '15%'}} className={classes.tab}>Стас</Typography>
                <Typography style={{width: '40%'}} className={classes.tab}>Соло-гитара</Typography>
                <Typography style={{width: '15%'}} className={classes.tab}>Владимир</Typography>
                <Typography style={{width: '15%'}} className={classes.tab}>10 лет</Typography>
                <Button  className={classes.profileBtn} color='primary'>Профиль</Button>
            </Box>
        </Grid>
    );
};

export default FoundMusician;