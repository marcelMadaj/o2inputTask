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
}


const Input: React.FC<InputProps> = ({inputName, optional, error, placeholder, validate, type = InputType.Text}) => {
    const [value, setValue] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(true);
    const [touched, setTouched] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleBlur = () => {
        setTouched(true);
        setLoading(true);
        setTimeout(() => {
            setIsValid(validate(value));
            setLoading(false);
        }, 500);
    };

    return (
        <div className="email-input-container">
            <div className="email-title-wrapper">
                <label htmlFor="email" className="label-m">{inputName}</label>
                <label htmlFor="email" className="label-s">{optional && inputTexts?.optional}</label>
            </div>

            <div className="input-wrapper">
                <input
                    type={type}
                    id="email"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={handleBlur}
                    className={`input ${touched && !isValid ? "input-error" : ""}`}
                    placeholder={placeholder}
                />
                {loading && <div className="spinner"/>}
            </div>

            {touched && !isValid && value.length > 0 && !loading && (
                <p className="error-text">{error}</p>
            )}
        </div>
    );
};

export default Input;
