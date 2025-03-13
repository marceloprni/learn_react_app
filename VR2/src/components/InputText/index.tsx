import React from "react";
import { Input } from "../../styles/form-styles";

const InputText = (props) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.text}</label>
            <Input id={props.id} placeholder={props.holder}/>
        </div>
        
    )
 
}



export default InputText;