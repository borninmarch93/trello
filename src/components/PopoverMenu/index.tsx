import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface PopoverMenuProps {
    title: string,
    onClose: () => void,
    show: boolean
}

const PopoverMenu: React.FC<PopoverMenuProps> = ({ title, show, onClose, children }) => {
    return (
        <div className="popover" style={{ display: show ? 'block' : 'none'}}>
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