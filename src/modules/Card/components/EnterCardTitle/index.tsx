import Textarea from "../../../../components/Textarea";
import Button from "../../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

interface EnterCardTitleProps {
    onClose: () => void
    onAddNewCard: (title: string) => void
}

const EnterCardTitle: React.FC<EnterCardTitleProps> = ({ onClose, onAddNewCard }) => {
    const [title, setTitle] = useState('');

    const textHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setTitle(value);
    }

    const addNewCardHandler = () => {
        onAddNewCard(title);
        setTitle('');
    }

    return (
        <div className="list__textarea">
            <Textarea
                value={title}
                onChange={(event) => textHandler(event)}
                placeholder={"Enter a title for this card…"}/>
            <div className="new-list__btn">
                <Button
                    variant="primary"
                    onClick={() => addNewCardHandler()}>Add card
                </Button>
                <Button onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes}/>
                </Button>
            </div>
        </div>
    )
}


export default EnterCardTitle;