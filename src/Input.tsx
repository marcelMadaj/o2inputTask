import React, { useState } from "react";
import "./Input.scss";
import inputTexts from "./inputTexts";

export enum InputType {
    Email = "email",
    Text = "text",
}

type InputProps = {
    inputName: string
    optional: boolean
    error: string
    placeholder: string
    validate: (value: string) => boolean
    type?: InputType
    id: string
}


const Input: React.FC<InputProps> = ({inputName, optional, error, placeholder, validate, type = InputType.Text, id}) => {
    const [value, setValue] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(true);
    const [touched, setTouched] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleBlur = () => {
        setTouched(true);
        setLoading(true);
        setTimeout(() => {
            if (!value.trim()) {
                setIsValid(optional);
            } else {
                setIsValid(validate(value));
            }
            setLoading(false);
        }, 500);
    };

    return (
        <div className={`input-container ${touched && !isValid ? "error" : ""}`}>
            <div className="title-wrapper">
                <label htmlFor={id} className="font-label-m-name">{inputName}</label>
                <label htmlFor={id} className="font-label-s-optional">{optional && inputTexts?.optional}</label>
            </div>
            <div className="input-wrapper">
                <input
                    type={type}
                    id={id}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setTouched(true)}
                    onBlur={() => {handleBlur()}}
                    className={`input ${touched && !isValid ? "input-error" : ""}`}
                    placeholder={!touched && (!touched || isValid) ? placeholder : ""}
                />
                {loading && <div className="spinner"/>}
            </div>
            {touched && !isValid && (
                <p className="error-text">
                    {!value.trim() ? inputTexts?.mandatory : error}
                </p>
            )}
        </div>
    );
};

export default Input;
