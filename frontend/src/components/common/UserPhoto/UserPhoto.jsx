import React from 'react';
import {Avatar} from "@material-ui/core";

const UserPhoto = (props) => {

    const {avatarUri, width, height, shortName} = props

    const src = `http://ec2-3-14-79-158.us-east-2.compute.amazonaws.com${avatarUri}`

    return (
        <Avatar
            alt={shortName}
            src={src || ''}
            style={{width: width, height: height}}
        />
    );
};

export default UserPhoto;