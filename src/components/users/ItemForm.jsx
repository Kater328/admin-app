import React from "react";
import TextField from '@material-ui/core/TextField';

const ItemForm = (props) => {
    return (
        <TextField 
            style={{width:'50%'}}
            error={props.error}
            required 
            name={props.name}
            label={props.label}
            defaultValue={props.value}
            onChange={(e) => {props.changeInput(e)}}
        />
    );
}

export default React.memo(ItemForm);