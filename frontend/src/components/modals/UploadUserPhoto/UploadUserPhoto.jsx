import React, {useCallback, useState} from 'react'
import {Box, Button, Dialog, Slider, Typography} from "@material-ui/core"
import {getOrientation} from "get-orientation/browser"
import Cropper from "react-easy-crop"
import {closeModal} from "../../../helpers/utils"
import {getCroppedImg, getRotatedImage} from "./canvasUtils"
import {useNewUserPhoto, useProfileData} from "../../../dto/hooks/Profile"
import {LoaderWrapper} from "../../wrappers/LoaderWrapper"
import {useStyles} from "./style"

const ORIENTATION_TO_ANGLE = {
    '3': 180,
    '6': 90,
    '8': -90,
}

const UploadUserPhoto = (props) => {

    const {open, setOpen} = props
    const classes = useStyles()

    // Вы можете загрузить изображение в формате JPG, GIF или PNG.

    const [imageSrc, setImageSrc] = useState(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [ ,setCroppedImage] = useState(null)
    const sendNewUserPhoto = useNewUserPhoto()
    const profileData = useProfileData()
    const isLoading = sendNewUserPhoto.isLoading
    const [errorText, setErrorText] = useState('')

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const sendNewPhoto = (data) =>
        sendNewUserPhoto.mutateAsync(data)
            .then(() => profileData.refetch())
            .catch(err => console.log(err.response.data.errors.errorDescription))

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                imageSrc,
                croppedAreaPixels,
                rotation
            )
            await sendNewPhoto({image: croppedImage})
            await closeModal(setOpen)
        } catch (e) {
            console.error(e)
        }
    }, [imageSrc, croppedAreaPixels, rotation])

    const clearState = useCallback(() => setCroppedImage(null), [])

    const onFileChange = async (e) => {
        if (e.target.files[0].size < 5000000 && e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            let imageDataUrl = await readFile(file)
            // apply rotation if needed
            const orientation = await getOrientation(file)
            const rotation = ORIENTATION_TO_ANGLE[orientation]
            if (rotation) {
                imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
            }
            setImageSrc(imageDataUrl)
            setErrorText('')
        } else {
            setErrorText('Фотография превышает 5 МБ')
        }
    }

    return (
        <Dialog
            open={open}
            onClose={() => {
                closeModal(setOpen)
                clearState()
            }}
        >
            <LoaderWrapper isLoad={isLoading}>
                <Box className={classes.wrapper}>
                    {!!imageSrc ? <Typography className={classes.title} variant='h6'>Выбор миниатюры</Typography> : <Typography className={classes.title} variant='h6'>Загрузите фотографию</Typography>}
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
                                            disabled={isLoading}
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
                                            disabled={isLoading}
                                        />
                                    </Box>
                                    <Button
                                        disabled={isLoading}
                                        onClick={showCroppedImage}
                                        color="primary"
                                    >
                                        Сохранить изменения
                                    </Button>
                                </Box>
                            </>
                        ) : (
                            <Box>
                                <input style={{marginBottom: 20}} type="file" onChange={onFileChange} accept=".png, .jpg, .jpeg" />
                                <Typography>Изображение не должно превышать 5 мб</Typography>
                                <Typography>Вы можете загрузить изображение в формате JPG, GIF или PNG.</Typography>
                                <Typography color={'error'}>{errorText}</Typography>
                            </Box>


                        )}
                    </Box>
                </Box>
            </LoaderWrapper>
        </Dialog>
    )
}

function readFile(file) {
    return new Promise((resolve) => {
        const reader = new FileReader()
        reader.addEventListener('load', () => resolve(reader.result), false)
        reader.readAsDataURL(file)
    })
}

export default UploadUserPhoto