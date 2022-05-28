import React, {useCallback, useState} from 'react';
import {Box, Button, Dialog, Slider, Typography} from "@material-ui/core";
import {getOrientation} from "get-orientation/browser";
import Cropper from "react-easy-crop";
import {closeModal} from "../../../helpers/utils";
import {getCroppedImg, getRotatedImage} from "./canvasUtils";
import {useStyles} from "./style";
import {useDispatch} from "react-redux";
import {sendNewUserProfilePhoto} from "../../../store/thunks/common/profile";

const ORIENTATION_TO_ANGLE = {
    '3': 180,
    '6': 90,
    '8': -90,
}

const UploadUserPhoto = (props) => {

    const {open, setOpen} = props
    const classes = useStyles()
    const dispatch = useDispatch()


    const [imageSrc, setImageSrc] = useState(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [ , setCroppedImage] = useState(null)

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])


    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                imageSrc,
                croppedAreaPixels,
                rotation
            )
            dispatch(sendNewUserProfilePhoto({image: croppedImage}))
            closeModal(setOpen)
        } catch (e) {
            console.error(e)
        }
    }, [imageSrc, croppedAreaPixels, rotation])

    const onClose = useCallback(() => setCroppedImage(null), [])

    const onFileChange = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            let imageDataUrl = await readFile(file)

            // apply rotation if needed
            const orientation = await getOrientation(file)
            const rotation = ORIENTATION_TO_ANGLE[orientation]
            if (rotation) {
                imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
            }

            setImageSrc(imageDataUrl)
        }
    }

    return (
        <Dialog
            open={open}
            onClose={() => {
                closeModal(setOpen)
                onClose()
            }}
        >
            <Box className={classes.wrapper}>
                <Typography className={classes.title} variant='h6'>Выбор миниатюры</Typography>
                <Box>
                    {imageSrc ? (
                        <>
                            <Box className={classes.cropContainer}>
                                <Cropper
                                    image={imageSrc}
                                    crop={crop}
                                    rotation={rotation}
                                    zoom={zoom}
                                    aspect={4 / 3}
                                    onCropChange={setCrop}
                                    onRotationChange={setRotation}
                                    onCropComplete={onCropComplete}
                                    onZoomChange={setZoom}
                                />
                            </Box>
                            <Box>
                                <Box>
                                    <Typography variant="overline">Увеличить/Уменьшить</Typography>
                                    <Slider
                                        value={zoom}
                                        min={1}
                                        max={3}
                                        step={0.1}
                                        aria-labelledby="Увеличить/Уменьшить"
                                        onChange={(e, zoom) => setZoom(zoom)}
                                    />
                                </Box>
                                <Box>
                                    <Typography variant="overline">Повернуть</Typography>
                                    <Slider
                                        value={rotation}
                                        min={0}
                                        max={360}
                                        step={1}
                                        aria-labelledby="Поворот"
                                        onChange={(e, rotation) => setRotation(rotation)}
                                    />
                                </Box>
                                <Button
                                    onClick={showCroppedImage}
                                    color="primary"
                                >
                                    Сохранить изменения
                                </Button>
                            </Box>
                        </>
                    ) : (
                        <input type="file" onChange={onFileChange} accept="image/png" />
                    )}
                </Box>
            </Box>
        </Dialog>
    )
};

function readFile(file) {
    return new Promise((resolve) => {
        const reader = new FileReader()
        reader.addEventListener('load', () => resolve(reader.result), false)
        reader.readAsDataURL(file)
    })
}

export default UploadUserPhoto;