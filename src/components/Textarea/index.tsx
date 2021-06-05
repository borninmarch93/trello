import React from "react";

interface TextareaProps {
    value: string | number,
    onChange: (event: any) => void,
    placeholder: string
}

const Textarea: React.FC<TextareaProps> = ({ placeholder, value, onChange }) => {
    return (
        <textarea
            className="textarea"
            value={value}
            placeholder={placeholder}
            onChange={onChange} />
    )
}

export default Textarea;