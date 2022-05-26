import React from 'react';
import {Dialog} from "@material-ui/core";
import ReactCrop from "react-image-crop";

const CutPhoto = (props) => {


    const {imgSrc, crop, setCompletedCrop, setCrop, onImageLoad, imgRef, aspect, open, setOpen} = props
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
        >
            {imgSrc &&  (
                <ReactCrop
                    crop={crop}
                    onChange={(_, percentCrop) => setCrop(percentCrop)}
                    onComplete={(c) => setCompletedCrop(c)}
                    aspect={aspect}
                >
                    {/*<img*/}
                    {/*    ref={imgRef}*/}
                    {/*    alt="Crop preview"*/}
                    {/*    src={imgSrc}*/}
                    {/*    // style={{*/}
                    {/*    //     width: 250,*/}
                    {/*    //     height: 250*/}
                    {/*    // }}*/}
                    {/*    onLoad={onImageLoad}*/}
                    {/*/>*/}
                </ReactCrop>
            )}
        </Dialog>
    );
};

export default CutPhoto;