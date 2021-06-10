import React, { ReactNode, useEffect, useRef, useState } from "react";
import Input from "../Input";

interface EditableFieldProps {
    value: string,
    renderValue: (value: string) => ReactNode
    onSubmit: (value: string) => void,
    initialEdit?: boolean
}

const EditableField: React.FC<EditableFieldProps> = ({ renderValue, value, onSubmit, initialEdit = false }) => {
    const [edit, setEdit] = useState(initialEdit);
    const [currValue, setCurrValue] = useState(value);

    const ref = useRef<HTMLInputElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Element)) {
            setEdit(false);
            onSubmit(currValue);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [currValue]);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            setEdit(false);
            onSubmit(currValue);
        }
    }

    return (
        <React.Fragment>
            {edit && <Input
                onKeyDown={handleKeyDown}
                inputRef={ref}
                type="text"
                value={currValue}
                onChange={(event) => setCurrValue(event.target.value)}
            /> }
            {!edit && <div onClick={() => setEdit(true)}>
                {renderValue(value)}
            </div>}
        </React.Fragment>
    )
}

export default EditableField;