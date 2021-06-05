import React, { useState } from "react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface EnterListTitleProps {
    onClose: () => void
    onAddNewList: (title: string) => void
}

const EnterListTitle: React.FC<EnterListTitleProps> = ({ onClose, onAddNewList }) => {
    const [title, setTitle] = useState('');

    const textHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setTitle(value);
    }

    const addNewListHandler = () => {
        onAddNewList(title);
        setTitle('');
    }

    return (
        <div className="list-wrapper">
            <div className="new-list__input">
                <Input
                    value={title}
                    onChange={textHandler}
                    placeholder="Enter list title..."
                    type="text"/>
                <div className="new-list__btn">
                    <Button
                        variant="primary"
                        onClick={() => addNewListHandler()}>Add list</Button>
                    <Button onClick={onClose}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default EnterListTitle;