// import React from 'react';
// import {useDispatch} from "react-redux";
// import {Button} from "@material-ui/core";
// import {useForm} from "react-hook-form";
// import RegionList from "../../../common/RegionList";
// import {onSubmit} from "../../../../helpers/api";
// import InstrumentList from "../../../common/InstrumentList";
// import {useStyles} from "../../Authentication/style";
//
// const SearchBand = (props) => {
//
//     const {} = props
//     const dispatch = useDispatch()
//     const classes = useStyles()
//
//     const {watch, handleSubmit, control} = useForm({
//         mode: 'onSubmit',
//         reValidateMode: 'onChange',
//     });
//
//     return (
//
//         <form
//             noValidate
//             onSubmit={handleSubmit(onSubmit)}
//         >
//             <RegionList control={control} />
//
//             <Button
//                 style={{border: '1px solid white'}}
//                 type='submit'
//                 className={classes.signUpBtn}
//                 color='primary'
//             >
//                 Найти
//             </Button>
//         </form>
//     );
// };
//
// export default SearchBand;