import React, { ChangeEvent, KeyboardEvent, RefObject } from "react";

interface InputProps {
    inputRef?: RefObject<HTMLInputElement>,
    type: string,
    value: string | number,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void,
    placeholder?: string
}

const Input: React.FC<InputProps> = ({inputRef, onKeyDown, type, placeholder, value, onChange}) => {
    return (
        <input
            onKeyDown={onKeyDown}
            ref={inputRef}
            className="input"
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}/>
    )
}

export default Input;