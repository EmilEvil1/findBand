import React from 'react';
// import {useDispatch} from "react-redux";
import {Avatar, Grid, Typography} from "@material-ui/core";

const UploadPhoto = (props) => {

    const {} = props
    // const dispatch = useDispatch()
    // const classes = useStyles()

    return (
        <Grid style={{width: '50%'}}>
            <Avatar style={{width: 150, height: 150}} alt={'E'} src={''} />
            <Typography style={{marginTop: 35}} variant={'h6'}>Загрузить аватар</Typography>
            <Typography style={{color: '#869CB9'}}>Изображение не должно превышать 5 мб</Typography>
        </Grid>
    );
};

export default UploadPhoto;