import React from "react";

interface InputProps {
    inputRef?: any,
    type: string,
    value: string | number,
    onChange: (event: any) => void,
    onKeyDown?: (event: any) => void,
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