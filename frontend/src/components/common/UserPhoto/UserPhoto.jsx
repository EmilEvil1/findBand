import React from 'react';
import {Avatar} from "@material-ui/core";

const UserPhoto = (props) => {

    const {avatarUri} = props

    const src = `http://ec2-3-14-79-158.us-east-2.compute.amazonaws.com${avatarUri}`

    return (
        <Avatar
            alt="Remy Sharp"
            src={src || ''}
            style={{width: 150, height: 150}}
        />
    );
};

export default UserPhoto;