import classNames from "classnames";
import React, { MouseEventHandler } from "react";

interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>,
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
        variant === 'transparent' && 'btn--transparent',
        variant === 'shadowed' && 'btn--shadowed'
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