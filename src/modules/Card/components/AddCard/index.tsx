import React, { useState } from "react";
import EnterCardTitle from "../EnterCardTitle";
import AddCardButton from "../AddCardButton";

interface AddCardProps {
    onAddNewCard: (title: string) => void,
    isFirstCard: boolean
}

const AddCard: React.FC<AddCardProps> = ({ onAddNewCard, isFirstCard }) => {
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
            {!active && <AddCardButton isFirstCard={isFirstCard} onClick={openHandler} />}
        </React.Fragment>
    )
}

export default AddCard;