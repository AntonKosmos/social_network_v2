import React from "react";
import s from "./formControl.module.css"

export const Input = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl}>
            <div className={hasError && s.required}>
                <input  {...input} {...props}/>
            </div>
            <div className={hasError && s.maxlength}>
                <span>  {hasError && meta.error}</span>
            </div>
        </div>
    );
}