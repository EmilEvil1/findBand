import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { Controller } from "react-hook-form";

const ReactHookFormSelect = ({name, label, control, defaultValue, children, error, ...props}) => {
    const labelId = `${name}-label`;
    return (
        <FormControl {...props} error={error}>
            <InputLabel id={labelId}>{label}</InputLabel>
            {/*<Controller*/}
            {/*    as={*/}
            {/*        <Select*/}
            {/*            labelId={labelId} label={label}*/}
            {/*            fullWidth*/}
            {/*            // multiple*/}
            {/*        >*/}
            {/*            {children}*/}
            {/*        </Select>*/}
            {/*    }*/}
            {/*    name={name}*/}
            {/*    control={control}*/}
            {/*    error={error}*/}

            {/*/>*/}
        </FormControl>
    );
};
export default ReactHookFormSelect;
