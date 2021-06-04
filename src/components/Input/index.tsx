import React from "react";

interface InputProps {
    type: string,
    value: string | number,
    onChange: (event: any) => void,
    placeholder: string
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
    return (
        <input
            className="input"
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange} />
    )
}

export default Input;