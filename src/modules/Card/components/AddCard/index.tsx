import React, { useState } from "react";
import EnterCardTitle from "../EnterCardTitle";
import AddCardButton from "../AddCardButton";

interface AddCardProps {
    onAddNewCard: (title: string) => void
}

const AddCard: React.FC<AddCardProps> = ({ onAddNewCard }) => {
    const [active, setActive] = useState(false);

    const closeHandler = () => {
        setActive(false);
    }

    const openHandler = () => {
        setActive(true);
    }

    return (
        <React.Fragment>
            {active && <EnterCardTitle
                onAddNewCard={onAddNewCard}
                onClose={closeHandler}/>}
            {!active && <AddCardButton onClick={openHandler} />}
        </React.Fragment>
    )
}

export default AddCard;