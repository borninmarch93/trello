import React from "react";
import classNames from "classnames";

interface ModalProps {
    onClose: () => void,
    title: string,
    show: boolean,
    size: 'sm' | 'lg',
}

interface ModalSubcomponents {
    Header: React.FC,
    Body: React.FC
}

const Modal: React.FC<ModalProps> & ModalSubcomponents = ({ onClose, size, show, children}) => {

    const classes = classNames(
        'modal__content',
        size === 'sm' && 'modal--sm',
        size === 'lg' && 'modal--lg',
    )

    return (
        <div style={{ display: show ? 'flex' : 'none'}} className="modal" onClick={onClose}>
            <div className={classes} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

const Header: React.FC = ({ children }) => {
    return (
        <React.Fragment>
            { children }
        </React.Fragment>
    )
}

const Body: React.FC = ({ children }) => {
    return (
        <div className="modal__body">
            { children }
        </div>
    )
}

Modal.Header = Header;
Modal.Body = Body;

export default Modal;