import React, {useEffect, useState} from 'react';
import {Avatar, Box, Button, Grid, IconButton, Tooltip, Typography} from "@material-ui/core";
import {useStyles} from "./style";

const UploadPhoto = () => {

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const classes = useStyles()

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])


    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }

    return (
        <Grid className={classes.wrapper}>
            <Box>
                <input
                    className={classes.inputFile}
                    accept=".jpeg, .jpg, .jpe, .jfif, .jif, .svg"
                    id="faceImage"
                    type="file"
                    onChange={onSelectFile}
                />
                <Tooltip title="Select Image">
                    <label htmlFor="faceImage">
                        <IconButton
                            // className={classes.userPhoto}
                            color="primary"
                            aria-label="upload picture"
                            component="div"
                        >
                            { selectedFile ?
                                (<img className={classes.userPhoto} src={preview} />) :
                                (<Avatar style={{width: 150, height: 150}} alt={'E'} src={selectedFile ? preview : ''} />)
                            }
                        </IconButton>
                        <Box style={{marginTop: 35}} variant={'h6'}>Загрузить аватар</Box>
                    </label>
                </Tooltip>
                <Typography className={classes.attentionText}>Изображение не должно превышать 5 мб</Typography>
            </Box>
        </Grid>
    );
};

export default UploadPhoto;