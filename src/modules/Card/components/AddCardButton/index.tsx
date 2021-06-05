import React from "react";

interface AddCardButtonProps {
    onClick: () => void
}

const AddCardButton: React.FC<AddCardButtonProps> = ({ onClick }) => {
    return (
       <div className="list__link">
            <a onClick={onClick}>
                <span>+ Add another card</span>
            </a>
        </div>
    )
}

export default AddCardButton;