import classNames from "classnames";
import React from "react";

interface ButtonProps {
    onClick?: () => void,
    id?: string | undefined,
    type?: 'button' | 'submit' | 'reset' | undefined
}

const Button: React.FC<ButtonProps> = (
    { onClick,
        id,
        type,
        children
    }) => {

    const classes = classNames(
        'btn'
    )

    return (
        <button
            id={id}
            onClick={onClick}
            className={classes}
            type={type}>
            {children}
        </button>
    )
}

export default Button;