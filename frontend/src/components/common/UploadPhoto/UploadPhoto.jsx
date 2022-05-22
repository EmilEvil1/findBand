import React, {useRef, useState} from 'react';
import {centerCrop, makeAspectCrop} from "react-image-crop";
import {Box, Grid, Typography} from "@material-ui/core";
import {useStyles} from "./style";
import 'react-image-crop/dist/ReactCrop.css'
import { canvasPreview } from '../../../helpers/canvasPreview'
import {useDebounceEffect} from "../../../hooks/useDebounceEffect";
import CutPhoto from "../../modals/CutPhoto/CutPhoto";

const UploadPhoto = (props) => {

    const {avatarUri} = props
    const classes = useStyles()
    // const [crop, setCrop] = useState()
    const [crop, setCrop] = useState({
        unit: '%', // Can be 'px' or '%'
        x: 25,
        y: 25,
        width: 50,
        height: 50
    })
    const imgRef = useRef(null)
    const [aspect, ] = useState(5 / 5)
    const [completedCrop, setCompletedCrop] = useState(true)
    const previewCanvasRef = useRef(null)

    const [imgSrc, setImgSrc] = useState(`http://ec2-3-14-79-158.us-east-2.compute.amazonaws.com${avatarUri}`)
    const [open, setOpen] = useState(false)

    function centerAspectCrop(
        mediaWidth,
        mediaHeight,
        aspect,
    ) {
        return centerCrop(
            makeAspectCrop(
                {
                    unit: '%',
                    width: 50,
                },
                aspect,
                mediaWidth,
                mediaHeight,
            ),
            mediaWidth,
            mediaHeight,
        )
    }

    function onSelectFile(e) {
        if (e.target.files && e.target.files.length > 0) {
            setCrop(undefined)
            const reader = new FileReader()
            reader.addEventListener('load', () =>
                setImgSrc(reader.result.toString() || ''),
            )
            reader.readAsDataURL(e.target.files[0])
        }
    }

    function onImageLoad(e) {
        if (aspect) {
            const { width, height } = e.currentTarget
            setCrop(centerAspectCrop(width, height, aspect))
        }
    }

    useDebounceEffect(
        async () => {
            if (

                imgRef.current &&
                previewCanvasRef.current
            ) {
                await canvasPreview(
                    imgRef.current,
                    previewCanvasRef.current,
                    completedCrop
                )
            }
        },
        100,
        [completedCrop],
    )

    return (
        <Grid className={classes.wrapper}>
            <Box className='Crop-Controls'>
                <input
                    className={classes.inputFile}
                    accept="image/*"
                    id="faceImage"
                    type="file"
                    onChange={onSelectFile}
                />
                {imgSrc && (
                <CutPhoto
                    imgSrc={imgSrc}
                    crop={crop}
                    setCompletedCrop={setCompletedCrop}
                    setCrop={setCrop}
                    onImageLoad={onImageLoad}
                    imgRef={imgRef}
                    aspect={aspect}
                    open={open}
                    setOpen={setOpen}
                />
                )}
                {completedCrop && imgSrc && (
                    <Box>
                        <canvas
                            ref={previewCanvasRef}
                            style={{
                                objectFit: 'contain',
                                width: completedCrop.width,
                                height: completedCrop.height,
                                borderRadius: '50%'
                            }}
                        >

                        </canvas>
                        <img
                            style={{
                                width: 200,
                                height: 200
                         }}
                            alt='E'
                            src={imgSrc}
                        />
                    </Box>
                )}
                <Typography onClick={() => setOpen(true)} className={classes.attentionText}>Изображение не должно превышать 5 мб</Typography>
                <Typography className={classes.attentionText}>Вы можете загрузить изображение в формате JPG, GIF или PNG.</Typography>
            </Box>
        </Grid>
    );
};

export default UploadPhoto;