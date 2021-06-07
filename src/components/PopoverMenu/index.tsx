import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

interface PopoverMenuProps {
    title: string,
    onClose: () => void,
    show: boolean,
    position?: 'left'
}

const PopoverMenu: React.FC<PopoverMenuProps> = ({ title, position, show, onClose, children }) => {
    const classes = classNames(
        'popover',
        position === 'left' && 'popover--left'
    )

    return (
        <div className={classes} style={{ display: show ? 'block' : 'none'}}>
            <div className="popover__header">
                <span>{title}</span>
                <a onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes}/>
                </a>
            </div>
            <div className="popover__body">
                {children}
            </div>
        </div>
    )
}

export default PopoverMenu;