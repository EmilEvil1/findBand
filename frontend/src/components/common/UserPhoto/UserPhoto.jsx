import React from 'react'
import {Avatar} from "@material-ui/core"
// import 'react-lazy-load-image-component/src/effects/blur.css'
// import 'react-lazy-load-image-component/src/effects/black-and-white.css'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {currentLocation} from "../../../helpers/axios"

const UserPhoto = (props) => {

    const {avatarUri, width, height, shortName, variant} = props
    const src = currentLocation === 'localhost' ? `http://findband.ru:8080${avatarUri}` : avatarUri

    return (
        <div>
            {avatarUri ? (
                <LazyLoadImage
                    alt={shortName}
                    height={height}
                    src={src || ''}
                    effect="opacity"// use normal <img> attributes as props
                    width={width}
                />
            ) : (
                <Avatar
                    alt={shortName}
                    src={src || ''}
                    style={{width: width, height: height}}
                    variant={variant}
                    loading="lazy"
                />
            )}
        </div>
    )
}

export default UserPhoto