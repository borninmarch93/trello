import React from "react";

interface AddCardButtonProps {
    onClick: () => void,
    isFirstCard: boolean
}

const AddCardButton: React.FC<AddCardButtonProps> = ({ onClick, isFirstCard }) => {
    return (
       <div className="list__link">
            <a onClick={onClick}>
                {isFirstCard ? <span>+ Add a card</span> : <span>+ Add another card</span>}
            </a>
        </div>
    )
}

export default AddCardButton;