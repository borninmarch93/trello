import classNames from "classnames";
import React from "react";

interface ButtonProps {
    onClick?: () => void,
    id?: string | undefined,
    type?: 'button' | 'submit' | 'reset' | undefined,
    variant?: 'primary' | string
 }

const Button: React.FC<ButtonProps> = (
    { onClick,
        id,
        type,
        variant,
        children
    }) => {

    const classes = classNames(
        'btn',
        variant === 'primary' && 'btn--primary',
        variant === 'transparent' && 'btn--transparent'
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